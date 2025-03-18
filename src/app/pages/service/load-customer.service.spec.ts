import { TestBed } from '@angular/core/testing';

import { LoadCustomerService } from './load-customer.service';

describe('LoadCustomerService', () => {
  let service: LoadCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
