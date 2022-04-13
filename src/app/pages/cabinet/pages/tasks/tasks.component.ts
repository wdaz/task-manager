import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TasksAddTaskComponent } from './components/tasks-add-task/tasks-add-task.component';
import { Task } from '@app/models/backend/Task';

@Component({
  selector: 'tm-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(public dialog: MatDialog) {
    this.tasks = [];
  }

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(TasksAddTaskComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) this.tasks = [...this.tasks, result];
    });
  }
}
