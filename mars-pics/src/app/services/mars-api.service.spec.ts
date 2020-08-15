import { TestBed } from '@angular/core/testing';

import { MarsApiService } from './mars-api.service';

describe('MarsApiService', () => {
  let service: MarsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
