import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@app/models/backend/User';
import { AuthService } from '@app/services/auth.service';
import { UsersAddUserComponent } from './components/users-add-user/users-add-user.component';
import { UserService } from './services/user.service';
import { Role } from '@app/models/enums/role.enum';

@Component({
  selector: 'tm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'username', 'email'];
  dataSource!: MatTableDataSource<User>;
  users: User[];
  curretUser: User | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.curretUser = this.authService.currentUserValue;
    this.users = [];
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(UsersAddUserComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        result.password = 'password1234';
        result.organizationName = this.curretUser?.organizationName as string;
        result.role = Role.USER;
        this.userService.addUser(result).subscribe(() => {
          this.users = [...this.users, result];
          this.dataSource.data = this.users;
        });
      }
    });
  }

  getUsers(): void {
    this.userService.allUsers().subscribe((users) => {
      if (users.length) {
        this.users = users.filter((u) => u.id !== this.curretUser?.id);
        this.dataSource.data = this.users;
      }
    });
  }
}
