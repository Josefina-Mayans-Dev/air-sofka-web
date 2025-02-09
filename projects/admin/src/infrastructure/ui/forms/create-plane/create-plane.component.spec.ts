import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlaneComponent } from './create-plane.component';
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
import { ButtonComponent, InputComponent } from 'shared';

describe('CreatePlaneComponent', () => {
  let component: CreatePlaneComponent;
  let fixture: ComponentFixture<CreatePlaneComponent>;
  let fb: FormBuilder;
  let modelInput: DebugElement;
  let submitButton: DebugElement;

  const activatedRouteMock = {
    snapshot: {
      data: {},
    },
    params: of({}),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreatePlaneComponent,
        ReactiveFormsModule,
        InputComponent,
        ButtonComponent,
      ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
    })
      .overrideComponent(CreatePlaneComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CreatePlaneComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    component.form = fb.group({
      model: ['', [Validators.required]],
    });
    fixture.detectChanges();

    modelInput = fixture.debugElement.query(By.css('#model'));
    submitButton = fixture.debugElement.query(By.css('app-button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form correctly', () => {
    expect(component.form).toBeDefined();
    expect(component.form.get('model')).toBeDefined();
  });

  it('should mark the form as invalid when model is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should enable submit button when model is filled', () => {
    component.form.get('model')!.setValue('Boeing 747');
    component.validateForm();
    fixture.detectChanges();
    expect(component.submitButtonData.disabled).toBeFalsy();
  });

  it('should emit onSubmit event with form value when submit is called', () => {
    const mockPlane = {
      model: 'Boeing 747',
    };
    component.form.get('model')!.setValue(mockPlane.model);
    let emittedPlane = null;
    component.onSubmit.subscribe((plane) => {
      emittedPlane = plane;
    });
    component.submit();
    expect(emittedPlane).toEqual(mockPlane);
  });

  it('should have the correct css classes', () => {
    expect(fixture.nativeElement.querySelector('form').classList).toContain(
      'form'
    );
  });
});
