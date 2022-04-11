import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Models
import { SignUpModel } from '@app/models/front/SignUpModel';

@Injectable()
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  signUp(signUpModel: SignUpModel) {
    console.log(signUpModel);
  }

  signIn(username: string, password: string) {
    console.log(username, password);
  }

  signOut() {}

  isLoggedIn() {
    return true;
  }
}
