import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameCreateComponent } from './game-create/game-create.component';

import { GameService } from './game.service';
import { GameTemplateService } from './game-template.service';

import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(

      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      }
    )
  ],
  providers: [
    GameService,
    GameTemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
