import { Component, OnInit, Input } from '@angular/core';

import { UserService, User } from '../../../user/user.module';

import { GameService } from '../../services/game.service';

import { Game } from '../../models/game';
import { GameState } from '../../models/game-state.enum';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: Game;
  user: User;

  constructor(
    private gameService: GameService,
    private userService: UserService
  ) {
    this.userService.loggedInUserChanged$
      .subscribe(user => this.user = user);
  }

  ngOnInit(){
    this.userService
      .getLoggedInUser();
  }

  canJoin(): boolean {
    var game = this.game;
    if(
      game.state == GameState.finished ||
      game.players.length >= game.maxPlayers ||
      this.user === undefined
      ) 
    {
      return false;
    }

    var username =  this.user.username;

    if(game.players.find(player => player._id == this.user.username) !== undefined) {
      return false;
    }
    return true;
  }

  canStart(): boolean {
    var game = this.game;

    if(game.players.length < game.minPlayers || game.players.length > game.maxPlayers){
      return false;
    }

    if(game.state == GameState.open) {
      var username =  this.user.username;

      if(game.players.find(player => player._id == this.user.username) !== undefined) {
        return true;
      }
    }

    return false;
  }

  canGo(): boolean {
    

    if(this.user == undefined) {
      return false;
    }

    var game = this.game;
    var username =  this.user.username

    if((game.state == GameState.playing || game.state == GameState.finished) && game.players.find(p => p._id == username) !== undefined) {
      return true; 
    }
    return false;
  }

  join(gameId: number) {
    var game = this.game;

    this.gameService
      .joinGame(game, this.user);
  }

  start(gameId: number) {
    var game = this.game;

    this.gameService
      .startGame(game, this.user);
  }
}
