import { Component, OnInit } from '@angular/core';

import { PostGame } from '../post-game';
import { GameTemplate } from '../game-template';

import { GameService } from '../game.service';
import { GameTemplateService } from '../game-template.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {
  game: PostGame
  gameTemplates: GameTemplate[]

  isValid: boolean

  constructor(
    private gameService: GameService,
    private gameTemplateService: GameTemplateService
  ) {
    this.gameTemplateService.gameTemplatesChanged$
      .subscribe(templates => this.gameTemplates = templates);
    
    this.isValid = false;
  }

  ngOnInit() {
    this.gameTemplateService.getGameTemplates();
    
    this.game = {
      minPlayers: 2,
      maxPlayers: 2,
      templateName: "-Select your Template-"
    };
  }

  save() {
    this.gameService
    .addGame(this.game)
    .subscribe();
  }

  validate() {
    var min = this.game.minPlayers;
    var max = this.game.maxPlayers;
    var template = this.game.templateName;

    var minPlayersIsValid = (min < 7 && min > 0);
    var maxPlayersIsValid = (max < 7 && max > 1);
    var minIsLessThanMax = (min <= max);
    var templateIsValid = (template != "-Select your Template-");

    this.isValid = (
      minPlayersIsValid && 
      maxPlayersIsValid && 
      minIsLessThanMax && 
      templateIsValid
    );
  }
}
