import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Role } from '@app/models/enums/role.enum';
import { AuthService } from '@app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  canActivate(): Observable<boolean> {
    return this.authService.currentUser.pipe(
      map((user) => {
        if (user?.role === Role.ADMIN) {
          return true;
        }
        this.router.navigate(['/cabinet']);
        this.toastr.error('You shall not pass!');
        return false;
      })
    );
  }
}
