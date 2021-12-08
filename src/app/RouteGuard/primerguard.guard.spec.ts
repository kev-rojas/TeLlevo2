import { TestBed } from '@angular/core/testing';

import { PrimerguardGuard } from './primerguard.guard';

describe('PrimerguardGuard', () => {
  let guard: PrimerguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrimerguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
