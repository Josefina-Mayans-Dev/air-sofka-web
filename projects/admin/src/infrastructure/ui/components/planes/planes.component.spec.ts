import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanesComponent } from './planes.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { PlaneCardComponent } from '../plane-card/plane-card.component';
import { CommonModule } from '@angular/common';
import { IPlane } from '../../../../domain/model/plane';

describe('PlanesComponent', () => {
  let component: PlanesComponent;
  let fixture: ComponentFixture<PlanesComponent>;
  let planeCards: HTMLElement[];

  const mockPlanes: IPlane[] = [
    {
      model: 'Boeing 747',
      state: 'ENABLED',
      id: '',
    },
    {
      model: 'Airbus A380',
      state: 'DISABLED',
      id: '',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesComponent, PlaneCardComponent, CommonModule],
    })
      .overrideComponent(PlanesComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(PlanesComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('planes', mockPlanes);
    fixture.detectChanges();

    planeCards = fixture.nativeElement.querySelectorAll('lib-plane-card');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a PlaneCardComponent for each plane in the planes array', () => {
    expect(planeCards.length).toBe(mockPlanes.length);
  });

  it('should have the correct css classes', () => {
    expect(fixture.nativeElement.querySelector('.planes').classList).toContain(
      'planes'
    );
  });
});
