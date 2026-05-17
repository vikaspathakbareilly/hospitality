import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'signup',
    loadComponent: () =>
      import('../app/module/signup/signup.component')
        .then(m => m.SignupComponent)
  },
    {
    path: '',
    loadComponent: () =>
      import('../app/module/signin/signin.component')
        .then(m => m.SigninComponent)
  }
    
];
