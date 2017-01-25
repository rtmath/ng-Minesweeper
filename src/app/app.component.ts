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
  totalMines: number;

  setBoardWidth(width: number) {
    this.boardWidth = width;
    this.totalMines = width;
    this.createBoard(width);
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

    for (var i = 0; i < width; i++) {
      this.board[i] = [];
      for (var j = 0; j < width; j++) {
        this.board[i][j] = 0;
      }
    }
    this.placeMines();
  }
}
