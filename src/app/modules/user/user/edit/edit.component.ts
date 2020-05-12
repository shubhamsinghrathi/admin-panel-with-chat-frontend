import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";

import { Users, User } from "../../../../data-managers/users.model";
import * as UserActions from "../../../../data-managers/users.action";
import { CommonService } from '../../../../services/utils/common.service';
import { AppState } from "../../../../data-managers/appstate.model";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit, OnDestroy {
  editUserForm: FormGroup;
  submitted: boolean = false;
  userData$: Observable<Users>;
  userId: number;
  userData: User;
  userSubs: Subscription;

  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private commonService: CommonService
  ) {
    this.userData$ = this.store.select("users");
    this.route.params.subscribe(params => {
      this.userId = params.userId || null;
    });

    this.editUserForm = this.builder.group({
      name: ['data', [ Validators.required ]]
    });
  }

  editUser() {
    this.submitted = true;
    const updatedName = this.editUserForm.get("name").value;
    const user = Object.assign({}, this.userData);
    user.name = updatedName;
    this.store.dispatch(new UserActions.EditUser(user));
    this.commonService.goto("/home/user");
  }

  ngOnInit(): void {
    this.userSubs = this.userData$.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == this.userId) {
          this.userData = data[i];
          this.editUserForm.setValue({ name: this.userData.name });
          break;
        }
      }
    });
  }

  ngOnDestroy() {
    this.userSubs.unsubscribe();
  }
}
