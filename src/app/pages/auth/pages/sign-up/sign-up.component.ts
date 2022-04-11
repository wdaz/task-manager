import { Component, OnInit } from '@angular/core';
// Form module
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  error: string | null;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.error = null;
    this.signUpForm = this.registerSignUpForm();
  }

  get f() {
    return this.signUpForm;
  }
  get organizationName() {
    return this.f.get('organizationName');
  }

  get organizationPhone() {
    return this.f.get('organizationPhone');
  }

  get organizationAddress() {
    return this.f.get('organizationAddress');
  }

  get username() {
    return this.f.get('username');
  }

  get email() {
    return this.f.get('email');
  }

  get password() {
    return this.f.get('password');
  }

  getNameErrorMessage() {
    return this.organizationName?.hasError('required')
      ? 'You must enter a value'
      : '';
  }

  getPhoneErrorMessage() {
    if (this.organizationPhone?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.organizationPhone?.hasError('maxLength')
      ? 'Maximum length 16 '
      : '';
  }

  getAddressErrorMessage() {
    return this.organizationAddress?.hasError('required')
      ? 'You must enter a value'
      : '';
  }

  getUsernameErrorMessage() {
    return this.username?.hasError('required') ? 'You must enter a value' : '';
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
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
      this.auth.signUp(this.f.value);
    }
  }

  registerSignUpForm() {
    return this.fb.group({
      organizationName: ['', [Validators.required]],
      organizationPhone: ['', [Validators.required, Validators.maxLength(16)]],
      organizationAddress: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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
