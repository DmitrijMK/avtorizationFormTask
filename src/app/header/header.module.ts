import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {FormsModule} from '../forms/forms.module';
import {MenuModule} from '../menu/menu.module';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
