/**
 * @file board.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a Game of Life class for the Conway's
 *  Game of Life. More info about it here:
 *  "https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
 */

"use strict";

let BoardOnGameOfLife;
if (typeof require !== 'undefined') { // Execution in node
  BoardOnGameOfLife = require('./board.js').Board;
} else { // Execution in browser
  BoardOnGameOfLife = Board;
}

/**
 * @description Class that handles the functionalities of the Conway's Game of
 *  Life.
 *
 * @class GameOfLife
 */
class GameOfLife {
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
    this.mouseDown = false;
    this.CANVAS.addEventListener("mousedown", this.mouseIsDown.bind(this));
    this.CANVAS.addEventListener("mousedown", this.swapCellState.bind(this));
    this.CANVAS.addEventListener("mousemove", this.swapCellState.bind(this));
    this.CANVAS.addEventListener("mouseup", this.mouseIsUp.bind(this));
  }

  /**
   * @description Function that notifies that the mouse is down
   *
   * @memberof GameOfLife
   */
  mouseIsDown() {
    this.mouseDown = true;
  }

  /**
   * @description Function that notifies that the mouse is up and resets all the
   *  flags of the cells that has been swapped
   *
   * @memberof GameOfLife
   */
  mouseIsUp() {
    this.mouseDown = false;
    this.board.grid.forEach(row => {
      row.forEach(cell => {
        cell.hasBeenSwapped = false;
      });
    });
  }

  /**
   * @description Function that swaps the state of all the cells where the mouse
   *  has been when the mouse is down
   *
   * @param {*} event - Event callback
   * @memberof GameOfLife
   */
  swapCellState(event) {
    if (this.mouseDown) {
      let row = Math.floor(event.offsetY / this.cellSize) + 1;
      let column = Math.floor(event.offsetX / this.cellSize) + 1;
      if (!this.board.grid[row][column].hasBeenSwapped) {
        this.board.grid[row][column].aliveState =
          !this.board.grid[row][column].aliveState;
        this.board.grid[row][column].hasBeenSwapped = true;
        this.draw();
      }
    }
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
   * @returns {Promise} Returns a promise that makes the execution wait the
   *  given amount of time
   * @memberof GameOfLife
   *
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
      await this.sleep(document.getElementById("speed").max -
        document.getElementById("speed").value);
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
   * @description Function that adds a glider on the grid
   *
   * @memberof GameOfLife
   */
  addGlider() {
    const X_DISP = 0;
    const Y_DISP = 0;

    this.board.grid[1 + X_DISP][2 + Y_DISP].aliveState = true;
    this.board.grid[2 + X_DISP][3 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][1 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][2 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][3 + Y_DISP].aliveState = true;

    this.draw();
  }

  /**
   * @description Function that adds a glider gun on the grid
   *
   * @memberof GameOfLife
   */
  addGliderGun() {
    const X_DISP = 20;
    const Y_DISP = 20;

    this.board.grid[5 + X_DISP][1 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][2 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][1 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][2 + Y_DISP].aliveState = true;

    this.board.grid[3 + X_DISP][13 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][14 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][12 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][16 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][11 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][17 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][11 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][15 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][17 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][18 + Y_DISP].aliveState = true;
    this.board.grid[7 + X_DISP][11 + Y_DISP].aliveState = true;
    this.board.grid[7 + X_DISP][17 + Y_DISP].aliveState = true;
    this.board.grid[8 + X_DISP][12 + Y_DISP].aliveState = true;
    this.board.grid[8 + X_DISP][16 + Y_DISP].aliveState = true;
    this.board.grid[9 + X_DISP][13 + Y_DISP].aliveState = true;
    this.board.grid[9 + X_DISP][14 + Y_DISP].aliveState = true;

    this.board.grid[1 + X_DISP][25 + Y_DISP].aliveState = true;
    this.board.grid[2 + X_DISP][23 + Y_DISP].aliveState = true;
    this.board.grid[2 + X_DISP][25 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][21 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][22 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][21 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][22 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][21 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][22 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][23 + Y_DISP].aliveState = true;
    this.board.grid[6 + X_DISP][25 + Y_DISP].aliveState = true;
    this.board.grid[7 + X_DISP][25 + Y_DISP].aliveState = true;

    this.board.grid[3 + X_DISP][35 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][36 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][35 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][36 + Y_DISP].aliveState = true;

    this.draw();
  }

  /**
   * @description Function that adds an u shape bomb on the grid
   *
   * @memberof GameOfLife
   */
  addUBomb() {
    const X_DISP = 40;
    const Y_DISP = 60;

    this.board.grid[1 + X_DISP][1 + Y_DISP].aliveState = true;
    this.board.grid[1 + X_DISP][3 + Y_DISP].aliveState = true;
    this.board.grid[2 + X_DISP][1 + Y_DISP].aliveState = true;
    this.board.grid[2 + X_DISP][3 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][1 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][2 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][3 + Y_DISP].aliveState = true;

    this.draw();
  }

  /**
   * @description Function that adds a snake shape bomb on the grid
   *
   * @memberof GameOfLife
   */
  addSnakeBomb() {
    const X_DISP = 30;
    const Y_DISP = 40;

    this.board.grid[6 + X_DISP][2 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][4 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][2 + Y_DISP].aliveState = true;
    this.board.grid[5 + X_DISP][1 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][4 + Y_DISP].aliveState = true;
    this.board.grid[4 + X_DISP][2 + Y_DISP].aliveState = true;
    this.board.grid[3 + X_DISP][4 + Y_DISP].aliveState = true;
    this.board.grid[2 + X_DISP][6 + Y_DISP].aliveState = true;
    this.board.grid[1 + X_DISP][8 + Y_DISP].aliveState = true;
    this.board.grid[1 + X_DISP][6 + Y_DISP].aliveState = true;

    this.draw();
  }

  /**
   * @description Function that adds a line that creates two serpinski triangles
   *
   * @memberof GameOfLife
   */
  addSerpinskiTriangle() {
    const X_DISP = 225;
    const Y_DISP = 300;

    for (let rowIterator = 0; rowIterator < 512; rowIterator++) {
      this.board.grid[X_DISP][rowIterator + Y_DISP].aliveState = true;
    }

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

let gameOfLife = new GameOfLife();

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.GameOfLife = GameOfLife;
} else { // Execution in browser
}
