import { TestBed } from '@angular/core/testing';

import { JugadorServiceService } from './jugador-service.service';

describe('JugadorServiceService', () => {
  let service: JugadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
