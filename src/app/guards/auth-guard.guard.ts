import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const userService = inject(UserServicesService);
  const router:Router = inject(Router);
  const protectedRoutes:string[] = ['/home', '/post-list', '/user-list', '/post/:id'];

  const protectedPrefixes: string[] = ['/user/'];

  const isProtected = 
    protectedRoutes.includes(state.url) || 
    protectedPrefixes.some(prefix => state.url.startsWith(prefix));
  
  return isProtected && userService.loggedInUser ? true : router.navigate(['/']);
};
