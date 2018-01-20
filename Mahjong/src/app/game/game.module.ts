import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TileModule } from '../tile/tile.module';
import { GameTemplateModule } from '../game-template/game-template.module';

import { GameComponent } from './components/game/game.component';
import { GameCreateComponent } from './components/game-create/game-create.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

import { GameService, MockGameService } from './services/game.service';
import { MatchingService } from './services/matching.service';

import { UnmatchedPipe } from './pipes/unmatched.pipe';
import { MatchedPipe } from './pipes/matched.pipe';

export { GameBoardComponent } from './components/game-board/game-board.component';
export { Game } from './models/game';
export { GameState } from './models/game-state.enum';
export { GameService } from './services/game.service';
export { GameComponent } from './components/game/game.component';
export { GameCreateComponent } from './components/game-create/game-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameTemplateModule,
    TileModule,
    RouterModule
  ],
  declarations: [
    GameComponent,
    GameCreateComponent,
    GameBoardComponent,
    UnmatchedPipe,
    MatchedPipe,
  ],
  providers: [
    GameService,
    MatchingService,
    UnmatchedPipe,
    MatchedPipe,
  ],
  exports: [
    GameComponent,
    GameCreateComponent,
    GameBoardComponent
  ]
})
export class GameModule { }
