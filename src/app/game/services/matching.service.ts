import { Injectable } from '@angular/core';

import { Tile } from '../../tile/tile.module';
import { Rectangle } from '../models/rectangle';

import { GameService } from './game.service';

@Injectable()
export class MatchingService {

  constructor(private gameService: GameService) { }

  doMatch(tile1: Tile, tile2: Tile): boolean {
    if(tile1.tile.suit === tile2.tile.suit) {
      if(tile1.tile.matchesWholeSuit) {
        return true;
      } else if(tile1.tile.name === tile2.tile.name) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  isSelectable(height: number, width: number, selectedTile: Tile, board : Tile[]): boolean {
    var leftFree: boolean = true;
    var rightFree: boolean = true;
    // console.log(selectedTile);
    for (var i = 0; i < board.length; i++) {
      if(board[i].match === undefined) {
        if(board[i].zPos > selectedTile.zPos) {
          if(this.isCovered(height,width,selectedTile,board[i])) {
            return false;
          }
        }
        if(board[i].zPos === selectedTile.zPos && Math.abs(board[i].yPos - selectedTile.yPos) <= 1 && board[i].tile.id !== selectedTile.tile.id) {
          if(this.isLeftBlocked(height,width,selectedTile,board[i])){
            leftFree = false;
          }
          if(this.isRightBlocked(height,width,selectedTile,board[i])) {
            rightFree = false;
          }
        }
      }
    }
    return (leftFree || rightFree);
  }

  isRightBlocked(height: number, width: number, selectedTile: Tile, tileToTest : Tile): boolean {
    var r1 : Rectangle = {
      left: tileToTest.xPos * width,
      top: tileToTest.yPos * height ,
      right: tileToTest.xPos * width + width ,
      bottom: tileToTest.yPos * height + height
    };

    var r2 : Rectangle = {
      left: (selectedTile.xPos + 2 ) * width,
      top: selectedTile.yPos * height,
      right: (selectedTile.xPos + 2 ) * width + width,
      bottom: selectedTile.yPos * height + height
    };

    if(this.intersectRect(r1,r2)) {
      return true;
    }
    return false;
  }

  isLeftBlocked(height: number, width: number, selectedTile: Tile, tileToTest : Tile): boolean {
    var r1 : Rectangle = {
      left: tileToTest.xPos * width,
      top: tileToTest.yPos * height ,
      right: tileToTest.xPos * width + width ,
      bottom: tileToTest.yPos * height + height
    };

    var r2 : Rectangle = {
      left: (selectedTile.xPos - 2 ) * width ,
      top: selectedTile.yPos * height,
      right: (selectedTile.xPos - 2 ) * width + width ,
      bottom: selectedTile.yPos * height + height
    };

    if(this.intersectRect(r1,r2)) {
      return true;
    }
    return false;
  }

  isCovered(height: number, width: number, selectedTile: Tile, tileToTest : Tile): boolean {
    var r1 : Rectangle = {
      left: tileToTest.xPos * width,
      top: tileToTest.yPos * height ,
      right: tileToTest.xPos * width + width,
      bottom: tileToTest.yPos * height + height
    };

    var r2 : Rectangle = {
      left: selectedTile.xPos * width,
      top: selectedTile.yPos * height,
      right: selectedTile.xPos * width + width,
      bottom: selectedTile.yPos * height + height
    };

    return this.intersectRect(r1,r2);
  }

  intersectRect(r1: Rectangle, r2: Rectangle): boolean {
    return !(
      r2.left > r1.right || 
      r2.right < r1.left || 
      r2.top > r1.bottom ||
      r2.bottom < r1.top)
  }
}
