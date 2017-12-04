import { Injectable } from '@angular/core';

import { GameState } from './game-state.enum';

@Injectable()
export class InMemoryDataService {
  createDb() {
    const games = [
    {
      // id: 'test1',
      id: 1,
      gameTemplate: {
        id: 'Shanghai'
      },
      createdOn: '2017-11-01T16:13:24.923Z',
      startedOn: '2017-11-02T16:13:24.923Z',
      endedOn: '2017-11-03T16:13:24.923Z',
      createdBy: {
        name: 'Job Cuppen'
      },
      minPlayers: 2,
      maxPlayers: 3,
      players: [
      { name: 'Job Cuppen' },
      { name: 'Joop Cuppen' }
      ],
      state: GameState.finished
    },
    {
      // id: 'test2',
      id: 2,
      gameTemplate: {
        id: 'Ox'
      },
      createdOn: '2017-11-01T16:13:24.923Z',
      startedOn: '2017-11-02T16:13:24.923Z',
      endedOn: '2017-11-03T16:13:24.923Z',
      createdBy: {
        name: 'Job Cuppen'
      },
      minPlayers: 2,
      maxPlayers: 3,
      players: [
      { name: 'Job Cuppen' },
      { name: 'Joop Cuppen' }
      ],
      state: GameState.finished
    },
    {
      // id: 'test3',
      id: 3,
      gameTemplate: {
        id: 'Dragon'
      },
      createdOn: '2017-11-01T16:13:24.923Z',
      startedOn: '2017-11-02T16:13:24.923Z',
      endedOn: '2017-11-03T16:13:24.923Z',
      createdBy: {
        name: 'Job Cuppen'
      },
      minPlayers: 2,
      maxPlayers: 3,
      players: [
      { name: 'Job Cuppen' },
      { name: 'Joop Cuppen' }
      ],
      state: GameState.finished
    }
    ];
    return {games};
  }

  constructor() { }
}
 