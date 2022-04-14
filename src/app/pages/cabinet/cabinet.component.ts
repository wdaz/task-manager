import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { User } from '@app/models/backend/User';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss'],
})
export class CabinetComponent implements OnInit {
  isOpen: Boolean;
  currentUser: Observable<User | null>;

  constructor(private auth: AuthService, private router: Router) {
    this.isOpen = false;
    this.currentUser = this.auth.currentUser;
  }

  ngOnInit(): void {}

  signOut() {
    this.auth.signOut();
    this.router.navigate(['/sign-in']);
  }
}
