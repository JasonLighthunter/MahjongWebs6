import { Component, OnInit } from '@angular/core';

import { UserService, User} from '../../../user/user.module';
import { GameTemplate, MOCK_GAME_TEMPLATES, GameTemplateService } from '../../../game-template/game-template.module';

import { PostGame } from '../../models/post-game';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {
  game: PostGame = new PostGame();
  gameTemplates: GameTemplate[];
  user: User;

  selectedTemplate: GameTemplate = undefined

  isValid: boolean

  constructor(
    private gameService: GameService,
    private gameTemplateService: GameTemplateService,
    private userService: UserService
  ) {
    this.gameTemplateService.gameTemplatesChanged$
      .subscribe(templates => {
        this.gameTemplates = templates;
        this.selectedTemplate = templates[0];
      });

    this.userService.loggedInUserChanged$
      .subscribe(user => this.user = user);
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
      .addGame(this.game, this.user)
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

