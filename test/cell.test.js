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

    it('Cell has a row', () => {
      expectOnCellTest(MY_CELL).to.have.property('row');
      expectOnCellTest(MY_CELL.row).to.be.a('number');
    });

    it('Cell has a column', () => {
      expectOnCellTest(MY_CELL).to.have.property('column');
      expectOnCellTest(MY_CELL.column).to.be.a('number');
    });

    it('Cell has an aliveState', () => {
      expectOnCellTest(MY_CELL).to.have.property('aliveState');
      expectOnCellTest(MY_CELL.aliveState).to.be.a('boolean');
    });

    it('Cell has an aliveNeighbours', () => {
      expectOnCellTest(MY_CELL).to.have.property('aliveNeighbours');
      expectOnCellTest(MY_CELL.aliveNeighbours).to.be.a('number');
    });

    it('Default row is 0', () => {
      expectOnCellTest(MY_CELL.row).to.be.equal(0);
    });

    it('Default column is 0', () => {
      expectOnCellTest(MY_CELL.column).to.be.equal(0);
    });

    it('Default aliveState is false', () => {
      expectOnCellTest(MY_CELL.aliveState).to.be.equal(false);
    });

    it('Default aliveNeighbours is false', () => {
      expectOnCellTest(MY_CELL.aliveNeighbours).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_CELL = new CellOnCellTest(5, 10, true);

    it('Modifies default row correctly', () => {
      expectOnCellTest(MY_CELL.row).to.be.equal(5);
    });

    it('Modifies default column correctly', () => {
      expectOnCellTest(MY_CELL.column).to.be.equal(10);
    });

    it('Modifies default aliveState correctly', () => {
      expectOnCellTest(MY_CELL.aliveState).to.be.equal(true);
    });
  });

  describe('Cell methods', () => {
    let myCell = new CellOnCellTest();

    it('Reset', () => {
      myCell.aliveState = true;
      myCell.aliveNeighbours = 5;
      myCell.reset();
      expectOnCellTest(myCell.aliveState).to.be.equal(false);
      expectOnCellTest(myCell.aliveNeighbours).to.be.equal(0);
    });

    it('Update state (birth with three neighbours)', () => {
      myCell.aliveNeighbours = 3;
      myCell.updateState();
      expectOnCellTest(myCell.aliveState).to.be.equal(true);
    });

    it('Update state (death by overcrowding)', () => {
      myCell.aliveNeighbours = 6;
      myCell.updateState();
      expectOnCellTest(myCell.aliveState).to.be.equal(false);
    });

    it('Update state (death by isolation)', () => {
      myCell.aliveState = true;
      myCell.aliveNeighbours = 1;
      myCell.updateState();
      expectOnCellTest(myCell.aliveState).to.be.equal(false);
    });

    it('Update state (remain alive state)', () => {
      myCell.aliveState = true;
      myCell.aliveNeighbours = 2;
      myCell.updateState();
      expectOnCellTest(myCell.aliveState).to.be.equal(true);
    });

    it('Update state (remain death state)', () => {
      myCell.aliveState = false;
      myCell.aliveNeighbours = 2;
      myCell.updateState();
      expectOnCellTest(myCell.aliveState).to.be.equal(false);
    });
  });
});
