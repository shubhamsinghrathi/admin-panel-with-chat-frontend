import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from 'rxjs';

import * as MsgsActions from '../../../../data-managers/messages.action';
import { Messages } from '../../../../data-managers/messages.model';
import { MsgsWall } from '../../../../data-managers/msgwall.model';
import { AppState } from "../../../../data-managers/appstate.model";
import { StorageService } from '../../../../services/utils/storage.service';
import { CONSTANTS } from '../../../../config/constants';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  name: string;
  chatId: string;
  myName: string;

  msgsData$: Observable<Messages>;
  msgsData: Messages= [];
  msgsSubs: Subscription;

  wallData$: Observable<MsgsWall>;
  wallSubs: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private storageUtil: StorageService) {
    this.msgsData$ = this.store.select("messages");
    this.wallData$ = this.store.select("msgsWall");
    this.route.params.subscribe(params => {
      this.chatId = params.chatId || null;
    });
    this.myName = this.storageUtil.get(CONSTANTS.storageKey.data).name;
  }

  getMsgsList() {
    const msgs: Messages = [
      {
        id: 1,
        name: "Shubham Rathi",
        message: "Kanha jana hai?",
        messageTime: new Date()
      },
      {
        id: 2,
        name: "Kumar Sanga",
        message: "Lal bazaar is good for food.",
        messageTime: new Date()
      },
      {
        id: 3,
        name: "Kumar Sanga",
        message: "Wha chale?",
        messageTime: new Date()
      },
      {
        id: 4,
        name: "Shubham Rathi",
        message: "Tik h",
        messageTime: new Date()
      }
    ];

    setTimeout(() => {
      if (!this.msgsData || !this.msgsData.length) {
        this.store.dispatch(new MsgsActions.UpdateMessages(msgs));
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.getMsgsList();

    this.wallSubs = this.wallData$.subscribe(data => {
      data.forEach(wallData => {
        if (wallData.chatId == this.chatId) {
          this.name = wallData.name;
        }
      });

      this.msgsSubs = this.msgsData$.subscribe(data => {
        this.msgsData = data;
      });
    });
  }

  ngOnDestroy(): void {
    this.msgsSubs.unsubscribe();
    this.wallSubs.unsubscribe();
  }

}
