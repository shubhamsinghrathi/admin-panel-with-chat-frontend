import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";

import { Admins, Admin } from "../../../../data-managers/admins.model";
import { AppState } from "../../../../data-managers/appstate.model";

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit, OnDestroy {
  adminData$: Observable<Admins>;
  userId: number;
  adminData: Admin;
  adminSubs: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.adminData$ = this.store.select("admins");
    this.route.params.subscribe(params => {
      this.userId = params.userId || null;
    });
  }

  ngOnInit(): void {
    this.adminSubs = this.adminData$.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.userId) {
          this.adminData = data[i];
          break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.adminSubs.unsubscribe();
  }
}
