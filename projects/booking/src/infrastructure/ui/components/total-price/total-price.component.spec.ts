import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPriceComponent } from './total-price.component';

describe('TotalPriceComponent', () => {
  let component: TotalPriceComponent;
  let fixture: ComponentFixture<TotalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
