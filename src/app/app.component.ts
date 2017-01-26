import { Component, Input, Output } from '@angular/core';

const MINE = 9;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  boardWidth: number = null;
  board: number[][];
  revealed: boolean[][];
  totalMines: number;
  victoryBool: boolean;
  defeatBool: boolean;

  startGame(width: number) {
    if (width > 3 && width < 24) {
      this.boardWidth = width;
      this.totalMines = width;
      this.createBoard(width);
      this.victoryBool = false;
      this.defeatBool = false;
    }
  }

  victory() {
    this.victoryBool = true;
  }

  defeat() {
    this.defeatBool = true;
  }

  placeMines(){
    let minesRemaining: number = this.totalMines;
    while (minesRemaining > 0) {
      let index1: number = Math.floor(Math.random() * this.boardWidth);
      let index2: number = Math.floor(Math.random() * this.boardWidth);
      if (this.board[index1][index2] != MINE) {
        this.board[index1][index2] = MINE;
        minesRemaining--;
      }
    }
  }

  createBoard(width) {
    this.board = [];
    this.revealed = [];

    for (var i = 0; i < width; i++) {
      this.board[i] = [];
      this.revealed[i] = [];
      for (var j = 0; j < width; j++) {
        this.board[i][j] = 0;
        this.revealed[i][j] = false;
      }
    }
    this.placeMines();
    this.checkForMines();
  }

  checkForMines() {
    for (var i = 0; i < this.boardWidth; i++) {
      for (var j = 0; j < this.boardWidth; j++) {
        if (this.board[i][j] === MINE) {
          for (var x = -1; x < 2; x++) {
            for (var y = -1; y < 2; y++) {
              if (  i + x >= 0 &&
                    j + y >= 0 &&
                    i + x < this.boardWidth &&
                    j + y < this.boardWidth) {
                if (this.board[i+x][j+y] != MINE) {
                  this.board[i+x][j+y] += 1;
                }
              }
            }
          }
        }
      }
    }
  }
}
