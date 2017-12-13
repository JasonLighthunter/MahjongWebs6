import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';

import { Game } from '../game';
import { GameState } from '../game-state.enum';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
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
}
