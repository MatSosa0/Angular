import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graficotarta } from './graficotarta';

describe('Graficotarta', () => {
  let component: Graficotarta;
  let fixture: ComponentFixture<Graficotarta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graficotarta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Graficotarta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
