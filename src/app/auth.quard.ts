import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
      if (localStorage.getItem('x-auth-token')) {
        return true;
      }else {
        this._router.navigate(['/']);
        return false;
      }
    }
}