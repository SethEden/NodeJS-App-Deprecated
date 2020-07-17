"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cCube = exports.ccube = exports.cTrapezoid = exports.ctrapezoid = exports.cNonagon = exports.cnonagon = exports.cHeptagon = exports.cheptagon = exports.cHexagon = exports.chexagon = exports.cOctagon = exports.coctagon = exports.cRectangle = exports.crectangle = exports.cTriangle = exports.ctriangle = exports.cSquare = exports.csquare = exports.cOval = exports.coval = exports.cCircle = exports.ccircle = exports.cLine = exports.cline = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var w = _interopRequireWildcard(require("./word.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file shape.constants.js
 * @module shape-constants
 * @description Contains named geometric shapes.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// Shapes
var cline = b.cli + b.cne;
exports.cline = cline;
var cLine = b.cLi + b.cne;
exports.cLine = cLine;
var ccircle = p.ccir + p.ccle;
exports.ccircle = ccircle;
var cCircle = p.cCir + p.ccle;
exports.cCircle = cCircle;
var coval = b.cov + b.cal;
exports.coval = coval;
var cOval = b.cOv + b.cal;
exports.cOval = cOval;
var csquare = b.cs + p.cquare;
exports.csquare = csquare;
var cSquare = b.cS + p.cquare;
exports.cSquare = cSquare;
var ctriangle = p.ctri + w.cangle;
exports.ctriangle = ctriangle;
var cTriangle = p.cTri + w.cangle;
exports.cTriangle = cTriangle;
var crectangle = p.crect + w.cangle;
exports.crectangle = crectangle;
var cRectangle = p.cRect + w.cangle;
exports.cRectangle = cRectangle;
var coctagon = p.coct + b.ca + p.cgon;
exports.coctagon = coctagon;
var cOctagon = p.cOct + b.ca + p.cgon;
exports.cOctagon = cOctagon;
var chexagon = p.chex + b.ca + p.cgon;
exports.chexagon = chexagon;
var cHexagon = p.cHex + b.ca + p.cgon;
exports.cHexagon = cHexagon;
var cheptagon = p.chep + b.ca + p.cgon;
exports.cheptagon = cheptagon;
var cHeptagon = p.cHep + b.ca + p.cgon;
exports.cHeptagon = cHeptagon;
var cnonagon = p.cnon + b.ca + p.cgon;
exports.cnonagon = cnonagon;
var cNonagon = p.cNon + b.ca + p.cgon;
exports.cNonagon = cNonagon;
var ctrapezoid = w.ctrap + b.ce + p.czoid;
exports.ctrapezoid = ctrapezoid;
var cTrapezoid = w.cTrap + b.ce + p.czoid;
exports.cTrapezoid = cTrapezoid;
var ccube = b.ccu + b.cbe;
exports.ccube = ccube;
var cCube = b.cCu + b.cbe; // This could go on forever!!
// https://en.wikipedia.org/wiki/List_of_mathematical_shapes

exports.cCube = cCube;