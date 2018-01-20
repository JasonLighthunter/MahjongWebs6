import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../../models/tile';

@Component({
  selector: 'app-tile-match',
  templateUrl: './tile-match.component.html',
  styleUrls: ['./tile-match.component.scss']
})

export class TileMatchComponent implements OnInit {
  @Input() tile : Tile;
  @Input() tiles : Tile[];

  date: string
  user: string

  tileOther: Tile

  constructor() { }

  ngOnInit() {
    this.date = this.tile.match.foundOn
    this.user = this.tile.match.foundBy
    this.tileOther = this.tiles.find(tile => tile._id === this.tile.match.otherTileId);
    console.log(this.tile);
  }

}
