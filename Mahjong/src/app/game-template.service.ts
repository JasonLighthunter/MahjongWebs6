import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { GameTemplate } from './game-template';

@Injectable()
export class GameTemplateService {
  private gameTemplateUrl = 'http://mahjongmayhem.herokuapp.com/gameTemplates';

  private gameTemplatesSource = new Subject<GameTemplate[]>();

  gameTemplatesChanged$ = this.gameTemplatesSource.asObservable();

  constructor(private http: HttpClient) { }

  getGameTemplates() {
    this.http.get<GameTemplate[]>(this.gameTemplateUrl)
      .pipe(
        catchError(this.handleError('getTemplates', []))
      )
      .subscribe(templates => this.gameTemplatesSource.next(templates));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
