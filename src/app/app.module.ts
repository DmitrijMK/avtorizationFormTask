import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuard} from './core/guards/auth.guard';
import {LocalStorageService} from './shared/services/local-storage.service';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {MenuModule} from './menu/menu.module';
import {FormsModule} from './forms/forms.module';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './core/login/login.module';
import {RegistrationModule} from './core/registration/registration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    MenuModule,
    FormsModule,
    SharedModule,
    LoginModule,
    RegistrationModule
  ],
  providers: [
    LocalStorageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
