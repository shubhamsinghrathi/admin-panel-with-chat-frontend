import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";

import { Admins, Admin } from "../../../../data-managers/admins.model";
import * as AdminActions from "../../../../data-managers/admins.action";
import { CommonService } from '../../../../services/utils/common.service';
import { AppState } from "../../../../data-managers/appstate.model";
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit, OnDestroy {
  editAdminForm: FormGroup;
  submitted: boolean = false;
  adminData$: Observable<Admins>;
  userId: number;
  adminData: Admin;
  adminSubs: Subscription;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private commonService: CommonService,
    private apiService: ApiService
  ) {
    this.adminData$ = this.store.select("admins");
    this.route.params.subscribe(params => {
      this.userId = params.userId || null;
    });

    this.editAdminForm = this.builder.group({
      name: ['data', [ Validators.required ]]
    });
  }

  get f() { return this.editAdminForm.controls; }

  editAdmin() {
    this.submitted = true;
    if (this.editAdminForm.invalid) return;

    const updatedName = this.editAdminForm.get("name").value;
    const admin = {
      id: this.adminData.id,
      name: updatedName
    };

    this.apiService.adminEdit(admin).subscribe(
      data => {
        this.store.dispatch(new AdminActions.EditAdmin(data['data']));
        this.commonService.goto("/home/sub-admin");
      }
    );
  }

  ngOnInit(): void {
    this.adminSubs = this.adminData$.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.userId) {
          this.adminData = data[i];
          this.editAdminForm.setValue({ name: this.adminData.name });
          break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.adminSubs.unsubscribe();
  }
}
