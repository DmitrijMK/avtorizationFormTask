import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../shared/services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public hide = true;
  public registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorageService,
    private route: Router) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      login: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      passWord: [null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){4,20}$')
      ]]
    });
  }

  registration(data) {
    this.localStorage.setLocalData(data);
    this.route.navigate(['/core/login']);
  }

  navigateToLogin() {
    this.route.navigate(['/core/login']);
  }
}
