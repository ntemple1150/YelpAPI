import { TestBed } from '@angular/core/testing';

import { YelpServiceService } from './yelp-service.service';

describe('YelpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YelpServiceService = TestBed.get(YelpServiceService);
    expect(service).toBeTruthy();
  });
});
