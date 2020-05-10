/**
 * @file board.test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Board class
 */

"use strict";

let expectOnBoardTest;
let BoardOnBoardTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBoardTest = require('chai').expect;
  BoardOnBoardTest = require('../src/board.js').Board;
} else { // Execution in browser
  expectOnBoardTest = expect;
  BoardOnBoardTest = Board;
}

describe('Board Class', () => {
  describe('Default properties', () => {
    const MY_BOARD = new BoardOnBoardTest();

    it('Board has a nRows', () => {
      expectOnBoardTest(MY_BOARD).to.have.property('nRows');
      expectOnBoardTest(MY_BOARD.nRows).to.be.a('number');
    });

    it('Board has a nColumns', () => {
      expectOnBoardTest(MY_BOARD).to.have.property('nColumns');
      expectOnBoardTest(MY_BOARD.nColumns).to.be.a('number');
    });

    it('Board has a cellSize', () => {
      expectOnBoardTest(MY_BOARD).to.have.property('cellSize');
      expectOnBoardTest(MY_BOARD.cellSize).to.be.a('number');
    });

    it('Default nRows is 5', () => {
      expectOnBoardTest(MY_BOARD.nRows).to.be.equal(5);
    });

    it('Default nColumns is 5', () => {
      expectOnBoardTest(MY_BOARD.nColumns).to.be.equal(5);
    });

    it('Default cellSize is 20', () => {
      expectOnBoardTest(MY_BOARD.cellSize).to.be.equal(20);
    });
  });

  describe('Non default property values', () => {
    const MY_BOARD = new BoardOnBoardTest(5, 10, 15);

    it('Modifies default nRows correctly', () => {
      expectOnBoardTest(MY_BOARD.nRows).to.be.equal(5);
    });

    it('Modifies default nColumns correctly', () => {
      expectOnBoardTest(MY_BOARD.nColumns).to.be.equal(10);
    });

    it('Modifies default cellSize correctly', () => {
      expectOnBoardTest(MY_BOARD.cellSize).to.be.equal(15);
    });
  });

  describe('Board methods', () => {
    let myBoard = new BoardOnBoardTest(50, 50);

    it('Put random cells', () => {
      let numOfCells = 10;
      let cellsCounter = 0;
      myBoard.putRandomCells(numOfCells);
      myBoard.grid.forEach(row => {
        row.forEach(cell => {
          if (cell.aliveState) {
            cellsCounter++;
          }
        });
      });
      expectOnBoardTest(cellsCounter).to.be.equal(numOfCells);
    });

    it('Reset', () => {
      let cellsCounter = 0;
      myBoard.reset();
      myBoard.grid.forEach(row => {
        row.forEach(cell => {
          if (cell.aliveState) {
            cellsCounter++;
          }
        });
      });
      expectOnBoardTest(cellsCounter).to.be.equal(0);
    });

    it('Count alive neighbours', () => {
      myBoard.grid[1][2].aliveState = true;
      myBoard.grid[2][3].aliveState = true;
      myBoard.grid[3][1].aliveState = true;
      myBoard.grid[3][2].aliveState = true;
      myBoard.grid[3][3].aliveState = true;
      myBoard.countAliveNeighbours();
      expectOnBoardTest(myBoard.grid[1][1].aliveNeighbours).to.be.equal(1);
      expectOnBoardTest(myBoard.grid[1][2].aliveNeighbours).to.be.equal(1);
      expectOnBoardTest(myBoard.grid[1][3].aliveNeighbours).to.be.equal(2);
      expectOnBoardTest(myBoard.grid[2][1].aliveNeighbours).to.be.equal(3);
      expectOnBoardTest(myBoard.grid[2][2].aliveNeighbours).to.be.equal(5);
      expectOnBoardTest(myBoard.grid[2][3].aliveNeighbours).to.be.equal(3);
      expectOnBoardTest(myBoard.grid[3][1].aliveNeighbours).to.be.equal(1);
      expectOnBoardTest(myBoard.grid[3][2].aliveNeighbours).to.be.equal(3);
      expectOnBoardTest(myBoard.grid[3][3].aliveNeighbours).to.be.equal(2);
    });

    it('Update state', () => {
      myBoard.updateState();
      expectOnBoardTest(myBoard.grid[2][1].aliveState).to.be.equal(true);
      expectOnBoardTest(myBoard.grid[2][3].aliveState).to.be.equal(true);
      expectOnBoardTest(myBoard.grid[3][2].aliveState).to.be.equal(true);
      expectOnBoardTest(myBoard.grid[3][3].aliveState).to.be.equal(true);
      expectOnBoardTest(myBoard.grid[4][2].aliveState).to.be.equal(true);
    });
  });
});
