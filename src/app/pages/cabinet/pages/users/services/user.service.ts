import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Enviroment
import { environment } from './../../../../../../environments/environment';
import { User } from '@app/models/backend/User';

@Injectable()
export class UserService {
  private api: string;

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  allUsers() {
    return this.http.get<User[]>(this.api + '/users');
  }

  addUser(user: User) {
    return this.http.post<User>(this.api + '/users', user);
  }
}
