import { Tile } from './tile';

export class GameTemplate {
  id: string;
  tiles: [Tile];
}

export const MOCK_GAME_TEMPLATES: GameTemplate[] = [
{
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
{
  id: 'Ram',
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
{
  id: 'Ox',
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
{
  id: 'Dragon',
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
}
];