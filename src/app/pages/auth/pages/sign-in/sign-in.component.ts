import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  error: string | null;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.error = null;
    this.signInForm = this.registerSignInForm();
  }
  get f() {
    return this.signInForm;
  }

  get username() {
    return this.f.get('username');
  }

  get password() {
    return this.f.get('password');
  }

  getusernameErrorMessage() {
    return this.username?.hasError('required') ? 'You must enter a value' : '';
  }

  getPasswordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password?.hasError('pattern')
      ? 'Minimum 6 symbol, alphanumeric characters'
      : '';
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.f.valid) {
      this.auth.signIn(this.f.value.email, this.f.value.password);
    }
  }

  registerSignInForm() {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/(?=.*[a-z])(?=.*[0-9])(?=.{6,32}$)/),
        ],
      ],
    });
  }
}
