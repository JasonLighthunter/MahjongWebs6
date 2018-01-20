import { Pipe, PipeTransform } from '@angular/core';
import { Tile } from '../../tile/tile.module';

@Pipe({
  name: 'unmatched'
})
export class UnmatchedPipe implements PipeTransform {

  transform(allTiles: Tile[]) {
    if(allTiles !== undefined){
      return allTiles.filter(tile => tile.match === undefined);
    }
  }

}