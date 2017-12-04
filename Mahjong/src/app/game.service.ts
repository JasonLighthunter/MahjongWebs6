import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from './game';
import { PostGame } from './post-game';
import { GameState } from './game-state.enum';

import { PLAYERONE } from './person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GameService {
  private gameUrl = 'api/games';

  private gamesSource = new Subject<Game[]>();

  gamesChanged$ = this.gamesSource.asObservable();

  constructor(private http: HttpClient) { }

  getGames() {
    this.http.get<Game[]>(this.gameUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      )
      .subscribe(games => this.gamesSource.next(games));
  }

  addGame(postGame: PostGame): Observable<Game> {
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'x-username':'JobCuppen',
      'x-token':'test'
    });
    // headers.keys().forEach(key => {
    //   console.log(headers.get(key))
    // })
    var newGame = {
      // id: 4,
      gameTemplate: {
        id: postGame.templateName
      },
      createdOn: Date.now().toString,
      startedOn: null,
      endedOn: null,
      createdBy: {
        name: 'Job Cuppen'
      },
      minPlayers: postGame.minPlayers,
      maxPlayers: postGame.maxPlayers,
      players: [
      ],
      state: GameState.open
    }
    console.log(newGame);
    return this.http.post<Game>(this.gameUrl, newGame, httpOptions)
    .pipe(
      tap(_ => this.getGames()),
      catchError(this.handleError<Game>('addGame'))
      );
  }

  joinGame(game: Game) {
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'x-username':'JobCuppen',
      'x-token':'test'
    });

    var updatedGame = game;
    updatedGame.players.push(PLAYERONE)

    return this.http.put(this.gameUrl, updatedGame, httpOptions)
      .pipe(
        tap(_ => this.getGames()),
        catchError(this.handleError<any>('joinGame'))
      );
  }

  startGame(game: Game) {
    var headers = new HttpHeaders({
      'Content-Type':'application/json',
      'x-username':'JobCuppen',
      'x-token':'test'
    });

    var updatedGame = game;
    updatedGame.state = GameState.playing;

    return this.http.put(this.gameUrl, updatedGame, httpOptions)
      .pipe(
        tap(_ => this.getGames()),
        catchError(this.handleError<any>('startGame'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
