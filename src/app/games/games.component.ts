import { Component, OnInit, HostBinding } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Game, GameState, GameService } from '../game/game.module';
import { User, UserService } from '../user/user.module';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[]
  loggedInUser: User;
  filterMap: { [key: string]: number; } = {
    "all" : 0,
    "open" : 1,
    "mine" : 2,
    "active" : 3
  };

  lobbyType: number;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private userService: UserService
  ) {
    this.gameService.gamesChanged$
      .subscribe(games => this.games = games);
    this.userService.loggedInUserChanged$
      .subscribe(user => this.loggedInUser = user);
    this.route.paramMap
      .subscribe(map => this.lobbyType = this.filterMap[map.get('status')]);  
  }

  ngOnInit() {
    this.gameService.getGames();
    this.userService.getLoggedInUser();
  }
}

