import { Component, OnInit, Input, OnChanges, SimpleChange, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Tile } from '../../models/tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() tile : Tile;

  @HostBinding('style.background') get setColor() {
    let val = (50 * this.tile.zPos);
    return 'rgba('+ val +',' + val + ',' + val + ',' + 1 + ')';
  };
  @HostBinding('style.grid-row') get setGridRow() {
    return this.sanitizer.bypassSecurityTrustStyle((this.tile.yPos + 1) + ' / span 2');
  }
  @HostBinding('style.grid-column') get setGridCol() {
    return this.sanitizer.bypassSecurityTrustStyle((this.tile.xPos + 1) + ' / span 2');
  }
  @HostBinding('style.z-index') get setZ_Index() {
    return this.sanitizer.bypassSecurityTrustStyle(this.tile.zPos + '');
  }

  constructor(private sanitizer : DomSanitizer) {
  }

  ngOnInit() {
  }
}
