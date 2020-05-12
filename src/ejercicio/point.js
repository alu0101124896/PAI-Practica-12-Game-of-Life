/**
 * @file point.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a point class for the Graphical Object
 */

"use strict";

const GREEN_POINT = 'forestGreen';

/**
 * @description Class representing a point
 *
 * @param {number} [xCoord=0] - X coordinate of the point
 * @param {number} [yCoord=0] - Y coordinate of the point
 * @param {number} [radius=10] - Radius of the point
 *
 * @class Point
 */
class Point {
  constructor(xCoord = 0, yCoord = 0, radius = 10) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.radius = radius;
  }

  /**
   * @description Function that moves the point the given displacement
   *
   * @param {number} xCoordDisp - number of pixels to be displaced on the X
   *  coordinate
   * @param {number} yCoordDisp - number of pixels to be displaced on the Y
   *  coordinate
   * @memberof Point
   */
  move(xCoordDisp, yCoordDisp) {
    this.xCoord += Number(xCoordDisp);
    this.yCoord += Number(yCoordDisp);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the point
   *
   * @param {*} CONTEXT - Canvas context
   * @memberof Point
   */
  draw(CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = GREEN_POINT;
    CONTEXT.ellipse(this.xCoord, this.yCoord, this.radius, this.radius, 0, 0, Math.PI * 2);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Point = Point;
}
