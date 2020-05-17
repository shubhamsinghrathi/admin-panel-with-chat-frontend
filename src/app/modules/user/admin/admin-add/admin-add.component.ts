import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";

import * as AdminActions from "../../../../data-managers/admins.action";
import { CommonService } from '../../../../services/utils/common.service';
import { AppState } from "../../../../data-managers/appstate.model";
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  addAdminForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private builder: FormBuilder,
    private store: Store<AppState>,
    private apiService: ApiService,
    private commonService: CommonService
  ) {
    this.addAdminForm = this.builder.group({
      name: ['', [ Validators.required ]],
      username: ['', [ Validators.required ]],
      type: [1, [ Validators.required ]],
      password: ['', [ Validators.required ]]
    });
  }

  get f() { return this.addAdminForm.controls; }

  addAdmin() {
    this.submitted = true;
    if (this.addAdminForm.invalid) return;

    const name = this.addAdminForm.get("name").value;
    const username = this.addAdminForm.get("username").value;
    const type = this.addAdminForm.get("type").value;
    const password = this.addAdminForm.get("password").value;
    const admin = {
      name,
      username,
      type,
      password
    };

    this.apiService.adminAdd(admin).subscribe(
      data => {
        this.store.dispatch(new AdminActions.AddAdmin(data['data']));
        this.commonService.goto("/home/sub-admin");
      }
    );
  }

  ngOnInit(): void {
  }
}
