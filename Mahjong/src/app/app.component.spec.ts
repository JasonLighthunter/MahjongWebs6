import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';

import { GameService, GameComponent, GameCreateComponent } from './game/game.module';
import { TemplatePreviewComponent } from './game-template/components/game-template-preview/game-template-preview.component';
import { LoginComponent } from './login/login.module'
import { UserService } from './user/user.module';


import { OpenGamesPipe } from './pipes/open-games-pipe.pipe';
import { MyGamesPipe } from './pipes/my-games.pipe';
import { ActiveGamesPipe } from './pipes/active-games.pipe';

import { TileComponent } from './tile/components/tile/tile.component'


const appTestRoutes: Routes = [
  { path: '', component: GamesComponent }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GamesComponent,
        GameCreateComponent,
        GameComponent,
        LoginComponent,
        OpenGamesPipe,
        MyGamesPipe,
        ActiveGamesPipe,
        TemplatePreviewComponent,
        TileComponent,
      ],
      imports: [ 
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
          appTestRoutes,
          { enableTracing: false } // <-- debugging purposes only
        )
      ],
      providers: [
        GameService,
        UserService,
        OpenGamesPipe,
        MyGamesPipe,
        ActiveGamesPipe,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Webs 6 Mahjong Mayhem'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Webs 6 Mahjong Mayhem');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Webs 6 Mahjong Mayhem');
  }));
});
