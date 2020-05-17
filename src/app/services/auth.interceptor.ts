import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CommonService } from './utils/common.service';
import { StorageService } from './utils/storage.service';
import { CONSTANTS } from '../config/constants';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public storageService: StorageService,
    public commonService: CommonService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.storageService.get(CONSTANTS.storageKey.token);
    if (!token) token = "";

    let url = environment.baseUrl;
    url += request.url;

    request.headers.append("Authorization", `Bearer ${token}`);
    request.headers.append("Access-Control-Allow-Origin", "*");

    const cpoiesReq = request.clone({
      headers: new HttpHeaders({
        "Authorization": `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*"
      }),
      url
    });

    return next.handle(cpoiesReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status == 403) {
          this.commonService.alert("error", "Token Expired");
        }
        return throwError(err);
      })
    );
  }
}
