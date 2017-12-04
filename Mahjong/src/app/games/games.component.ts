import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

import { Game } from '../game';
import { GameState } from '../game-state.enum';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[]

  constructor(private gameService: GameService) {
    this.gameService.gamesChanged$
      .subscribe(games => this.games = games);
  }

  ngOnInit() {
    this.gameService.getGames();
  }

  canJoin(gameId: number): boolean {
    var game = this.getGameWithId(gameId);
    if(game.state == GameState.finished) {
      return false;
    }
    if (game.players.length >= game.maxPlayers) {
      return false;
    }
    return true;
  }

  canStart(gameId: number): boolean {
    var game = this.getGameWithId(gameId);
    if(game.players.length < game.minPlayers){
      return false;
    }
    if(game.players.length > game.maxPlayers) {
      return false;
    }
    if(game.state == GameState.open) {
      return true;
    }
    return false;
  }

  join(gameId: number) {
    var game = this.getGameWithId(gameId);

    this.gameService
      .joinGame(game)
      .subscribe();
  }

  start(gameId: number) {
    var game = this.getGameWithId(gameId);

    this.gameService
      .startGame(game)
      .subscribe();
  }

  private getGameWithId(gameId: number): Game {
    return this.games.find(game => game.id == gameId);
  }
}
