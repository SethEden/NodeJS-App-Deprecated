var gs = require('../lib/global-singleton.js');

describe('global-singleton', function() {
    beforeEach(function() {
        gs.clear('name');
    });

    it('be able to create singleton object', function() {
        var called = false;
        var create = function() {
            called = true;
            return {};
        }
        var ret = gs('name', create);
        expect(ret).to.be.a('object');
        expect(called).to.equal(true);
    });

    it('be able to return the same singleton object', function() {
        var create1 = function() {
            return 'o1';
        }
        var create2 = function() {
            return 'o2';
        }

        var ret1 = gs('name', create1);
        var ret2 = gs('name', create2);
        expect(ret2).to.equal('o1');
    });

    it('be able to clear', function() {
        var create1 = function() {
            return 'o1';
        }
        var create2 = function() {
            return 'o2';
        }

        var ret1 = gs('name', create1);
        gs.clear('name');
        var ret2 = gs('name', create2);
        expect(ret2).to.equal('o2');
    });

    it('be able to return the different singleton object for different name', function() {
        var create1 = function() {
            return 'o1';
        }
        var create2 = function() {
            return 'o2';
        }

        var ret1 = gs('name1', create1);
        var ret2 = gs('name2', create2);
        expect(ret2).to.not.equal('o1');
    });
});
