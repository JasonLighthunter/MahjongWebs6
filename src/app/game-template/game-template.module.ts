import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TileModule } from '../tile/tile.module';

import { TemplatePreviewComponent } from './components/game-template-preview/game-template-preview.component';

import { GameTemplateService, MockGameTemplateService } from './services/game-template.service';

import { GameTemplate } from './models/game-template'

export { GameTemplateService, MockGameTemplateService } from './services/game-template.service';
export { GameTemplate, MOCK_GAME_TEMPLATES } from './models/game-template';

@NgModule({
  imports: [
    CommonModule,
    TileModule
  ],
  declarations: [
    TemplatePreviewComponent
  ],
  providers: [
    GameTemplateService
  ],
  exports: [
    TemplatePreviewComponent
  ]
})
export class GameTemplateModule { }
