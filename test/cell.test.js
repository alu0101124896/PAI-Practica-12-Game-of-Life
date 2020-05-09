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
  });
});
