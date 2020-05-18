# global-singleton
Guarantee there is only 1 copy of a module or object

**WARNING: Singletons are often considered anti-pattern in javascript/node practice. It is believed to compromising modularize and isolation between packages and hurt testability. If you don't know what are you doing, don't use singleton!**

In general, in node.js programming you rarely need to worry about singleton, part of reason is *require()* caches result and you got some kinds of singleton.  But when you work on large projects (involve many modules and each bring in their own decency hierarchy), when multiple modules bring in multiple copy of same library, problem can happen.

| Problem | Example |
| --- | --- |
| **Scenario A:** New version of some dependency have breaking changes| This is a real-life story. Consider you have module A (your module) depend on B and C (both your npm modules) , B and C both depend on D (3'rd party module). (note: A don't depend on D thus during *npm install* B and C should each bring in their own copy of D). D depend on E (3'rd party library). Let's say B -> D1 -> E1, C -> D2 -> E2. But E is happen to be a polyfill and need to pollute *process* object. One day E make a breaking change, as the result newer version E (E3) can not co-exist with E1 or E2. Now if A bring in a other new module F, and F is new, so F bring in newer D3, which has updated to use E3. Now suddenly both B and C are broken. The most scary part in this scenario is: All the unit-tests and integration-tests on B, C and F are working just fine. And it simply don't work when it comes together. And typically A is a high-level project thus the author of A never heard of module D or E. A's unit-test is also good. The only thing is broken is A's integration test (it you are un-lucky enough, your staging environment or production will break with some very hard-to-understand error). And if you try Google those error, it's hard to find useful info because this thing does not happen often and not many people ever run into it. | 
| **Scenario B:** Multiple copy of same module simply can not co-exist | A (your module) depend on B and C (both your npm module) , B and C both depend on a module cls (*continuation-local-storage*) (or some 3'rd party module providing equivalent functionality). The problems is:  B sets some data in cls, and later trying to read it out. C is some kind of DAO layer, and thus C have to perform *ns.bind()* on each call-back to keep the caller's run-time context. In case of B and C each has their own copy of the cls library, there is no way for C to be able to keep the run-time-context set by B earlier. The reason is D1 and D2 are 2 different copies thus they don't know each-other (even if they might happen to be exactly same version), this scenario simply won't work. I don't mean to blame the author of *cls* or any other libraries, probably I will implement *cls* in the same way (because I cannot think of way to make this scenario work without polluting global *process* object). In this case, we simply cannot afford to have multiple copy of a same library under 1 roof.
| **Scenario C:** Sometime you do want JVM-wide singleton | Think about you want to write a heartbeat manager (module H). It produce a heartbeat message every other 60 seconds. And reports basic machine health info like CPU/mem/QPS/GC_count/etc. And also it generate a random instanceId to uniquely identify this run-time-instance. Multiple instance running on the same host will get different instanceId, and if instance get bounced it should get a new instanceId as well. 1) It doesn’t make sense to have more than 1 instance of this module H running (within 1 V8 Virtual Machine). 2) When B and C write event logging, they may need to read instanceId from H to tag log message properly. 3) B and C may want to report metrics data to MetricsManager (module M). And H sometimes also want to read info from M (for QPS counters). In this case, we really want to make sure both H (HeartbeatManager) and M (MetricsManager) are kind of VirtualMachine-wide singleton. It does not make sense to have B reporting metrics to M1, but H read runtime QPS count from M2. |

If you run into any of the above scenario, read on.

## Installation
```console
npm install global-singleton --save
```

## Usage (in both module B and C)
### Before
```javascript
var D = require('D');
```
### After
```javascript
var gs = require('global-singleton');
var D = gs('D');
```

## What happened
global-singleton will guarantee you: same module ('D') will load once and only once. If module B runs first, node_modules/B/node_modules/D will get loaded and when C trying to load 'D', we simply return the same copy which B already loaded (instead load another copy from node_modules/C/node_modules/D). 

## Bad news and good news
- Bad news: global-singleton will pollute *process* object and store a dictionary of <string, object> there (*process['global-singleton']*).
- Good news: (Once GS already did the dirty work for you) You will never need to pollute *process* object (or anything global) by your-self, you can just trust GS to handle those hassle for you.

## What else?
- global-singleton also promise don't do any breaking changes - ever. Which means, If B use GS 0.1.2 and load D1 as 'D', C can feel free to use GS 1000.0.0 and get 'D' still going to return D1 (which is loaded by B).
- For better or for worse: When you have multiple copy of D (D1 in B's folder, D2 in C's folder), which one is going to get loaded is based on start-up sequence. First one win.

## How to write unit-test for your module?
If your modules use global-singleton, you can use following api to write unit-test.
```javascript
var gs = require('global-singleton');

var mockD = {};
gs.clear('D'); // this will clear current registered 'D' (if any)
var D = gs('D', function() { return mockD; }); // from now on, you have mockD registered as 'D'
```

## How if my singleton is not a module?
```javascript
var gs = require('global-singleton');
var heartbeat = gs('heartbeat', function() { return new HeartbeatManager('my-service'); });
```
