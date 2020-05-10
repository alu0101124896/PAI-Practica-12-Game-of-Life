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
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  CellOnBoard = require('../src/cell.js').Cell;
}
/* istanbul ignore next */
else { // Execution in browser
  CellOnBoard = Cell;
}

const GREY_LINE = '#202020';
const GRID_LINE_WIDTH = 1;

/**
 * @description Class representing a board for the Game of Life.
 *
 * @class Board
 */
class Board {

  /**
   * @description Constructor that creates an instance of a board.
   *
   * @param {number} [nRows=5] - Number of rows of the board
   * @param {number} [nColumns=5] - Number of columns of the board
   * @param {number} [cellSize=20] - Size of the cells of the board
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
   * @description Function that puts the given number of cells at random
   *  positions
   *
   * @param {number} numOfCells - Number of cells to be placed on the grid
   * @memberof Board
   */
  putRandomCells(numOfCells) {
    for (let cellsIterator = 0; cellsIterator < numOfCells; cellsIterator++) {
      this.grid[Math.floor(Math.random() * this.nRows)][Math.floor(Math.random() * this.nColumns)].aliveState = true;
    }
  }

  /**
   * @description Function that resets every cell on the grid
   *
   * @memberof Board
   */
  reset() {
    this.grid.forEach(row => {
      row.forEach(cell => {
        cell.reset();
      });
    });
  }

  /**
   * @description Function that counts the number of aliveState neighbour cells of
   *  each cell on the board
   *
   * @memberof Board
   */
  countAliveNeighbours() {
    for (let rowsIterator = 1; rowsIterator <= this.nRows; rowsIterator++) {
      for (let columnsIterator = 1; columnsIterator <= this.nColumns;
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
   * @description Function that updates the state of all the cells on the board
   *
   * @memberof Board
   */
  updateState() {
    for (let rowsIterator = 1; rowsIterator <= this.nRows; rowsIterator++) {
      for (let columnsIterator = 1; columnsIterator <= this.nColumns;
        columnsIterator++) {
        this.grid[rowsIterator][columnsIterator].updateState();
      }
    }
  }

  /**
   * @description Function that draws the board at the given canvas
   *
   * @param {*} CONTEXT
   * @param {*} CANVAS
   * @memberof Board
   */
  draw(CONTEXT, CANVAS) {
    for (let rowsIterator = 1; rowsIterator <= this.nRows; rowsIterator++) {
      for (let columnsIterator = 1; columnsIterator <= this.nColumns;
        columnsIterator++) {
        this.grid[rowsIterator][columnsIterator].
          draw(this.cellSize, CONTEXT);
      }
    }
    let widthIterator = this.cellSize;
    while (widthIterator < CANVAS.width) {
      CONTEXT.beginPath();
      CONTEXT.strokeStyle = GREY_LINE;
      CONTEXT.lineWidth = GRID_LINE_WIDTH;
      CONTEXT.moveTo(widthIterator + 0.5, 0);
      CONTEXT.lineTo(widthIterator + 0.5, CANVAS.height);
      CONTEXT.stroke();

      widthIterator += this.cellSize;
    }
    let heightIterator = this.cellSize;
    while (heightIterator < CANVAS.height) {
      CONTEXT.beginPath();
      CONTEXT.strokeStyle = GREY_LINE;
      CONTEXT.lineWidth = GRID_LINE_WIDTH;
      CONTEXT.moveTo(0, heightIterator + 0.5);
      CONTEXT.lineTo(CANVAS.width, heightIterator + 0.5);
      CONTEXT.stroke();

      heightIterator += this.cellSize;
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Board = Board;
}
