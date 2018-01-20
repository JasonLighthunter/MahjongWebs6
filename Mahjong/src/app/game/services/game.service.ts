import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../../user/user.module';
import { Game, MOCK_GAMES } from '../models/game';
import { PostGame } from '../models/post-game';
import { PostMatch } from '../models/post-match';

import { GameState } from '../models/game-state.enum';

import { PLAYERONE } from '../../models/person';

import { Tile } from '../../tile/tile.module';

@Injectable()
export class GameService {
  private gameUrl = 'http://mahjongmayhem.herokuapp.com/games';

  private gamesSource = new Subject<Game[]>();
  private gameSource = new Subject<Game>();

  private tilesSource = new Subject<Tile[]>();

  gamesChanged$ = this.gamesSource.asObservable();
  gameChanged$ = this.gameSource.asObservable();

  tilesChanged$ = this.tilesSource.asObservable();

  constructor(protected http: HttpClient) { }

  getGames() {
    this.http.get<Game[]>(this.gameUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      )
      .subscribe(games => this.gamesSource.next(games));
  }

  getGame(id: string) {
    this.http.get<Game>(this.gameUrl + '/' + id)
      .subscribe(game => this.gameSource.next(game));

    this.http.get<Tile[]>(this.gameUrl + '/' + id + '/tiles')
      .subscribe(tiles => {
        // console.log(tiles);
        this.tilesSource.next(tiles);
      });
  }

  addGame(postGame: PostGame, user: User) {
    let httpOptions = {
      headers : new HttpHeaders(
      {
        'Content-Type':'application/json',
        'x-username': user.username,
        'x-token': user.token
      })
    };

    this.http.post<Game>(this.gameUrl, postGame, httpOptions)
    .subscribe(
      data => { 
        this.getGames()
      },
      (err : HttpErrorResponse) => {
        console.error(err.statusText);
        console.error(err.message);
      }
    )
  }

  joinGame(game: Game, user : User) {
    let httpOptions = {
      headers : new HttpHeaders(
      {
        'Content-Type':'application/json',
        'x-username': user.username,
        'x-token': user.token
      })
    };

    var joinUrl = this.gameUrl + '/' + game.id + '/players';

    this.http.post(joinUrl, {}, httpOptions)
    .subscribe(
      data => { 
        // this.getGames()
      },
      (err : HttpErrorResponse) => {
        console.error(err.statusText);
        console.error(err.message);
      }
    )
  }

  startGame(game: Game, user: User) {
    let httpOptions = {
      headers : new HttpHeaders(
      {
        'Content-Type':'application/json',
        'x-username': user.username,
        'x-token': user.token
      })
    };

    var startUrl = this.gameUrl + '/' + game.id + '/start'

    this.http.post(startUrl, {}, httpOptions)
    .subscribe(
      data => { 
        this.getGames()
      },
      (err : HttpErrorResponse) => {
        console.error(err.statusText);
        console.error(err.message);
      }
    )
  }

  postMatch(gameId: string, tile1: Tile, tile2: Tile, user: User) {
    let httpOptions = {
      headers : new HttpHeaders(
      {
        'Content-Type':'application/json',
        'x-username': user.username,
        'x-token': user.token
      })
    };

    var postMatch: PostMatch = {
      tile1Id: tile1._id,
      tile2Id: tile2._id
    };

    var matchUrl = this.gameUrl + '/' + gameId + '/tiles/matches'

    this.http.post(matchUrl, postMatch, httpOptions)
    .subscribe(
      data => {},
      (err : HttpErrorResponse) => {
        console.error(err.statusText);
        console.error(err.message);
      }
      )
  }

  protected handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

@Injectable()
export class MockGameService extends GameService {
  private games = MOCK_GAMES;

  private mockedGamesSource = new Subject<Game[]>();

  gamesChanged$ = this.mockedGamesSource.asObservable();

  constructor(protected http: HttpClient) {
    super(http);
  }

  getGames() {
    this.mockedGamesSource.next(this.games);
  }

  // addGame(postGame: PostGame): Observable<Game> {
  //   var headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'x-username':'JobCuppen',
  //     'x-token':'test'
  //   });

  //   var newGame = {
  //     gameTemplate: {
  //       id: postGame.templateName
  //     },
  //     createdOn: Date.now().toString,
  //     startedOn: null,
  //     endedOn: null,
  //     createdBy: {
  //       name: 'Job Cuppen'
  //     },
  //     minPlayers: postGame.minPlayers,
  //     maxPlayers: postGame.maxPlayers,
  //     players: [
  //     ],
  //     state: GameState.open
  //   }
  //   return this.http.post<Game>(this.gameUrl, newGame, httpOptions)
  //   .pipe(
  //     tap(_ => this.getGames()),
  //     catchError(this.handleError<Game>('addGame'))
  //     );
  // }

  // joinGame(game: Game) {
  //   var headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'x-username':'JobCuppen',
  //     'x-token':'test'
  //   });

  //   var updatedGame = game;
  //   updatedGame.players.push(PLAYERONE)

  //   return this.http.put(this.gameUrl, updatedGame, httpOptions)
  //     .pipe(
  //       tap(_ => this.getGames()),
  //       catchError(this.handleError<any>('joinGame'))
  //     );
  // }

  // startGame(game: Game) {
  //   var headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'x-username':'JobCuppen',
  //     'x-token':'test'
  //   });

  //   var updatedGame = game;
  //   updatedGame.state = GameState.playing;

  //   return this.http.put(this.gameUrl, updatedGame, httpOptions)
  //     .pipe(
  //       tap(_ => this.getGames()),
  //       catchError(this.handleError<any>('startGame'))
  //     );
  // }
}
