import { Component, OnInit } from '@angular/core';

import { PostGame } from '../post-game';
import { GameTemplate } from '../game-template';

import { GameService } from '../game.service';
import { GameTemplateService } from '../game-template.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  game: PostGame = new PostGame();
  gameTemplates: GameTemplate[]

  selectedTemplate: GameTemplate

  isValid: boolean

  constructor(
    private gameService: GameService,
    private gameTemplateService: GameTemplateService
  ) {
    this.gameTemplateService.gameTemplatesChanged$
      .subscribe(templates => {
        this.gameTemplates = templates;
        this.selectedTemplate = templates[0];
      });
  }

  ngOnInit() {
    this.gameTemplateService.getGameTemplates();

    this.game.minPlayers = 2;
    this.game.maxPlayers = 2;

    this.validate();
  }

  save() {
    this.game.templateName = this.selectedTemplate.id;

    this.gameService
      .addGame(this.game)
      .subscribe();
  }

  onDropDownChange(event) {
    this.selectedTemplate = event;
    this.validate();
  }

  validate() {
    var min = this.game.minPlayers;
    var max = this.game.maxPlayers;
    var template = this.selectedTemplate;

    var minPlayersIsValid = (min < 7 && min > 0);
    var maxPlayersIsValid = (max < 7 && max > 1);
    var minIsLessThanMax = (min <= max);

    this.isValid = (
      minPlayersIsValid && 
      maxPlayersIsValid && 
      minIsLessThanMax 
    );
  }
}

