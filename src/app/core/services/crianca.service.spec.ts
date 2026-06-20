import { TestBed } from '@angular/core/testing';

import { CriancaService } from './crianca.service';

describe('CriancaService', () => {
  let service: CriancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
