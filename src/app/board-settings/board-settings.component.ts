import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'board-settings',
  templateUrl: './board-settings.component.html',
  styleUrls: ['./board-settings.component.css']
})
export class BoardSettingsComponent implements OnInit {

  @Output() widthSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getWidth(width: number) {
    this.widthSender.emit(width);
  }

}
