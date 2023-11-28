import { TestBed } from '@angular/core/testing';

import { SubscriptionBackendService } from './subscription-backend.service';

describe('SubscriptionBackendService', () => {
  let service: SubscriptionBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
