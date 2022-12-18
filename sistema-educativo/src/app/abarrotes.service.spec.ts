import { TestBed } from '@angular/core/testing';

import { AbarrotesService } from './abarrotes.service';

describe('AbarrotesService', () => {
  let service: AbarrotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbarrotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
