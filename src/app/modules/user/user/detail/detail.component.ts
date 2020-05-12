import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";

import { Users, User } from "../../../../data-managers/users.model";
import { AppState } from "../../../../data-managers/appstate.model";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit, OnDestroy {
  userData$: Observable<Users>;
  userId: number;
  userData: User;
  userSubs: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.userData$ = this.store.select("users");
    this.route.params.subscribe(params => {
      this.userId = params.userId || null;
    });
  }

  ngOnInit(): void {
    this.userSubs = this.userData$.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.userId) {
          this.userData = data[i];
          break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.userSubs.unsubscribe();
  }
}
