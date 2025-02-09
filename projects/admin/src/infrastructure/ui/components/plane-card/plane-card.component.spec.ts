import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaneCardComponent } from './plane-card.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlane } from '../../../../domain/model/plane';

describe('PlaneCardComponent', () => {
  let component: PlaneCardComponent;
  let fixture: ComponentFixture<PlaneCardComponent>;
  let modelElement: HTMLElement;
  let stateElement: HTMLElement;

  const mockPlane: IPlane = {
    model: 'Boeing 747',
    state: 'ENABLED',
    id: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaneCardComponent, CommonModule],
    })
      .overrideComponent(PlaneCardComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(PlaneCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('plane', mockPlane);
    fixture.detectChanges();

    modelElement = fixture.nativeElement.querySelector(
      '.card__details__item:nth-child(1) span:nth-child(2)'
    );
    stateElement = fixture.nativeElement.querySelector(
      '.card__details__item:nth-child(2) span:nth-child(2)'
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the plane information correctly', () => {
    expect(modelElement.textContent).toContain(mockPlane.model);
    expect(stateElement.textContent).toContain(mockPlane.state);
  });

  it('should apply the correct CSS class based on plane state', () => {
    expect(stateElement.classList).toContain('card__details__item--enabled');

    fixture.componentRef.setInput('plane', { ...mockPlane, state: 'DISABLED' });
    fixture.detectChanges();
    expect(stateElement.classList).toContain('card__details__item--disabled');
  });
});
