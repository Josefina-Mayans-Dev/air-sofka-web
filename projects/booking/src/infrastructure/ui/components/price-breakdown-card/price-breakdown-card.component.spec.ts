import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBreakdownCardComponent } from './price-breakdown-card.component';

describe('PriceBreakdownCardComponent', () => {
  let component: PriceBreakdownCardComponent;
  let fixture: ComponentFixture<PriceBreakdownCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceBreakdownCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceBreakdownCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
