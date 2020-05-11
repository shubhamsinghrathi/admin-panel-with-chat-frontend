import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  message$: Observable<string>;
  message: string = "Initial Message";
  messageSubs: Subscription;

  constructor(
    private store: Store<AppState>
  ) {
    this.message$ = this.store.select("message");
  }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: "first" });
    }, 2000);

    this.messageSubs = this.message$.subscribe(data => {
      this.message = data;
    });
  }

  ngOnDestroy() {
    this.messageSubs.unsubscribe();
  }

}
