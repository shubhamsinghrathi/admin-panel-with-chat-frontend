import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";

import * as UserActions from "../../../../data-managers/users.action";
import { CommonService } from '../../../../services/utils/common.service';
import { AppState } from "../../../../data-managers/appstate.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addUserForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private builder: FormBuilder,
    private store: Store<AppState>,
    private commonService: CommonService
  ) {
    this.addUserForm = this.builder.group({
      name: ['', [ Validators.required ]],
      username: ['', [ Validators.required ]]
    });
  }

  addUser() {
    this.submitted = true;
    const name = this.addUserForm.get("name").value;
    const username = this.addUserForm.get("username").value;
    const user = {
      name,
      username,
      createdAt: new Date(),
      id: 11
    };
    this.store.dispatch(new UserActions.AddUser(user));
    this.commonService.goto("/home/user");
  }

  ngOnInit(): void {
  }

}
