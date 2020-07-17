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
import * as b from './basic.constants';
import * as p from './phonics.constants';
import * as g from './generic.constants';
import * as w from './word.constants';

// Shapes
export const cline = b.cli + b.cne;
export const cLine = b.cLi + b.cne;
export const ccircle = p.ccir + p.ccle;
export const cCircle = p.cCir + p.ccle;
export const coval = b.cov + b.cal;
export const cOval = b.cOv + b.cal;
export const csquare = b.cs + p.cquare;
export const cSquare = b.cS + p.cquare;
export const ctriangle = p.ctri + w.cangle;
export const cTriangle = p.cTri + w.cangle;
export const crectangle = p.crect + w.cangle;
export const cRectangle = p.cRect + w.cangle;
export const coctagon = p.coct + b.ca + p.cgon;
export const cOctagon = p.cOct + b.ca + p.cgon;
export const chexagon = p.chex + b.ca + p.cgon;
export const cHexagon = p.cHex + b.ca + p.cgon;
export const cheptagon = p.chep + b.ca + p.cgon;
export const cHeptagon = p.cHep + b.ca + p.cgon;
export const cnonagon = p.cnon + b.ca + p.cgon;
export const cNonagon = p.cNon + b.ca + p.cgon;
export const ctrapezoid = w.ctrap + b.ce + p.czoid;
export const cTrapezoid = w.cTrap + b.ce + p.czoid;
export const ccube = b.ccu + b.cbe;
export const cCube = b.cCu + b.cbe;
// This could go on forever!!
// https://en.wikipedia.org/wiki/List_of_mathematical_shapes
