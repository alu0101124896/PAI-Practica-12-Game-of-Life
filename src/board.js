/**
 * @file board.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a board class for the Game of Life. More
 *  info about it here: "https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
 */

"use strict";

let CellOnBoard;
if (typeof require !== 'undefined') { // Execution in node
  CellOnBoard = require('../src/cell.js').Cell;
} else { // Execution in browser
  CellOnBoard = Cell;
}

/**
 * @description Class representing a board for the Game of Life.
 *
 * @class Board
 */
class Board {

  /**
   * @description Constructor that creates an instance of a board.
   *
   * @param {number} [cellSize=0] - Size of the cells on the board
   * @memberof Board
   */
  constructor(nRows = 5, nColumns = 5, cellSize = 20) {
    this.nRows = nRows;
    this.nColumns = nColumns;
    this.cellSize = cellSize;
    this.grid = [];
    for (let rowsIterator = 0; rowsIterator < nRows + 2; rowsIterator++) {
      let tempColumn = [];
      for (let columnsIterator = 0; columnsIterator < nColumns + 2;
        columnsIterator++) {
        tempColumn.push(new CellOnBoard(rowsIterator, columnsIterator));
      }
      this.grid.push(tempColumn);
    }
  }

  /**
   * @description Function that counts the number of aliveState neighbour cells of
   *  each cell on the board
   *
   * @memberof Board
   */
  countAliveNeighbours() {
    for (let rowsIterator = 0; rowsIterator < nRows; rowsIterator++) {
      for (let columnsIterator = 0; columnsIterator < nColumns;
        columnsIterator++) {
        this.grid[rowsIterator][columnsIterator].aliveNeighbours = 0;
        if (this.grid[rowsIterator - 1][columnsIterator - 1].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
        if (this.grid[rowsIterator - 1][columnsIterator].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
        if (this.grid[rowsIterator - 1][columnsIterator + 1].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
        if (this.grid[rowsIterator][columnsIterator - 1].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
        if (this.grid[rowsIterator][columnsIterator + 1].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
        if (this.grid[rowsIterator + 1][columnsIterator - 1].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
        if (this.grid[rowsIterator + 1][columnsIterator].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
        if (this.grid[rowsIterator + 1][columnsIterator + 1].aliveState) {
          this.grid[rowsIterator][columnsIterator].aliveNeighbours++;
        }
      }
    }
  }

  /**
   * @description Function that draws the grid at the given canvas
   *
   * @param {*} CANVAS
   * @param {*} CONTEXT
   * @memberof Board
   */
  draw(CANVAS, CONTEXT) {

  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Board = Board;
}
