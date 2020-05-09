import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private toast: ToastrService, private router: Router) {}

  /*toaster*/
  alert(type, msg) {
    switch (type) {
      case "success":
        this.toast.success(msg, "SUCCESS");
        break;
      case "info":
        this.toast.info(msg, "INFORMATION");
        break;
      case "error":
        this.toast.error(msg, "ERROR");
        break;
      case "warn":
        this.toast.warning(msg, "WARNING");
        break;
      default:
        this.toast.success(msg, "SUCCESS");
        break;
    }
  }

  // router
  goto(route) {
    this.router.navigate([route]);
  }
}
