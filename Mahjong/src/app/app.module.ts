import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { GameModule } from './game/game.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';

import { LoginCallbackComponent } from './login/login.module';
import { GameBoardComponent } from './game/game.module';
import { OpenGamesPipe } from './pipes/open-games-pipe.pipe';
import { MyGamesPipe } from './pipes/my-games.pipe';
import { ActiveGamesPipe } from './pipes/active-games.pipe';

import { SocketService } from './socket.service';

const appRoutes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'board/:id', component: GameBoardComponent },
  { path: 'dashboard/:status', component: GamesComponent },
  { path: 'loginCallback', component: LoginCallbackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    OpenGamesPipe,
    MyGamesPipe,
    ActiveGamesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GameModule,
    LoginModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    OpenGamesPipe,
    MyGamesPipe,
    ActiveGamesPipe,
    SocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
