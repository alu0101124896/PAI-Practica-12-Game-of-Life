/**
 * @file cell.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a cell class for the Game of Life. More
 *  info about it here: https://en.wikipedia.org/wiki/Conway's_Game_of_Life
 */

"use strict";

/**
 * @description Class representing a cell
 *
 * @class Cell
 */
class Cell {

  /**
   * @description Constructor that creates an instance of a cell.
   *
   * @param {number} [xCoord=0] - X coordinate of the cell
   * @memberof Cell
   */
  constructor(xCoord = 0) {
    this.xCoord = xCoord;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Cell = Cell;
}
