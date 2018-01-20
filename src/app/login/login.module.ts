import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { LoginCallbackComponent } from './components/login-callback/login-callback.component';

import { UserModule } from '../user/user.module';

export { LoginComponent } from './components/login/login.component';
export { LoginCallbackComponent } from './components/login-callback/login-callback.component';
@NgModule({
  imports: [
    CommonModule,
    UserModule
  ],
  declarations: [
    LoginComponent, 
    LoginCallbackComponent
  ],
  // providers: [
  //   UserService
  // ]
  exports: [
    LoginCallbackComponent,
    LoginComponent
  ]
})
export class LoginModule { }
