import { TestBed } from '@angular/core/testing';

import { RegisteredAccountsRepositoryService } from '../../../src/app/services/registered-accounts-repository.service';

describe('RegisteredAccountsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisteredAccountsRepositoryService = TestBed.get(RegisteredAccountsRepositoryService);
    expect(service).toBeTruthy();
  });
});
