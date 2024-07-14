import { TestBed } from '@angular/core/testing';

import { FieldsControlService } from './fields-control.service';

describe('FieldsControlService', () => {
  let service: FieldsControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldsControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
