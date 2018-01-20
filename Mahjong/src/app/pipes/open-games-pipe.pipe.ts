import { Pipe, PipeTransform } from '@angular/core';

import { Game, GameState } from '../game/game.module';

@Pipe({
  name: 'openGames'
})
export class OpenGamesPipe implements PipeTransform {

  // transform(value: ): any {
  //   return null;
  // }
  transform(allGames: Game[]) {
    return allGames.filter(game => game.state === GameState.open);
  }

}
