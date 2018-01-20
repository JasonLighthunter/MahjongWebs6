import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../game/game.module';
import { User } from '../user/user.module';

@Pipe({
  name: 'myGames'
})
export class MyGamesPipe implements PipeTransform {
  transform(allGames: Game[], loggedInUser: User) {
    console.log(allGames);
    console.log(loggedInUser);
    return allGames.filter(
      game => game.players.filter(
        player => player._id === loggedInUser.username
      ).length > 0
    );
  }

}
