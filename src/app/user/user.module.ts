import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';

export { UserService } from './services/user.service';
export { User } from './models/user';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserService
  ]
})
export class UserModule { }
