import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserServicesService);
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home', '/post-list', '/post/:id', '/user/:id'];
  return protectedRoutes.includes(state.url) && userService.isUser() ? true : router.navigate(['/home']);
};
