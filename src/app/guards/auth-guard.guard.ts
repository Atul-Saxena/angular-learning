import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const userService = inject(UserServicesService);
  const router:Router = inject(Router);
  const protectedRoutes:string[] = ['/home', '/post-list', '/user-list', '/post/:id', '/user/:id'];
  
  return protectedRoutes.includes(state.url) && userService.loggedInUser ? true : router.navigate(['/login']);
};
