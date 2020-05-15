import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as WallActions from '../../../../data-managers/msgwall.action';
import { MsgsWall } from '../../../../data-managers/msgwall.model';
import { AppState } from "../../../../data-managers/appstate.model";
import { CommonService } from '../../../../services/utils/common.service';

@Component({
  selector: 'app-message-wall',
  templateUrl: './message-wall.component.html',
  styleUrls: ['./message-wall.component.css']
})
export class MessageWallComponent implements OnInit, OnDestroy {

  wallData$: Observable<MsgsWall>;
  wallData: MsgsWall= [];
  wallSubs: Subscription;

  constructor(private store: Store<AppState>, private commonService: CommonService) {
    this.wallData$ = this.store.select("msgsWall");
  }

  getMsgWallList() {
    const wall: MsgsWall = [
      {
        id: 1,
        chatId: "1_11",
        name: "Shubham Rathi",
        message: "Fox is out of the box.",
        messageTime: new Date()
      },
      {
        id: 2,
        chatId: "1_12",
        name: "Kumar Sanga",
        message: "Fox is back again.",
        messageTime: new Date()
      },
      {
        id: 2,
        chatId: "1_13",
        name: "Poni Tail",
        message: "Fox is on run.",
        messageTime: new Date()
      },
      {
        id: 2,
        chatId: "1_14",
        name: "Ganga K. Dhar",
        message: "Fox is a hero now.",
        messageTime: new Date()
      }
    ];

    setTimeout(() => {
      if (!this.wallData || !this.wallData.length) {
        this.store.dispatch(new WallActions.UpdateWall(wall));
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.getMsgWallList();

    this.wallSubs = this.wallData$.subscribe(data => {
      this.wallData = data;
    });
  }

  ngOnDestroy(): void {
    this.wallSubs.unsubscribe();
  }

  cardSelected(chatId: string) {
    this.commonService.goto(`home/message/${chatId}`);
  }

}
