import { TestBed, inject } from '@angular/core/testing';

import { IfrmaeService } from './ifrmae.service';

describe('IfrmaeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IfrmaeService]
    });
  });

  it('should be created', inject([IfrmaeService], (service: IfrmaeService) => {
    expect(service).toBeTruthy();
  }));
});
