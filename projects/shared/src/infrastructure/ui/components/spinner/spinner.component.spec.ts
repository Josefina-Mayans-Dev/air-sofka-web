import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let spinnerIcon: HTMLElement;
  let loadingText: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerComponent],
    })
      .overrideComponent(SpinnerComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    spinnerIcon = fixture.nativeElement.querySelector('fa-icon');
    loadingText = fixture.nativeElement.querySelector('p');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the loading text', () => {
    expect(loadingText).toBeTruthy();
    expect(loadingText.textContent).toContain('Loading...');
  });
});
