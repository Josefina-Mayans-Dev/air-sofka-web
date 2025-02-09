import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMaintenanceComponent } from './create-maintenance.component';
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

describe('CreateMaintenanceComponent', () => {
  let component: CreateMaintenanceComponent;
  let fixture: ComponentFixture<CreateMaintenanceComponent>;
  let fb: FormBuilder;
  let planeSelect: DebugElement;
  let startInput: DebugElement;
  let endInput: DebugElement;
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
        CreateMaintenanceComponent,
        ReactiveFormsModule,
        InputComponent,
        ButtonComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    })
      .overrideComponent(CreateMaintenanceComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CreateMaintenanceComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.form = fb.group({
      plane: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
    });
    fixture.componentRef.setInput('planes', mockPlanes);
    fixture.detectChanges();

    planeSelect = fixture.debugElement.query(By.css('#plane'));
    startInput = fixture.debugElement.query(By.css('#start'));
    endInput = fixture.debugElement.query(By.css('#end'));
    submitButton = fixture.debugElement.query(By.css('app-button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('plane')).toBeDefined();
    expect(component.form.get('start')).toBeDefined();
    expect(component.form.get('end')).toBeDefined();
  });

  it('should mark the form as invalid when all fields are empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should enable submit button when all required fields are filled', () => {
    component.form.get('plane')!.setValue('1');
    component.form.get('start')!.setValue('2024-07-20T10:00');
    component.form.get('end')!.setValue('2024-07-21T14:00');
    component.validateForm();
    fixture.detectChanges();
    expect(component.submitButtonData.disabled).toBeFalsy();
  });

  it('should emit onSubmit event with form values when submit is called', () => {
    const mockMaintenance = {
      idPlane: '1',
      start: '2024-07-20T10:00',
      end: '2024-07-21T14:00',
    };
    component.form.get('plane')!.setValue(mockMaintenance.idPlane);
    component.form.get('start')!.setValue(mockMaintenance.start);
    component.form.get('end')!.setValue(mockMaintenance.end);
    let emittedMaintenance = null;
    component.onSubmit.subscribe((maintenance) => {
      emittedMaintenance = maintenance;
    });
    component.submit();
    expect(emittedMaintenance).toEqual(mockMaintenance);
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
