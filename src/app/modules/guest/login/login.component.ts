import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CommonService } from '../../../services/utils/common.service';
import { StorageService } from '../../../services/utils/storage.service';
import { CONSTANTS } from '../../../config/constants';
import { ApiService } from '../../../services/api.service';

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
    private apiService: ApiService
  ) {
    this.loginForm = this.builder.group({
      username: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]]
    });
  }

  get lf() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    this.loginForm.controls;
    if (this.loginForm.invalid) return;

    let dataToSend = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.apiService.login(dataToSend).subscribe(
      data => {
        this.storageService.set(CONSTANTS.storageKey.token, data['message']); // JWT from API response
        this.storageService.set(CONSTANTS.storageKey.data, data['data']);
        this.commonService.alert("success", "LoggedIn successfully");
        this.commonService.goto("/home/dashboard");
      },
      error => {
        this.commonService.alert("error", error.error.message);
      }
    );
  }

  ngOnInit() {
  }

}
