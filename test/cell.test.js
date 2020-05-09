/**
 * @file cell.test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Cell class
 */

"use strict";

let expectOnCellTest;
let CellOnCellTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnCellTest = require('chai').expect;
  CellOnCellTest = require('../src/cell.js').Cell;
} else { // Execution in browser
  expectOnCellTest = expect;
  CellOnCellTest = Cell;
}

describe('Cell Class', () => {
  describe('Default properties', () => {
    const MY_CELL = new CellOnCellTest();

    it('Cell has a xCoord', () => {
      expectOnCellTest(MY_CELL).to.have.property('xCoord');
      expectOnCellTest(MY_CELL.xCoord).to.be.a('number');
    });

    it('Cell has a yCoord', () => {
      expectOnCellTest(MY_CELL).to.have.property('yCoord');
      expectOnCellTest(MY_CELL.yCoord).to.be.a('number');
    });

    it('Cell has a alive', () => {
      expectOnCellTest(MY_CELL).to.have.property('alive');
      expectOnCellTest(MY_CELL.alive).to.be.a('boolean');
    });

    it('Default xCoord is 0', () => {
      expectOnCellTest(MY_CELL.xCoord).to.be.equal(0);
    });
  });
});
