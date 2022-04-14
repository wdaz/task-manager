import { TaskService } from '@app/pages/cabinet/pages/tasks/services/task.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TasksAddTaskComponent } from './components/tasks-add-task/tasks-add-task.component';
import { Task } from '@app/models/backend/Task';
import { User } from '@app/models/backend/User';

import { AuthService } from '@app/services/auth.service';
import { UserService } from './../users/services/user.service';

// Enums
import { Role } from '@app/models/enums/role.enum';
import { Status } from '@app/models/enums/status.enum';
@Component({
  selector: 'tm-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  filteredTasks: Task[];
  users: User[];
  curretUser: User | null;
  statuses = Object.values(Status).filter(
    (value) => typeof value === 'string'
  ) as string[];
  status: string;

  constructor(
    public dialog: MatDialog,
    private taskService: TaskService,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.tasks = [];
    this.filteredTasks = [];
    this.users = [];
    this.status = '';
    this.curretUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
    this.getTasks();
    this.getUsers();
  }

  openDialog() {
    const dialogRef = this.dialog.open(TasksAddTaskComponent, {
      width: '450px',
      data: {
        users: this.users,
      },
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      if (result) {
        result.organizationName = this.curretUser?.organizationName as string;
        this.taskService.addTask(result).subscribe(() => {
          this.tasks = [...this.tasks, result];
        });
      }
    });
  }

  filterTasksWithStatus(value: string) {
    if (value === '') {
      this.filteredTasks = this.tasks;
      return;
    }

    this.filteredTasks = [];
    this.filteredTasks = this.tasks.filter(
      (t) => t.status.toLowerCase() === value.toLowerCase()
    );
  }

  getTasks(): void {
    const orgName = this.curretUser?.organizationName as string;
    this.taskService.allTasks(orgName).subscribe((tasks) => {
      if (tasks.length) {
        this.tasks = tasks;
        this.filteredTasks = tasks;
      }
    });
  }

  getUsers(): void {
    this.userService.allUsers().subscribe((users) => {
      if (users.length) {
        this.users = users.filter((u) => u.role !== Role.ADMIN);
      }
    });
  }
}
