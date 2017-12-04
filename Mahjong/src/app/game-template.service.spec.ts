import { TestBed, inject } from '@angular/core/testing';

import { GameTemplateService } from './game-template.service';

describe('GameTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameTemplateService]
    });
  });

  it('should be created', inject([GameTemplateService], (service: GameTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
