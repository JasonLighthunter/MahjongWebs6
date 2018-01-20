import { Pipe, PipeTransform } from '@angular/core';
import { Game, GameState } from '../game/game.module';

@Pipe({
  name: 'activeGames'
})
export class ActiveGamesPipe implements PipeTransform {

  transform(allGames: Game[]) {
    return allGames.filter(game => game.state === GameState.playing);
  }

}
