import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

export const adminAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService = inject(UserServicesService);
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home','/user-list', '/user/:id'];
  return protectedRoutes.includes(state.url) && userService.isAdmin() ? true : router.navigate(['/sdcsdcsd']);
};
