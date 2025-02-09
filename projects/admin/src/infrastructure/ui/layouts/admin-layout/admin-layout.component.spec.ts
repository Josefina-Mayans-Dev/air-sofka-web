import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { AdminLayoutComponent } from './admin-layout.component';
import { ChangeDetectionStrategy } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterLink,
  NavigationEnd,
} from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { LoadingComponent } from 'shared';

describe('AdminLayoutComponent', () => {
  let component: AdminLayoutComponent;
  let fixture: ComponentFixture<AdminLayoutComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AdminLayoutComponent,
        RouterOutlet,
        RouterLink,
        LoadingComponent,
        RouterTestingModule.withRoutes([
          { path: 'admin', component: AdminLayoutComponent },
          { path: 'admin/planes', component: AdminLayoutComponent },
        ]),
      ],
    })
      .overrideComponent(AdminLayoutComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AdminLayoutComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isPlanes to true if the current route includes "planes"', fakeAsync(() => {
    router.navigate(['/admin/planes']);
    tick();
    fixture.detectChanges();
    expect(component.isPlanes).toBeTrue();
  }));

  it('should set isPlanes to false if the current route does not include "planes"', fakeAsync(() => {
    router.navigate(['/admin']);
    tick();
    fixture.detectChanges();
    expect(component.isPlanes).toBeFalse();
  }));

  it('should have the correct css classes', () => {
    expect(fixture.nativeElement.querySelector('header').classList).toContain(
      'header'
    );
  });
});
