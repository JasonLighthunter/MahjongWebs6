import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

import { GameTemplate } from '../../models/game-template';
import { Tile, MOCK_TILE_ONE } from '../../../tile/tile.module';

@Component({
  selector: 'app-template-preview',
  templateUrl: './game-template-preview.component.html',
  styleUrls: ['./game-template-preview.component.scss']
})
export class TemplatePreviewComponent implements OnChanges {
  @Input() template : GameTemplate;

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.template = changes['template'].currentValue;
  }
}
