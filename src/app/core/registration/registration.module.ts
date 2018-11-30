import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class RegistrationModule {
}
