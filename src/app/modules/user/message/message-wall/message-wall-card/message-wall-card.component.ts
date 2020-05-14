import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MsgWall } from '../../../../../data-managers/msgwall.model';

@Component({
  selector: 'app-message-wall-card',
  templateUrl: './message-wall-card.component.html',
  styleUrls: ['./message-wall-card.component.css']
})
export class MessageWallCardComponent implements OnInit {

  @Input() wallMsg: MsgWall;
  @Output() cardClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(chatId: string) {
    this.cardClick.emit(chatId);
  }

}
