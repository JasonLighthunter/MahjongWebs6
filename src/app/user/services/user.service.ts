import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable()
export class UserService {
  private authUrl = 'http://mahjongmayhem.herokuapp.com/auth/avans';

  private loggedInUserSource = new Subject<User>();

  loggedInUserChanged$ = this.loggedInUserSource.asObservable();

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  public doLogin() {
    window.location.href = `${this.authUrl}?callbackUrl=${this.document.location.origin}/loginCallback`;
  }

  public doLogout() {
    localStorage.setItem('username', undefined);
    localStorage.setItem('token', undefined);
    this.loggedInUserSource.next(null);
  }
  
  public updateLoggedInUser(user : User) {
    localStorage.setItem('username', user.username);
    localStorage.setItem('token', user.token);
    console.log(user.token);
    this.loggedInUserSource.next(user);
  }

  public getLoggedInUser() {
    var _username = localStorage.getItem('username');
    var _token = localStorage.getItem('token');
    if (_username !== undefined && _token !== undefined) {
      var user = {
        username: _username,
        token: _token
      }
      this.loggedInUserSource.next(user);
    }
  }
}
