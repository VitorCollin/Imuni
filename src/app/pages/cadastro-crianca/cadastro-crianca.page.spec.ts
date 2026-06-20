import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroCriancaPage } from './cadastro-crianca.page';

describe('CadastroCriancaPage', () => {
  let component: CadastroCriancaPage;
  let fixture: ComponentFixture<CadastroCriancaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
