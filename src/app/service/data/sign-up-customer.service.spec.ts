import { TestBed } from '@angular/core/testing';

import { SignUpCustomerService } from './sign-up-customer.service';

describe('SignUpCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpCustomerService = TestBed.get(SignUpCustomerService);
    expect(service).toBeTruthy();
  });
});
