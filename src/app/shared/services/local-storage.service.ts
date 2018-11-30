import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {
  setRegitrationData(data) {
    localStorage.setItem('isLogin', JSON.stringify(data));
  }

  setLocalData(data) {
    localStorage.setItem(`${data.login}`, JSON.stringify(data));
  }

  getLocalData(value) {
    return JSON.parse(localStorage.getItem(`${value}`));
  }

  isUserLogin() {
    if (this.getLocalData('isLogin') === null) {
      this.setRegitrationData({'isLogin': false});
      this.setRegitrationData({'userName': 'Guest'});
      return false;
    }
    return this.getLocalData('isLogin').isLogin;
  }

  getUserName() {
    return JSON.parse(localStorage.getItem(`userName`));
  }

  setUserName(data) {
    localStorage.setItem('userName', JSON.stringify(data));
  }
}
