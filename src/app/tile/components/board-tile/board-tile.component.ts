import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Tile } from '../../models/tile';
@Component({
  selector: 'app-board-tile',
  templateUrl: './board-tile.component.html',
  styleUrls: ['./board-tile.component.scss']
})
export class BoardTileComponent implements OnInit {
  @Input() tile : Tile;

  border: SafeStyle;
  
  tileClass : string;

  @HostBinding('class') get setClass() {
    let string = this.tile.tile.suit + '-' + this.tile.tile.name;
    return string.toLowerCase();
  };
  @HostBinding('style.grid-row') get setGridRow() {
    return this.sanitizer.bypassSecurityTrustStyle((this.tile.yPos + 1) + ' / span 1');
  }
  @HostBinding('style.grid-column') get setGridCol() {
    return this.sanitizer.bypassSecurityTrustStyle((this.tile.xPos + 1) + ' / span 1');
  }
  @HostBinding('style.z-index') get setZ_Index() {
    return this.sanitizer.bypassSecurityTrustStyle(this.tile.zPos + '');
  }

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    let string = this.tile.tile.suit + '-' + this.tile.tile.name;
    this.tileClass = string.toLowerCase();
    let val = (50 * this.tile.zPos);
    this.border = this.sanitizer.bypassSecurityTrustStyle('3px solid rgb('+ val +',' + val + ',' + val + ')');
  }
}
