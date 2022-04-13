import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'tm-users-add-user',
  templateUrl: './users-add-user.component.html',
  styleUrls: ['./users-add-user.component.scss'],
})
export class UsersAddUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UsersAddUserComponent>,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.userForm;
  }

  getEmailErrorMessage() {
    if (this.f.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.f.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.f.valid) {
      this.dialogRef.close(this.f.value);
    }
  }
}
