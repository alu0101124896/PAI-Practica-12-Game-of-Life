/**
 * @file cell.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a cell class for the Game of Life. More
 *  info about it here: "https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
 */

"use strict";

const DEAD_CELL = 'black';
const ALIVE_CELL = 'white';

/**
 * @description Class representing a cell for the Game of Life.
 *
 * @class Cell
 */
class Cell {

  /**
   * @description Constructor that creates an instance of a cell.
   *
   * @param {number} [row=0] - Row of the cell on the board
   * @param {number} [column=0] - Column of the cell on the board
   * @param {boolean} [aliveState=false] - Alive state of the cell
   * @memberof Cell
   */
  constructor(row = 0, column = 0, aliveState = false) {
    this.row = row;
    this.column = column;
    this.aliveState = aliveState;
    this.aliveNeighbours = 0;
  }

  /**
   * @description Function that resets the state of the cell and the neighbours
   *  counter
   *
   * @memberof Cell
   */
  reset() {
    this.aliveState = false;
    this.aliveNeighbours = 0;
  }

  /**
   * @description Function that updates the state of the cell
   *
   * @memberof Cell
   */
  updateState() {
    if (this.aliveState && (this.aliveNeighbours !== 3) &&
      (this.aliveNeighbours !== 2)) {
      this.aliveState = false;
    } else if (!this.aliveState && this.aliveNeighbours === 3) {
      this.aliveState = true;
    } else {
      // The state remains the same
    }
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the state of the cell
   *
   * @param {*} cellSize
   * @param {*} CONTEXT
   * @memberof Cell
   */
  draw(cellSize, CONTEXT) {
    if (this.aliveState) {
      CONTEXT.fillStyle = ALIVE_CELL;
    } else {
      CONTEXT.fillStyle = DEAD_CELL;
    }
    CONTEXT.fillRect((this.column - 1) * cellSize, (this.row - 1) * cellSize,
      cellSize, cellSize);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Cell = Cell;
}
