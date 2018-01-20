import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TileComponent } from './components/tile/tile.component';
import { BoardTileComponent } from './components/board-tile/board-tile.component';
import { TileMatchComponent } from './components/tile-match/tile-match.component';

export { Tile, MOCK_TILE_ONE } from './models/tile';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    TileComponent,
    BoardTileComponent,
    TileMatchComponent
  ],
  exports: [
    TileComponent,
    BoardTileComponent,
    TileMatchComponent,
  ]
})
export class TileModule { }
