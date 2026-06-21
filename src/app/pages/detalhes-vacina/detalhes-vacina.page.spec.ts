import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesVacinaPage } from './detalhes-vacina.page';

describe('DetalhesVacinaPage', () => {
  let component: DetalhesVacinaPage;
  let fixture: ComponentFixture<DetalhesVacinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesVacinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
