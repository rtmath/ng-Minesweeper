import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'board-settings',
  templateUrl: './board-settings.component.html',
  styleUrls: ['./board-settings.component.css']
})
export class BoardSettingsComponent implements OnInit {

  @Output() startGameSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  startGame(width: number) {
    this.startGameSender.emit(width);
  }

}
