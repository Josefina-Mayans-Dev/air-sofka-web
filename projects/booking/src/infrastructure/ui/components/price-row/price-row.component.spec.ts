import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRowComponent } from './price-row.component';

describe('PriceRowComponent', () => {
  let component: PriceRowComponent;
  let fixture: ComponentFixture<PriceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
