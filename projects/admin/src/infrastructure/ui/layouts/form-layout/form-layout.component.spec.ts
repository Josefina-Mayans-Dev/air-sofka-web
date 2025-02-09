import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLayoutComponent } from './form-layout.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from 'shared';

describe('FormLayoutComponent', () => {
  let component: FormLayoutComponent;
  let fixture: ComponentFixture<FormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLayoutComponent, RouterOutlet, LoadingComponent],
    })
      .overrideComponent(FormLayoutComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the router-outlet', () => {
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  it('should render the loading component', () => {
    const loadingComponent = fixture.nativeElement.querySelector('lib-loading');
    expect(loadingComponent).toBeTruthy();
  });

  it('should have the correct css classes', () => {
    expect(fixture.nativeElement.querySelector('main').classList).toContain(
      'main'
    );
    expect(
      fixture.nativeElement.querySelector('.main__container').classList
    ).toContain('main__container');
  });
});
