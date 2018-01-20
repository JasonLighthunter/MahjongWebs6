import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { GameTemplate, MOCK_GAME_TEMPLATES } from '../models/game-template';

@Injectable()
export class GameTemplateService {
  private gameTemplateUrl = 'http://mahjongmayhem.herokuapp.com/gameTemplates';

  private gameTemplatesSource = new Subject<GameTemplate[]>();

  gameTemplatesChanged$ = this.gameTemplatesSource.asObservable();

  constructor(protected http: HttpClient) { }

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

@Injectable()
export class MockGameTemplateService extends GameTemplateService {
  private templates = MOCK_GAME_TEMPLATES;

  private mockedGameTemplatesSource = new Subject<GameTemplate[]>();

  gameTemplatesChanged$ = this.mockedGameTemplatesSource.asObservable();

  constructor(protected http: HttpClient) {
    super(http);
  }

  getGameTemplates() {
    this.mockedGameTemplatesSource.next(this.templates);
  }
}