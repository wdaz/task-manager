import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@app/models/backend/User';

@Component({
  selector: 'tm-tasks-add-task',
  templateUrl: './tasks-add-task.component.html',
  styleUrls: ['./tasks-add-task.component.scss'],
})
export class TasksAddTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TasksAddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { users: User[] },
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      usersIds: ['', Validators.required],
      status: ['Open'],
    });
  }

  get f() {
    return this.taskForm;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.f.valid) {
      this.dialogRef.close(this.f.value);
    }
  }
}
