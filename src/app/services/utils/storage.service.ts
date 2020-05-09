import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  get(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }

  removeData(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }

  isDataExist(key) {
    let data = window.localStorage.getItem(key);
    if (data) return true;
    return false;
  }

}
