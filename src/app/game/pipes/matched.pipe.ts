import { Pipe, PipeTransform } from '@angular/core';
import { Tile } from '../../tile/tile.module';

@Pipe({
  name: 'matched'
})
export class MatchedPipe implements PipeTransform {

  transform(allTiles: Tile[]) {
    if(allTiles !== undefined){
      return allTiles.filter(tile => tile.match !== undefined);
    }
  }
}
