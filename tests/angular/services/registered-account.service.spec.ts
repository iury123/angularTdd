import { TestBed } from '@angular/core/testing';

import { RegisteredAccountService } from '../../../src/services/registered-account.service';

describe('RegisteredAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [RegisteredAccountService]
  }));

  it('should be created', () => {
    const service: RegisteredAccountService = TestBed.get(RegisteredAccountService);
    expect(service).toBeTruthy();
  });

  it('should return a list of registered accounts asynchronously', (done: DoneFn) => {
    const service = TestBed.get(RegisteredAccountService);
    service.getRegisteredAccounts().subscribe({
      next: (accounts: RegisteredAccount[]) => {
        expect(accounts).toBeTruthy();
        done();
      }
    });
  });
});
