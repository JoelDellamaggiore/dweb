import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDisciplinaComponent } from './nueva-disciplina.component';

describe('NuevaDisciplinaComponent', () => {
  let component: NuevaDisciplinaComponent;
  let fixture: ComponentFixture<NuevaDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
