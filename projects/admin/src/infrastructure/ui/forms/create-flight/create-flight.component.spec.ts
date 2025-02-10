import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFlightComponent } from './create-flight.component';
import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { IPlane } from '../../../../domain/model/plane';
import { ButtonComponent, InputComponent } from 'shared';

describe('CreateFlightComponent', () => {
  let component: CreateFlightComponent;
  let fixture: ComponentFixture<CreateFlightComponent>;
  let fb: FormBuilder;
  let originInput: DebugElement;
  let destinationInput: DebugElement;
  let priceInput: DebugElement;
  let planeSelect: DebugElement;
  let departureInput: DebugElement;
  let arrivalInput: DebugElement;
  let submitButton: DebugElement;

  const mockPlanes: IPlane[] = [
    {
      model: 'Boeing 747',
      state: 'ENABLED',
      id: '1',
    },
    {
      model: 'Airbus A380',
      state: 'DISABLED',
      id: '2',
    },
  ];

  const activatedRouteMock = {
    snapshot: {
      data: {},
    },
    params: of({}),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreateFlightComponent,
        ReactiveFormsModule,
        InputComponent,
        ButtonComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    })
      .overrideComponent(CreateFlightComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CreateFlightComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.form = fb.group({
      origin: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      price: ['', [Validators.required]],
      plane: ['', [Validators.required]],
      departure: ['', [Validators.required]],
      arrival: ['', [Validators.required]],
    });
    fixture.componentRef.setInput('planes', mockPlanes);
    fixture.detectChanges();

    originInput = fixture.debugElement.query(By.css('#origin'));
    destinationInput = fixture.debugElement.query(By.css('#destination'));
    priceInput = fixture.debugElement.query(By.css('#price'));
    planeSelect = fixture.debugElement.query(By.css('#plane'));
    departureInput = fixture.debugElement.query(By.css('#departure'));
    arrivalInput = fixture.debugElement.query(By.css('#arrival'));
    submitButton = fixture.debugElement.query(By.css('app-button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('origin')).toBeDefined();
    expect(component.form.get('destination')).toBeDefined();
    expect(component.form.get('price')).toBeDefined();
    expect(component.form.get('plane')).toBeDefined();
    expect(component.form.get('departure')).toBeDefined();
    expect(component.form.get('arrival')).toBeDefined();
  });

  it('should mark the form as invalid when all fields are empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should enable submit button when all required fields are filled', () => {
    component.form.get('origin')!.setValue('New York');
    component.form.get('destination')!.setValue('London');
    component.form.get('price')!.setValue(800);
    component.form.get('plane')!.setValue('1');
    component.form.get('departure')!.setValue('2024-07-20T10:00');
    component.form.get('arrival')!.setValue('2024-07-21T14:00');
    component.validateForm();
    fixture.detectChanges();
    expect(component.submitButtonData.disabled).toBeFalsy();
  });

  it('should emit onSubmit event with form values when submit is called', () => {
    const mockFlight = {
      origin: 'New York',
      destination: 'London',
      price: 800,
      idPlane: '1',
      departure: '2024-07-20T10:00',
      arrival: '2024-07-21T14:00',
    };
    component.form.get('origin')!.setValue(mockFlight.origin);
    component.form.get('destination')!.setValue(mockFlight.destination);
    component.form.get('price')!.setValue(mockFlight.price);
    component.form.get('plane')!.setValue(mockFlight.idPlane);
    component.form.get('departure')!.setValue(mockFlight.departure);
    component.form.get('arrival')!.setValue(mockFlight.arrival);
    let emittedFlight = null;
    component.onSubmit.subscribe((flight) => {
      emittedFlight = flight;
    });
    component.submit();
    expect(emittedFlight).toEqual(mockFlight);
  });

  it('should have the correct css classes', () => {
    expect(fixture.nativeElement.querySelector('form').classList).toContain(
      'form'
    );
    expect(
      fixture.nativeElement.querySelector('.form__group').classList
    ).toContain('form__group');
    expect(fixture.nativeElement.querySelector('select').classList).toContain(
      'form__select'
    );
  });
});
