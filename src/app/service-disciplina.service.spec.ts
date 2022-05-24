import { TestBed } from '@angular/core/testing';

import { ServiceDisciplinaService } from './service-disciplina.service';

describe('ServiceDisciplinaService', () => {
  let service: ServiceDisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
