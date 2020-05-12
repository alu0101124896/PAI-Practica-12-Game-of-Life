/**
 * @file objeto-grafico.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a GraphicalObject class for the
 *  graphical object.
 */

"use strict";

// let BoardOnGraphicalObject;
// if (typeof require !== 'undefined') { // Execution in node
//   BoardOnGraphicalObject = require('./board.js').Board;
// } else { // Execution in browser
//   BoardOnGraphicalObject = Board;
// }

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
    this.CANVAS.height = window.innerHeight - 300;

  }
}

let graphicalObject = new GraphicalObject();

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.GraphicalObject = GraphicalObject;
}
