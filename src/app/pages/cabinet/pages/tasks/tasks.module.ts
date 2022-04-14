import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksAddTaskComponent } from './components/tasks-add-task/tasks-add-task.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

// Services
import { TaskService } from '@app/pages/cabinet/pages/tasks/services/task.service';
import { UserService } from '@app/pages/cabinet/pages/users/services/user.service';
import { AuthService } from '@app/services/auth.service';

// Pipes
import { UserFuleNamePipe } from './pipes/user-fule-name.pipe';

@NgModule({
  declarations: [TasksComponent, TasksAddTaskComponent, UserFuleNamePipe],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [TaskService, UserService, AuthService],
})
export class TasksModule {}
