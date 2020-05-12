/**
 * @file point.test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the point class
 */

"use strict";

let expectOnPointTest;
let PointOnPointTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPointTest = require('chai').expect;
  PointOnPointTest = require('../src/ejercicio/point.js').Point;
} else { // Execution in browser
  expectOnPointTest = expect;
  PointOnPointTest = Point;
}

describe('Point Class', () => {
  describe('Default properties', () => {
    const MY_POINT = new PointOnPointTest();

    it('Point has a xCoord', () => {
      expectOnPointTest(MY_POINT).to.have.property('xCoord');
      expectOnPointTest(MY_POINT.xCoord).to.be.a('number');
    });

    it('Point has a yCoord', () => {
      expectOnPointTest(MY_POINT).to.have.property('yCoord');
      expectOnPointTest(MY_POINT.yCoord).to.be.a('number');
    });

    it('Point has a radius', () => {
      expectOnPointTest(MY_POINT).to.have.property('radius');
      expectOnPointTest(MY_POINT.radius).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnPointTest(MY_POINT.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnPointTest(MY_POINT.yCoord).to.be.equal(0);
    });

    it('Default radius is 10', () => {
      expectOnPointTest(MY_POINT.radius).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_POINT = new PointOnPointTest(5, 10, 15);

    it('Modifies default xCoord correctly', () => {
      expectOnPointTest(MY_POINT.xCoord).to.be.equal(5);
    });

    it('Modifies default yCoord correctly', () => {
      expectOnPointTest(MY_POINT.yCoord).to.be.equal(10);
    });

    it('Modifies default radius correctly', () => {
      expectOnPointTest(MY_POINT.radius).to.be.equal(15);
    });
  });

  describe('Point methods', () => {
    let myPoint;

    beforeEach(() => {
      myPoint = new PointOnPointTest(10, 10);
    });

    it('Move up', () => {
      myPoint.move(0, -5);
      expectOnPointTest(myPoint.xCoord).to.be.equal(10);
      expectOnPointTest(myPoint.yCoord).to.be.equal(5);
    });

    it('Move down', () => {
      myPoint.move(0, 5);
      expectOnPointTest(myPoint.xCoord).to.be.equal(10);
      expectOnPointTest(myPoint.yCoord).to.be.equal(15);
    });

    it('Move to the left', () => {
      myPoint.move(5, 0);
      expectOnPointTest(myPoint.xCoord).to.be.equal(15);
      expectOnPointTest(myPoint.yCoord).to.be.equal(10);
    });

    it('Move to the right', () => {
      myPoint.move(-5, 0);
      expectOnPointTest(myPoint.xCoord).to.be.equal(5);
      expectOnPointTest(myPoint.yCoord).to.be.equal(10);
    });
  });
});
