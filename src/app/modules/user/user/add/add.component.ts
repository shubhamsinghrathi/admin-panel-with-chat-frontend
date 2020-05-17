import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import * as UserActions from "../../../../data-managers/users.action";
import { CommonService } from '../../../../services/utils/common.service';
import { AppState } from "../../../../data-managers/appstate.model";
import { ApiService } from '../../../../services/api.service';

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
    private apiService: ApiService,
    private commonService: CommonService
  ) {
    this.addUserForm = this.builder.group({
      name: ['', [ Validators.required ]],
      username: ['', [ Validators.required ]]
    });
  }

  get f() { return this.addUserForm.controls; }

  addUser() {
    this.submitted = true;
    if (this.addUserForm.invalid) return;

    const name = this.addUserForm.get("name").value;
    const username = this.addUserForm.get("username").value;
    const user = {
      name,
      username
    };

    this.apiService.userAdd(user).subscribe(
      data => {
        this.store.dispatch(new UserActions.AddUser(data['data']));
        this.commonService.goto("/home/user");
      }
    );
  }

  ngOnInit(): void {
  }

}
