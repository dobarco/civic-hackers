import { TestBed, inject } from '@angular/core/testing';

import { InsightService } from './insight.service';

describe('InsightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsightService]
    });
  });

  it('should be created', inject([InsightService], (service: InsightService) => {
    expect(service).toBeTruthy();
  }));
});
