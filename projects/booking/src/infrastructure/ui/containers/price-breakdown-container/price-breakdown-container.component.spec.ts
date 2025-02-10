import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBreakdownContainerComponent } from './price-breakdown-container.component';

describe('PriceBreakdownContainerComponent', () => {
  let component: PriceBreakdownContainerComponent;
  let fixture: ComponentFixture<PriceBreakdownContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceBreakdownContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceBreakdownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
