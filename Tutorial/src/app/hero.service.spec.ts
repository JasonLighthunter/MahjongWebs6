import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
