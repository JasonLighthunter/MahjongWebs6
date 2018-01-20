import { TileInfo } from './tile-info';
import { MatchInfo } from './match-info';

export class Tile {
  _id: string
  xPos: number;
  yPos: number;
  zPos: number;
  tile: TileInfo;
  match: MatchInfo;
  isSelected?: boolean = false;
}

export const MOCK_TILE_ONE : Tile = {
  "_id": "tksdkjlj3234lkjs",
  "xPos": 14,
  "yPos": 8,
  "zPos": 4,
  "tile": {
    "suit": "Dragon",
    "name": "Green",
    "matchesWholeSuit": false,
    "id": "130"
  },
  "match" : {
    "foundBy": "test",
    "otherTileId": "test",
    "foundOn": "test"
  },
  "isSelected" : false
};
