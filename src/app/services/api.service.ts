import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post("/api/admin/login", data);
  }

  adminList() {
    return this.http.get("/api/admin/list");
  }

  adminGet(adminId) {
    return this.http.get(`/api/admin/${adminId}`);
  }

  adminAdd(data) {
    return this.http.post("/api/admin", data);
  }

  adminEdit(data) {
    return this.http.put("/api/admin", data);
  }

  adminDelete(adminId) {
    return this.http.delete(`/api/admin/${adminId}`);
  }

}
