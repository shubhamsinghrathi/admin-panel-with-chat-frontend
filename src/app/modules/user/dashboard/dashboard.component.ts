import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message$: Observable<string>;
  message: string = "Initial Message";

  constructor(
    private store: Store<AppState>
  ) {
    this.message$ = this.store.select("message");
  }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: "first" });
    }, 2000);

    this.message$.subscribe(data => {
      this.message = data;
    });
  }

}
