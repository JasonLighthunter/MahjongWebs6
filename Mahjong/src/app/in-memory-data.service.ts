import { Injectable } from '@angular/core';

import { MOCK_GAMES } from './game';

import { GameState } from './game-state.enum';

@Injectable()
export class InMemoryDataService {
  createDb() {
    const games = MOCK_GAMES;
    return {games};
  }

  constructor() { }
}
 