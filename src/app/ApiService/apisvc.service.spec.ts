import { TestBed } from '@angular/core/testing';

import { ApisvcService } from './apisvc.service';

describe('ApisvcService', () => {
  let service: ApisvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
