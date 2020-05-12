/**
 * @file point.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a point class for the Graphical Object
 */

"use strict";

const GREEN_POINT = 'rgb(127,255,0)';

/**
 * @description Class representing a point
 *
 * @class Point
 */
class Point {

  /**
   * @description Constructor that creates an instance of a point.
   *
   * @param {number} [xCoord=0] - X coordinate of the point
   * @param {number} [yCoord=0] - Y coordinate of the point
   * @memberof Point
   */
  constructor(xCoord = 0, yCoord = 0) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the point
   *
   * @param {Grid} grid - Grid where the point is located
   * @param {*} CONTEXT - Canvas context
   * @memberof Point
   */
  draw(grid, CONTEXT) {
    CONTEXT.beginPath();
    CONTEXT.fillStyle = GREEN_POINT;
    CONTEXT.ellipse(this.xCoord, this.yCoord, grid.stepLenght / 2,
      grid.stepLenght / 2, 0, 0, Math.PI * 2);
    CONTEXT.fill();
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Point = Point;
}
