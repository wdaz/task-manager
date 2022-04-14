import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthService } from '@app/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.authService.currentUser.pipe(
      map((user) => {
        if (user) return true;
        this.router.navigate(['/sign-in']);
        this.toastr.error('You shall not pass!');
        return false;
      })
    );
  }
}
