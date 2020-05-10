/**
 * @file board.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a Game of Life class for the Game of
 *  Life. More info about it here:
 *  "https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
 */

"use strict";

let BoardOnGameOfLife;
if (typeof require !== 'undefined') { // Execution in node
  BoardOnGameOfLife = require('../src/board.js').Board;
} else { // Execution in browser
  BoardOnGameOfLife = Board;
}

/**
 * @description Class representing the Game of Life.
 *
 * @class GameOfLife
 */
class GameOfLife {

  /**
   * @description Constructor that creates an instance of a Game of Life.
   *
   * @memberof GameOfLife
   */
  constructor() {
    this.CANVAS = document.getElementById("canvas");
    this.CONTEXT = this.CANVAS.getContext("2d");
    this.CANVAS.width = window.innerWidth * 2 / 3;
    this.CANVAS.height = window.innerHeight - 180;
    this.cellSize = 10;
    this.nRows = Math.floor(this.CANVAS.height / this.cellSize) + 1;
    this.nColumns = Math.floor(this.CANVAS.width / this.cellSize) + 1;
    this.board = new BoardOnGameOfLife(this.nRows, this.nColumns,
      this.cellSize);
    this.draw();
    this.animateFlag = false;
  }

  /**
   * @description Function that computes one iteration of the Game of life
   *
   * @memberof GameOfLife
   */
  iterate() {
    this.board.countAliveNeighbours();
    this.board.updateState();
    this.draw();
  }

  /**
   * @description Function that stops the execution the given amount of time
   *
   * @param {number} msToWait - Number of miniseconds to stop the execution
   */
  sleep(msToWait) {
    return new Promise(resolve => setTimeout(resolve, msToWait));
  }

  /**
   * @description Function that animates the execution calling consecutive times
   *  to the iterate function and the sleep function
   *
   * @memberof GameOfLife
   */
  async animate() {
    while (this.animateFlag) {
      this.iterate();
      await this.sleep(100 / document.getElementById("speed").value);
    }
  }

  /**
   * @description Function that plays the animation
   *
   * @memberof GameOfLife
   */
  play() {
    if (!this.animateFlag) {
      this.animateFlag = true;
      this.animate();
    }
  }

  /**
   * @description Function that places the starting cells and starts the
   *  animation
   *
   * @memberof GameOfLife
   */
  start() {
    if (!this.animateFlag) {
      this.board.putRandomCells(document.getElementById("numOfCells").value);
      this.draw();
      this.play();
    }
  }

  /**
   * @description Function that pauses the animation
   *
   * @memberof GameOfLife
   */
  pause() {
    this.animateFlag = false;
  }

  /**
   * @description Function that stops the animation and resets the board
   *
   * @memberof GameOfLife
   */
  stop() {
    this.pause();
    this.board.reset();
    this.draw();
  }

  /**
   * @description Function that draws the actual state of the Game of Life
   *
   * @memberof GameOfLife
   */
  draw() {
    this.board.draw(this.CONTEXT, this.CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.GameOfLife = GameOfLife;
} else { // Execution in browser
}
