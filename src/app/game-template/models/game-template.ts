import { Tile } from '../../tile/tile.module';

export class GameTemplate {
  id: string;
  tiles: Tile[];
}

export const MOCK_GAME_TEMPLATES: GameTemplate[] = [
{
  id: 'Shanghai',
  tiles: [
    {
      _id: '234e234j23',
      xPos:1, yPos:1,zPos:1,
      tile: {
        id: 'test1',
        suit: 'flower',
        name: '1',
        matchesWholeSuit: true
      },
      match:{
        foundBy: 'test',
        otherTileId: 'test',
        foundOn: 'test'
      }
    }
  ]
},
{
  id: 'Ram',
  tiles: [
    {
      _id: '234234j23',
      xPos:1, yPos:1,zPos:1,
      tile: {
        id: 'test1',
        suit: 'flower',
        name: '1',
        matchesWholeSuit: true
      },
      match:{
        foundBy: 'test',
        otherTileId: 'test',
        foundOn: 'test'
      }
    }
  ]
},
{
  id: 'Ox',
  tiles: [
    {
      _id: '234234j623',
      xPos:1, yPos:1,zPos:1,
      tile: {
        id: 'test1',
        suit: 'flower',
        name: '1',
        matchesWholeSuit: true
      },
      match:{
        foundBy: 'test',
        otherTileId: 'test',
        foundOn: 'test'
      }
    }
  ]
},
{
  id: 'Dragon',
  tiles: [
    {
      _id: '23423y4j23',
      xPos:1, yPos:1,zPos:1,
      tile: {
        id: 'test1',
        suit: 'flower',
        name: '1',
        matchesWholeSuit: true
      },
      match:{
        foundBy: 'test',
        otherTileId: 'test',
        foundOn: 'test'
      }
    }
  ]
}
];