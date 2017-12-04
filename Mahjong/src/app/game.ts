import { GameTemplate } from './game-template';
import { Person } from './person';
import { GameState } from './game-state.enum';

export class Game {
  // id: string;
  id: number;
  gameTemplate: GameTemplate;
  createdOn: string;
  startedOn: string;
  endedOn: string;
  createdBy: Person;
  minPlayers: number;
  maxPlayers: number;
  players: Person[];
  state: GameState;
}
