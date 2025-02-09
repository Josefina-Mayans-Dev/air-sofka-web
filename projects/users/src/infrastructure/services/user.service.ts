import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserRequest } from '../../domain/model/createUser.request';
import { CreateUserResponse } from '../../domain/model/createUserResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  createUser(request: CreateUserRequest): Observable<CreateUserResponse> {
    debugger;
    return this.http.post<CreateUserResponse>('http://localhost:8080/users', request);
  }
  
}
