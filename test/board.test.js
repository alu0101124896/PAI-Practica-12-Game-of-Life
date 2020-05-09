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
  });
});
