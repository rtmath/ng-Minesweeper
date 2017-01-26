import { Component, OnInit, Input } from '@angular/core';

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

  showStyle: true;
  toCheck: number[][];

  constructor() { }

  ngOnInit() {
  }

  setStyle(i, j) {
    return (this.revealed[i][j]) ? "yellow" : "";
  }

  revealSquare(i: number, j: number) {
    this.revealed[i][j] = true;
  }

  prepareToCheck(i: number, j: number) {
    var array = [i, j];
    this.toCheck.push(array);
  }

  someFunction(i: number, j: number) {
    this.toCheck = [];
    if (this.board[i][j] != MINE && this.board[i][j] === 0) {
      for (var x = -1; x < 2; x++) {
        for (var y = -1; y < 2; y++) {
          if (  i + x >= 0 &&
            j + y >= 0 &&
            i + x < this.boardWidth &&
            j + y < this.boardWidth) {
              this.prepareToCheck(i+x, j+y);
          }
        }
      }
    }
    this.toCheck.forEach(function(elem) {
      this.revealSquare(elem[0], elem[1]);
    })

  }
}
