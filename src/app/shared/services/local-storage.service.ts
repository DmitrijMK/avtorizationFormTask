import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class LocalStorageService {
  dataSource$ = new Subject<string>();

  nextUserName(value): void {
    this.dataSource$.next(value);
  }

  setLoginData(key, value): void {
    localStorage.setItem('isLogin', JSON.stringify(value));
  }

  setLocalData(data): void {
    localStorage.setItem(`${data.login}`, JSON.stringify(data));
  }

  getLocalData(value) {
    return JSON.parse(localStorage.getItem(`${value}`));
  }

  isUserLogin() {
    if (this.getLocalData('isLogin') === null) {
      this.setLoginData('isLogin', {'isLogin': false});
      return false;
    }
    return this.getLocalData('isLogin').isLogin;
  }

  getUserName(): string {
    return this.getLocalData('userName');
  }

  logIn(value) {
    this.setLoginData('isLogin', {'isLogin': true});
    localStorage.setItem('userName', JSON.stringify(value));
    this.nextUserName(value);
  }

  logOut(value) {
    this.setLoginData('isLogin', {'isLogin': false});
    this.nextUserName(value);
  }
}
