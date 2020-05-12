/**
 * @file objeto-grafico.test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the GraphicalObject class
 */

"use strict";

let expectOnGraphicalObjectTest;
let GraphicalObjectOnGraphicalObjectTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnGraphicalObjectTest = require('chai').expect;
  GraphicalObjectOnGraphicalObjectTest = require('../src/ejercicio/objeto-grafico.js').GraphicalObject;
} else { // Execution in browser
  expectOnGraphicalObjectTest = expect;
  GraphicalObjectOnGraphicalObjectTest = GraphicalObject;
}

describe('GraphicalObject Class', () => {
  describe('Default properties', () => {
    const MY_GRAPHICAL_OBJECT = new GraphicalObjectOnGraphicalObjectTest();

    it('GraphicalObject has a canvas', () => {
      expectOnGraphicalObjectTest(MY_GRAPHICAL_OBJECT).to.have.property('CANVAS');
    });

    it('GraphicalObject has a context', () => {
      expectOnGraphicalObjectTest(MY_GRAPHICAL_OBJECT).to.have.property('CONTEXT');
    });

    it('GraphicalObject has a moving point', () => {
      expectOnGraphicalObjectTest(MY_GRAPHICAL_OBJECT).to.have.property('movingPoint');
    });
  });

  describe('GraphicalObject methods', () => {
    let myGraphicalObject;

    beforeEach(() => {
      myGraphicalObject = new GraphicalObjectOnGraphicalObjectTest();
    });

    it('Move north', () => {
      myGraphicalObject.north();
      expectOnGraphicalObjectTest(myGraphicalObject.yCoord).to.be.equal(0);
    });
  });
});
