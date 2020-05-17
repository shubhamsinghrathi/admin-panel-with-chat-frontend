import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";

import { Admins } from "../../../../data-managers/admins.model";
import * as AdminActions from "../../../../data-managers/admins.action";
import { AppState } from "../../../../data-managers/appstate.model";
import { PopupComponent } from "../../common/popup/popup.component";
import { ApiService } from "../../../../services/api.service";
import { CommonService } from "../../../../services/utils/common.service";

@Component({
  selector: "app-admin-list",
  templateUrl: "./admin-list.component.html",
  styleUrls: ["./admin-list.component.css"]
})
export class AdminListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    "SN",
    "name",
    "username",
    "type",
    "createdAt",
    "action"
  ];
  adminData$: Observable<Admins>;
  adminData: Array<any> = [];
  adminSubs: Subscription;
  index: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>,
    private apiService: ApiService,
    private commonService: CommonService
  ) {
    this.adminData$ = this.store.select("admins");
  }

  getAdminList() {
    this.apiService.adminList().subscribe(
      data => {
        this.store.dispatch(new AdminActions.UpdateAdmins(data["dataArr"]));
      }
    );
  }

  ngOnInit(): void {
    this.getAdminList();

    this.adminSubs = this.adminData$.subscribe(data => {
      this.adminData = data;
    });
  }

  deleteAdmin(element) {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: "250px",
      data: { id: element.id, username: element.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.adminDelete(parseInt(element.id)).subscribe(
          data => {
            this.commonService.alert("success", "Admin deleted successfully");
          }
        );
        this.store.dispatch(new AdminActions.DeleteAdmin(result));
      }
    });
  }

  ngOnDestroy() {
    this.adminSubs.unsubscribe();
  }
}
