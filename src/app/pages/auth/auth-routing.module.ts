import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./pages/sign-up/sign-up.module').then((m) => m.SignUpModule),
      },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
