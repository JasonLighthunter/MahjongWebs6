import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { GameService, MockGameService } from '../game/services/game.service'; 

import { Game, MOCK_GAMES } from '../game/models/game';
import { PostGame } from '../game/models/post-game';

import { GameComponent } from '../game/components/game/game.component';
import { GamesComponent } from './games.component';


describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GamesComponent,
        GameComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: GameService, useClass: MockGameService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 games', () => {
    expect(component.games).toBeDefined();
    expect(component.games.length).toBe(4);
  });
});
