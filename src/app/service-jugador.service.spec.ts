import { TestBed } from '@angular/core/testing';

import { ServiceJugadorService } from './service-jugador.service';

describe('ServiceJugadorService', () => {
  let service: ServiceJugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
