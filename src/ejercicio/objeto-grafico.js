/**
 * @file objeto-grafico.js
 * @author Sergio Tabares Hernández <alu0this.movingPoint.radius1124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a GraphicalObject class for the
 *  graphical object.
 */

"use strict";

let PointOnGraphicalObject;
if (typeof require !== 'undefined') { // Execution in node
  PointOnGraphicalObject = require('./point.js').Point;
} else { // Execution in browser
  PointOnGraphicalObject = Point;
}

/**
 * @description Class that handles the functionalities of the Conway's Game of
 *  Life.
 *
 * @class GraphicalObject
 */
class GraphicalObject {
  constructor() {
    this.CANVAS = document.getElementById("canvas");
    this.CONTEXT = this.CANVAS.getContext("2d");
    this.CANVAS.width = window.innerWidth - 150;
    this.CANVAS.height = window.innerHeight - 350;
    this.movingPoint = new PointOnGraphicalObject(this.CANVAS.width / 2,
      this.CANVAS.height / 2);
    this.draw();
  }

  /**
   * @description Function that moves the point to the north
   *
   * @memberof GraphicalObject
   */
  north() {
    if (this.movingPoint.yCoord > this.movingPoint.radius) {
      if (document.getElementById("numOfPixels").value <
        this.movingPoint.yCoord - this.movingPoint.radius) {
        this.movingPoint.move(0, -document.getElementById("numOfPixels").value);
        this.draw();
      } else {
        this.movingPoint.
          move(0, -(this.movingPoint.yCoord - this.movingPoint.radius));
        this.draw();
      }
    }
  }

  /**
   * @description Function that moves the point to the south
   *
   * @memberof GraphicalObject
   */
  south() {
    if (this.movingPoint.yCoord < this.CANVAS.height - this.movingPoint.radius) {
      if (document.getElementById("numOfPixels").value <
        this.CANVAS.height - (this.movingPoint.yCoord + this.movingPoint.radius)) {
        this.movingPoint.move(0, document.getElementById("numOfPixels").value);
        this.draw();
      } else {
        this.movingPoint.
          move(0, this.CANVAS.height - (this.movingPoint.yCoord + this.movingPoint.radius));
        this.draw();
      }
    }
  }

  /**
   * @description Function that moves the point to the west
   *
   * @memberof GraphicalObject
   */
  west() {
    if (this.movingPoint.xCoord > this.movingPoint.radius) {
      if (document.getElementById("numOfPixels").value <
        this.movingPoint.xCoord - this.movingPoint.radius) {
        this.movingPoint.move(-document.getElementById("numOfPixels").value, 0);
        this.draw();
      } else {
        this.movingPoint.
          move(-(this.movingPoint.xCoord - this.movingPoint.radius), 0);
        this.draw();
      }
    }
  }

  /**
   * @description Function that moves the point to the east
   *
   * @memberof GraphicalObject
   */
  east() {
    if (this.movingPoint.xCoord < this.CANVAS.width - this.movingPoint.radius) {
      if (document.getElementById("numOfPixels").value <
        this.CANVAS.width - (this.movingPoint.xCoord + this.movingPoint.radius)) {
        this.movingPoint.move(document.getElementById("numOfPixels").value, 0);
        this.draw();
      } else {
        this.movingPoint.
          move(this.CANVAS.width - (this.movingPoint.xCoord + this.movingPoint.radius), 0);
        this.draw();
      }
    }
  }

  /**
   * @description Function that resets the canvas and draws the point
   *
   * @memberof GraphicalObject
   */
  draw() {
    this.CONTEXT.clearRect(0, 0, this.CANVAS.width, this.CANVAS.height);
    this.movingPoint.draw(this.CONTEXT);
  }
}

let graphicalObject = new GraphicalObject();

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.GraphicalObject = GraphicalObject;
}
