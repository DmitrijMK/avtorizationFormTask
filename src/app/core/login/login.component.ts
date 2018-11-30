import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, private localStorageService: LocalStorageService, private route: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [null, [Validators.required]],
      passWord: [null, [Validators.required]]
    });
  }

  authorization(data) {
    const authData = this.localStorageService.getLocalData(data['login']);
    if (authData.passWord === data.passWord) {
      this.localStorageService.setRegitrationData({'isLogin': true});
      this.localStorageService.setUserName(data.login);
      console.log(data.login);
      this.route.navigate(['']);
    }
  }

  navigateToRegistration() {
    this.route.navigate(['/core/registration']);
  }
}
