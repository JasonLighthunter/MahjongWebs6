import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../../user/user.module';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
    this.userService.loggedInUserChanged$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.userService.getLoggedInUser();
  }

  login() {
    this.userService.doLogin();
  }

  logout() {
    this.userService.doLogout();
  }
}
