import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/utils/storage.service';
import { AuthService } from '../../../services/utils/auth.service';
import { CommonService } from '../../../services/utils/common.service';
import { CONSTANTS } from '../../../config/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  get userdata() {
    return this.storageService.get(CONSTANTS.storageKey.data);
  };

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private commonService: CommonService
  ) { 
  }

  ngOnInit(): void {
  }

  logoutAdmin() {
    this.commonService.alert("success", "Logged out successfully");
    this.authService.logout();
  }

}
