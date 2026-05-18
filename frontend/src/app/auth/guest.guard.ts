import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';

import { SharedService } from '../services/shared.service';

export const guestGuard: CanActivateFn = () => {

  const share = inject(SharedService);

  const router = inject(Router);

  if (share.token()) {

    router.navigate(['/']);

    return false;

  }

  return true;

};