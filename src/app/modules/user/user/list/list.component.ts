import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['SN', 'name', 'username', 'createdAt' ,'action'];
  userData: any;
  index: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

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

}
