import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginSubject = new Subject<boolean>();
  $showLogin: Observable<boolean> = this.loginSubject.asObservable();

  loginVisible(visible: boolean): void {
    this.loginSubject.next(visible);
  }
}