import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LocalStorageService} from '../../shared/services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this.localStorageService.isUserLogin()) {
      this.router.navigate(['/core/login']);
      return true;
    }
    return true;
  }
}
