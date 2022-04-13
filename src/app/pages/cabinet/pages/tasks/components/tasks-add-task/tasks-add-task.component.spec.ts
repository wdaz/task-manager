import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAddTaskComponent } from './tasks-add-task.component';

describe('TasksAddTaskComponent', () => {
  let component: TasksAddTaskComponent;
  let fixture: ComponentFixture<TasksAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksAddTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
