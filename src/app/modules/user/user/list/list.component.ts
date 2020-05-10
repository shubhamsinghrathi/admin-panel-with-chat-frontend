import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { PopupComponent } from '../../common/popup/popup.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['SN', 'name', 'username', 'createdAt' ,'action'];
  userData: Array<any>;
  index: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog
  ) { }

  getUserList() {
    this.userData = [
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
  }

  ngOnInit(): void {
    this.getUserList();
  }

  deleteUser(element) {
    element;
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {id: element.id, username: element.username}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userData = this.userData.filter(ele => ele.id != result);
      }
    });
  }

}
