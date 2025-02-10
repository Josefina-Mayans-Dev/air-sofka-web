import { TestBed } from '@angular/core/testing';

import { DetailFlightComponent } from './detail-flight.component';

describe('DetailFlightComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFlightComponent]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DetailFlightComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render spans', () => {
    const fixture = TestBed.createComponent(DetailFlightComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('span')).toBeTruthy();
  });

});
