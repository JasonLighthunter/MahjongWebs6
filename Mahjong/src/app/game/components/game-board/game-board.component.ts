import { Component, OnInit, NgZone } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService, User} from '../../../user/user.module';

import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { MatchingService } from '../../services/matching.service';
import { SocketService } from '../../../socket.service';

import { Tile } from '../../../tile/tile.module';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})

export class GameBoardComponent implements OnInit {
  game : Game
  tiles : Tile[]
  user: User;

  selectedTile : string = null;

  activeTab: string = 'board'

  id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
    private matchingService: MatchingService,
    private userService: UserService,
    private socketService: SocketService,
    private zone: NgZone
    ) {
    this.gameService.gameChanged$
      .subscribe(game => this.game = game);
    this.gameService.tilesChanged$
      .subscribe(tiles => {
        this.zone.run(() => {
          this.tiles = tiles;
        });
      });
    this.userService.loggedInUserChanged$
      .subscribe(user => this.user = user);

    this.socketService.connectToGame(this.id);
    this.socketService.match
      .subscribe(data => { this.getGame() });
  }
  
  ngOnInit() {
    this.getGame();
    this.userService.getLoggedInUser();

    const BASE_URL = 'http://mahjongmayhem.herokuapp.com?gameId=' + this.id;
  }

  getGame(): void {
    this.gameService.getGame(this.id)
  }

  setTab(newTab : string) {
    if (newTab != this.activeTab) {
      this.activeTab = newTab
    }
    console.log(this.tiles);
  }

  deselectSelectedTile() {
    var id = this.tiles.findIndex(t => t.tile.id === this.selectedTile);
    this.tiles[id].isSelected = false;
    this.selectedTile = null;
  }

  selectTile(tile: Tile) {
    if(this.selectedTile === tile.tile.id){
      this.deselectSelectedTile();
    } else if (this.selectedTile === null) {
      if(this.matchingService.isSelectable(43, 33, tile, this.tiles)) {
        var id = this.tiles.findIndex(t => t.tile.id === tile.tile.id);
        this.tiles[id].isSelected = true;
        this.selectedTile = tile.tile.id;
      } else {
        alert("you can't select this tile!");
      }
    } else {
      if(this.matchingService.isSelectable(43, 33, tile, this.tiles)) {
        var id = this.tiles.findIndex(t => t.tile.id === this.selectedTile);
        var previousTile: Tile = this.tiles[id]
        if(this.matchingService.doMatch(tile, previousTile)) {
          this.gameService.postMatch(this.game.id, tile, previousTile, this.user);
        } else {
          alert("no match");
        }
        this.deselectSelectedTile();
      } else {
        alert("you can't select this tile!");
      }
    }    
  }
}