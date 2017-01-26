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
  emptiesArray: number[][] = [];

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
}
