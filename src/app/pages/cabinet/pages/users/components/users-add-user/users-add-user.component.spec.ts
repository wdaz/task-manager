import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddUserComponent } from './users-add-user.component';

describe('UsersAddUserComponent', () => {
  let component: UsersAddUserComponent;
  let fixture: ComponentFixture<UsersAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
