import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Users } from '../../../../data-managers/users.model';
import * as UserActions from '../../../../data-managers/users.action';
import { AppState } from '../../../../data-managers/appstate.model';
import { PopupComponent } from '../../common/popup/popup.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['SN', 'name', 'username', 'createdAt' ,'action'];
  userData$: Observable<Users>;
  userData: Array<any> = [];
  index: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>
  ) {
    this.userData$ = this.store.select("users");
  }

  getUserList() {
    const users = [
      {
        id: 1,
        name: "Shubham Rathi",
        username: "shubham",
        createdAt: new Date()
      },
      {
        id: 2,
        name: "Shubham Rathi",
        username: "shubham",
        createdAt: new Date()
      },
      {
        id: 3,
        name: "Shubham Rathi",
        username: "shubham",
        createdAt: new Date()
      },
      {
        id: 4,
        name: "Shubham Rathi",
        username: "shubham",
        createdAt: new Date()
      },
      {
        id: 5,
        name: "Shubham Rathi",
        username: "shubham",
        createdAt: new Date()
      }
    ];

    setTimeout(() => {
      this.store.dispatch(new UserActions.UpdateUsers(users));
    }, 3000);
  }

  ngOnInit(): void {
    this.getUserList();

    this.userData$.subscribe(data => {
      this.userData = data;
    });
  }

  deleteUser(element) {
    element;
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {id: element.id, username: element.username}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new UserActions.DeleteUser(result));
      }
    });
  }

}
