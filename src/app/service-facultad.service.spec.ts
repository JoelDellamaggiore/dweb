import { TestBed } from '@angular/core/testing';

import { ServiceFacultadService } from './service-facultad.service';

describe('ServiceFacultadService', () => {
  let service: ServiceFacultadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFacultadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
