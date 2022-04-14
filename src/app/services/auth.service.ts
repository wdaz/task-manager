import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { Organization } from '@app/models/backend/Organization';
import { User } from '@app/models/backend/User';

import { SignUpModel } from '@app/models/front/SignUpModel';

// Enviroment
import { environment } from './../../environments/environment';

// RxJs
import { BehaviorSubject, forkJoin, map, Observable } from 'rxjs';

// Utils
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStrorage,
} from '@app/shared/utils/localStorage';

@Injectable()
export class AuthService {
  private api: string;

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.api = environment.api;

    this.currentUserSubject = new BehaviorSubject<User | null>(
      getLocalStorage('user')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  setCurrentUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  signUp(organization: Organization, user: SignUpModel) {
    let organizationCall = this.http.post<Organization>(
      this.api + '/organization',
      organization
    );
    let userCall = this.http.post<User>(this.api + '/users', user);

    return forkJoin([organizationCall, userCall]);
  }

  signIn(username: string, password: string) {
    return this.http
      .get<Array<User>>(
        this.api + '/users?username=' + username + '&password=' + password
      )
      .pipe(
        map((data) => {
          if (data && data.length > 0) {
            setLocalStorage('user', data[0]);
            this.currentUserSubject.next(data[0]);
          }
          return data;
        })
      );
  }

  signOut() {
    removeLocalStrorage('user');
    this.currentUserSubject.next(null);
  }

  isLoggedIn() {
    return true;
  }
}
