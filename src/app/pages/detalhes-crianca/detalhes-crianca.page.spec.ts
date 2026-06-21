import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesCriancaPage } from './detalhes-crianca.page';

describe('DetalhesCriancaPage', () => {
  let component: DetalhesCriancaPage;
  let fixture: ComponentFixture<DetalhesCriancaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCriancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
