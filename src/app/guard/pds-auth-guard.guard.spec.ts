import { TestBed } from '@angular/core/testing';

import { PdsAuthGuardGuard } from './pds-auth-guard.guard';

describe('PdsAuthGuardGuard', () => {
  let guard: PdsAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PdsAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
