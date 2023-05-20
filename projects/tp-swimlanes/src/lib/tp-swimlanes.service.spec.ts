import { TestBed } from '@angular/core/testing';

import { TpSwimlanesService } from './tp-swimlanes.service';

describe('TpSwimlanesService', () => {
  let service: TpSwimlanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpSwimlanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
