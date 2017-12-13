import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GameTemplateService } from './game-template.service';

describe('GameTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameTemplateService
      ],
      imports: [
        HttpClientModule
      ],
    });
  });

  it('should be created', inject([GameTemplateService], (service: GameTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
