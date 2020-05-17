import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { StorageService } from '../utils/storage.service'

import { CONSTANTS } from '../../config/constants';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  isLoggedIn() {
    let loggedIn = false;
    let userData = this.storageService.get(CONSTANTS.storageKey.token);
    if (userData == null) {
      loggedIn = false;
    } else {
      loggedIn = true;
    }
    return loggedIn;
  }

  logout() {
    this.storageService.removeData(CONSTANTS.storageKey.data);
    this.storageService.removeData(CONSTANTS.storageKey.token);
    this.router.navigate(["/"]);
    return true;
  }
}
