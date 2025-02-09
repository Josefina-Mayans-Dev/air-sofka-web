import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TokenService } from '../services/utils/token.service';
import { LoadingService } from '../services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const loaderService = inject(LoadingService);

  let authReq = undefined;

  const excludedRoutes = ['/flights', '/seats'];

  const shouldIntercept = !excludedRoutes.some(
    (route) => req.url.includes(route) && req.method === 'GET'
  );

  if (tokenService.isAuthenticated() && shouldIntercept) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.getToken()}`,
      },
    });
  }

  return next(authReq ?? req).pipe(
    catchError((error: HttpErrorResponse) => {
      loaderService.setLoading(false);
      switch (error.status) {
        case 400:
          break;

        case 401:
          tokenService.revokeToken();
          router.navigate(['/login']);
          break;

        case 403:
          // toastService.emitToast("Error", error.error.message, "error", true);
          break;

        case 500:
          // toastService.emitToast("Error", "Please contact support.", "error", true);
          break;
      }
      return throwError(() => error);
    })
  );
};
