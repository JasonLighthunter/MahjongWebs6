import { GameTemplate, MOCK_GAME_TEMPLATES } from '../../game-template/game-template.module';
import { Person } from '../../models/person';
import { GameState } from './game-state.enum';

export class Game {
  id: string;
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

export const MOCK_GAMES: Game[] = [
  {
    // id: 'test1',
    id: "1",
    gameTemplate: MOCK_GAME_TEMPLATES[0],
    createdOn: '2017-11-01T16:13:24.923Z',
    startedOn: '2017-11-02T16:13:24.923Z',
    endedOn: '2017-11-03T16:13:24.923Z',
    createdBy: { 
      _id: 'test',
      name: 'Job Cuppen',
      numberOfMatches: 0
    },
    minPlayers: 2,
    maxPlayers: 3,
    players: [
      { _id: 'test',
        name: 'Job Cuppen',
        numberOfMatches: 0
      },
      { _id: 'test',
        name: 'Joop Cuppen',
        numberOfMatches: 0
      }
    ],
    state: GameState.finished
  },
  {
    // id: 'test2',
    id: "2",
    gameTemplate: MOCK_GAME_TEMPLATES[1],
    createdOn: '2017-11-01T16:13:24.923Z',
    startedOn: '2017-11-02T16:13:24.923Z',
    endedOn: '2017-11-03T16:13:24.923Z',
    createdBy: { 
      _id: 'test',
      name: 'Job Cuppen',
      numberOfMatches: 0
    },
    minPlayers: 2,
    maxPlayers: 3,
    players: [
      { 
        _id: 'test',
        name: 'Job Cuppen',
        numberOfMatches: 0
      },
      { 
        _id: 'test',
        name: 'Joop Cuppen',
        numberOfMatches: 0
      }
    ],
    state: GameState.finished
  },
  {
    // id: 'test3',
    id: "3",
    gameTemplate: MOCK_GAME_TEMPLATES[2],
    createdOn: '2017-11-01T16:13:24.923Z',
    startedOn: '2017-11-02T16:13:24.923Z',
    endedOn: '2017-11-03T16:13:24.923Z',
    createdBy: { 
      _id: 'test',
      name: 'Job Cuppen',
        numberOfMatches: 0
    },
    minPlayers: 2,
    maxPlayers: 3,
    players: [
      { _id: 'test',
        name: 'Job Cuppen',
        numberOfMatches: 0
      },
      { _id: 'test',
        name: 'Joop Cuppen',
        numberOfMatches: 0
      }
    ],
    state: GameState.finished
  },
    {
    // id: 'test3',
    id: '4',
    gameTemplate: MOCK_GAME_TEMPLATES[3],
    createdOn: '2017-11-01T16:13:24.923Z',
    startedOn: '2017-11-02T16:13:24.923Z',
    endedOn: '2017-11-03T16:13:24.923Z',
    createdBy: { 
      _id: 'test',
      name: 'Job Cuppen',
        numberOfMatches: 0
    },
    minPlayers: 2,
    maxPlayers: 3,
    players: [
      // { _id: 'test',
      //   name: 'Job Cuppen',
      //   numberOfMatches: 0
      // },
      // { _id: 'test',
      //   name: 'Joop Cuppen',
      //   numberOfMatches: 0
      // }
    ],
    state: GameState.finished
  }
];