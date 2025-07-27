import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserServicesService);
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home', '/post-list', '/create-post'];
  const protectedPrefixes: string[] = ['/user/','/post/'];

  const isProtected = 
    protectedRoutes.includes(state.url) || 
    protectedPrefixes.some(prefix => state.url.startsWith(prefix));
  return isProtected && userService.isUser() ? true : router.navigate(['/asdadc']);
};
