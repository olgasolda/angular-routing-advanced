import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  console.log(AuthService.isLoggedIn);
  if (AuthService.isLoggedIn) return true;
  return false;
};
