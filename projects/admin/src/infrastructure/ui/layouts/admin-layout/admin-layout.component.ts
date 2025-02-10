import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet
} from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { LoadingComponent } from 'shared';

@Component({
  selector: 'lib-admin-layout',
  imports: [RouterOutlet, RouterLink, LoadingComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  isPlanes: boolean = false;
  ngOnInit(): void {
    this.isPlanes = this.router.url.includes('planes');

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.isPlanes = this.router.url.includes('planes');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
