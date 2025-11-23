import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablamultiplicacion } from './tablamultiplicacion';

describe('Tablamultiplicacion', () => {
  let component: Tablamultiplicacion;
  let fixture: ComponentFixture<Tablamultiplicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablamultiplicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablamultiplicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
