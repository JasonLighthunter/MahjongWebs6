import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { GameCreateComponent } from './game-create.component';

import { GameTemplate, MOCK_GAME_TEMPLATES, GameTemplateService, MockGameTemplateService} from '../../../game-template/game-template.module';

import { GameService, MockGameService } from '../../services/game.service';
import {  } from '../game-template.service';

describe('GameCreateComponent', () => {
  let component: GameCreateComponent;
  let fixture: ComponentFixture<GameCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GameCreateComponent
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [ 
        { provide: GameTemplateService, useClass: MockGameTemplateService },
        { provide: GameService, useClass: MockGameService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCreateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 Templates', () => {
    expect(component.gameTemplates.length).toBe(4);
  });
});
