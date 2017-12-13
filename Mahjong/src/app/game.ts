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

export const MOCK_GAMES: Game[] = [
  {
    // id: 'test1',
    id: 1,
    gameTemplate: {
      id: 'Shanghai',
      tiles: [
        {
          xPos:1, yPos:1,zPos:1,
          tile: {
            id: 'test1',
            suit: 'flower',
            name: 1,
            matchesWholeSuit: true
          },
          match:{
            foundBy: 'test',
            otherTyleId: 'test',
            foundOn: 'test'
          }
        }
      ]
    },
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
    id: 2,
    gameTemplate: {
      id: 'Shanghai',
      tiles: [
        {
          xPos:1, yPos:1,zPos:1,
          tile: {
            id: 'test1',
            suit: 'flower',
            name: 1,
            matchesWholeSuit: true
          },
          match:{
            foundBy: 'test',
            otherTyleId: 'test',
            foundOn: 'test'
          }
        }
      ]
    },
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
    id: 3,
    gameTemplate: {
      id: 'Shanghai',
      tiles: [
        {
          xPos:1, yPos:1,zPos:1,
          tile: {
            id: 'test1',
            suit: 'flower',
            name: 1,
            matchesWholeSuit: true
          },
          match:{
            foundBy: 'test',
            otherTyleId: 'test',
            foundOn: 'test'
          }
        }
      ]
    },
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
    id: 4,
    gameTemplate: {
      id: 'Shanghai',
      tiles: [
        {
          xPos:1, yPos:1,zPos:1,
          tile: {
            id: 'test1',
            suit: 'flower',
            name: 1,
            matchesWholeSuit: true
          },
          match:{
            foundBy: 'test',
            otherTyleId: 'test',
            foundOn: 'test'
          }
        }
      ]
    },
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
  }
];