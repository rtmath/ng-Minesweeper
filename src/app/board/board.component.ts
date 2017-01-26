import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const MINE = 9;

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board: number[][];
  @Input() revealed: boolean[][];
  @Input() boardWidth: number;
  @Input() totalMines: number;
  @Input() victoryBool: boolean;
  @Input() defeatBool: boolean;
  @Output() victory = new EventEmitter();
  @Output() defeat = new EventEmitter();

  emptiesArray: number[][] = [];
  squaresRemaining: number;



  constructor() { }

  ngOnInit() {
  }

  Reveal(x, y) {
    this.RevealNextCell(x - 1, y - 1);
    this.RevealNextCell(x - 1, y);
    this.RevealNextCell(x - 1, y + 1);

    this.RevealNextCell(x, y - 1);
    this.RevealNextCell(x, y + 1);

    this.RevealNextCell(x + 1, y);
    this.RevealNextCell(x + 1, y - 1);
    this.RevealNextCell(x + 1, y + 1);
  }

  RevealNextCell(x, y) {
    if (
      this.isInBounds(x, y) &&
      this.revealed[x][y] != true) {

        if (this.board[x][y] === 0) {
          this.revealed[x][y] = true;
          this.Reveal(x, y);
        } else {
          this.revealed[x][y] = true;
        }
    }
  }

  isInBounds(i, j) {
    return (i >= 0 &&
          j >= 0 &&
          i < this.boardWidth &&
          j < this.boardWidth) ? true : false;
  }

  checkForGameOver(x, y){
    if(this.board[x][y] === 9){
      for(var i = 0; i < this.board.length; i++){
        for(var j = 0; j < this.board.length; j++){
            this.revealed[i][j] = true;
        }
      }
      this.defeat.emit();
    }
  }

  checkForVictory(){
    var counter = 0;
    for(var i = 0; i < this.revealed.length; i++){
      for(var x = 0; x < this.revealed.length; x++){
        if(this.revealed[i][x] === false){
          counter++;
        }
      }
    }
    if(counter == this.totalMines){
      this.victory.emit();
    }
  }
}
