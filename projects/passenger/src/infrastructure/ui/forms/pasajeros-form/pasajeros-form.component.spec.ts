import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajerosFormComponent } from './pasajeros-form.component';

describe('PasajerosFormComponent', () => {
  let component: PasajerosFormComponent;
  let fixture: ComponentFixture<PasajerosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasajerosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasajerosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
