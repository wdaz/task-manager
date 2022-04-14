import { User } from '@app/models/backend/User';
import { getLocalStorage } from './shared/utils/localStorage';
import { AuthService } from '@app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User | null = getLocalStorage<User>('user');
    if (user) {
      this.authService.setCurrentUser(user);
    }
  }
}
