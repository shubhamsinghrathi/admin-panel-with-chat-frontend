import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { CommonService } from '../../../services/utils/common.service';
import { StorageService } from '../../../services/utils/storage.service';
import { CONSTANTS } from '../../../config/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private builder: FormBuilder,
    private commonService: CommonService,
    private storageService: StorageService,
  ) {
    this.loginForm = this.builder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required ]]
    });
  }

  login() {
    this.submitted = true;
    this.commonService.alert("success", "LoggedIn successfully");

    this.storageService.set(CONSTANTS.storageKey.data, {
      id: 1234,
      name: "Shubham Rathi",
      type: 1, // 1 admin, 2 sub-admin
      username: "shubham",
      createdAt: new Date(),
      imageUrl: "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58483.jpg"
    });

    this.storageService.set(CONSTANTS.storageKey.token, "1234567890"); // JWT from API response

    this.commonService.goto("/home/dashboard");
  }

  ngOnInit() {
  }

}
