import { TestBed } from '@angular/core/testing';

import { RankCalculateService } from './rank-calculate.service';

describe('RankCalculateService', () => {
  let service: RankCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
