import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

import { SharedService } from '../services/shared.service';

export const authGuard: CanActivateFn = () => {

  const share = inject(SharedService);

  const router = inject(Router);

  if (share.token()) {

    return true;

  }

  router.navigate(['/login']);

  return false;

};