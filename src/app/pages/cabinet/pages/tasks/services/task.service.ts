import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Enviroment
import { environment } from './../../../../../../environments/environment';

// Models
import { Task } from '@app/models/backend/Task';

@Injectable()
export class TaskService {
  private api: string;

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  allTasks(orgName: string) {
    return this.http.get<Task[]>(
      this.api + '/tasks?organizationName=' + orgName
    );
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.api + '/tasks', task);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(this.api + '/tasks/' + task.id, task);
  }
}
