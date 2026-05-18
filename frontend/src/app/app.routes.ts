import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { guestGuard } from './auth/guest.guard';

export const routes: Routes = [
   
    {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('../app/module/signin/signin.component')
        .then(m => m.SigninComponent)
  },
      {
    path: 'signup',

    canActivate: [guestGuard],

    loadComponent: () =>
      import('./module/signup/signup.component')
        .then(m => m.SignupComponent)
  },

  {
    path: '',

    canActivate: [authGuard],

    loadComponent: () =>
      import('./module/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },

  {
    path: '**',

    redirectTo: ''
  }

];