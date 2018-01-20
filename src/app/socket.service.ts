import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  constructor() { }

  private socket: SocketIOClient.Socket;

  public match: Subject<SocketIOClient.Socket> = new Subject<SocketIOClient.Socket>();
  public start: Subject<any> = new Subject<any>();
  public end: Subject<any> = new Subject<any>();
  public playerJoined: Subject<any> = new Subject<any>();

  public connectToGame(gameId){
    this.socket = io("http://mahjongmayhem.herokuapp.com?gameId=" + gameId);
    this.subscribeToSocketMessages();
  }

  subscribeToSocketMessages(): void {
    this.socket.on('start', (data) => {
      this.start.next(data);
    });
    this.socket.on('match', (data) => {
      console.log("matchSocket");
      this.match.next(data);
    });
    this.socket.on('end', (data) => {
      this.end.next(data);
    });
    this.socket.on('playerJoined', (data) => {
      this.playerJoined.next(data);
    });
  }

}
