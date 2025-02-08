import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersSectComponent } from './passengers-sect.component';

describe('PassengersSectComponent', () => {
  let component: PassengersSectComponent;
  let fixture: ComponentFixture<PassengersSectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengersSectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
