import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

export const adminAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService = inject(UserServicesService);
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home','/user-list', '/create-user', '/create-user'];

  const protectedPrefixes: string[] = ['/user/'];

  const isProtected = 
    protectedRoutes.includes(state.url) || 
    protectedPrefixes.some(prefix => state.url.startsWith(prefix));
  return isProtected && userService.isAdmin() ? true : router.navigate(['/sdcsdcsd']);
};
