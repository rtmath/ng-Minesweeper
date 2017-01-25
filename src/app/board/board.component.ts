import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board: number[][];
  @Input() revealed: boolean[][];

  showStyle: true;
  constructor() { }

  ngOnInit() {
  }

  setStyle(i, j) {
    return (this.revealed[i][j]) ? "yellow" : "";
  }

  revealSquare(i: number, j: number) {
    this.revealed[i][j] = true;
  }

}
