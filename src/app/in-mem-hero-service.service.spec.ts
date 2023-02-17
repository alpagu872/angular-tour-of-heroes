import { TestBed } from '@angular/core/testing';

import { InMemHeroService } from './in-mem-hero-service.service';

describe('InMemHeroServiceService', () => {
  let service: InMemHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
