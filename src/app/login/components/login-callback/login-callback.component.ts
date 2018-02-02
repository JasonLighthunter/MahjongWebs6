import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { UserService, User } from '../../../user/user.module';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe(params => {
      var user = {
        username: params['username'],
        token: params['token']
      }
      this.userService.updateLoggedInUser(user);

// dashboard to ''
      this.router.navigate(['']);
    });
  }
}
