import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";

import * as AdminActions from "../../../../data-managers/admins.action";
import { CommonService } from '../../../../services/utils/common.service';
import { AppState } from "../../../../data-managers/appstate.model";

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
    private commonService: CommonService
  ) {
    this.addAdminForm = this.builder.group({
      name: ['', [ Validators.required ]],
      username: ['', [ Validators.required ]],
      type: [1, [ Validators.required ]]
    });
  }

  addAdmin() {
    this.submitted = true;
    const name = this.addAdminForm.get("name").value;
    const username = this.addAdminForm.get("username").value;
    const type = this.addAdminForm.get("type").value;
    const admin = {
      name,
      username,
      type,
      createdAt: new Date(),
      id: 11
    };
    this.store.dispatch(new AdminActions.AddAdmin(admin));
    this.commonService.goto("/home/sub-admin");
  }

  ngOnInit(): void {
  }
}
