import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PdsAuthGuardGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['login'])
      return false;
    }
    return this.http
      .post('http://localhost:3000/verify', {
        token: sessionStorage.getItem('token'),
      })
      .pipe(
        map((res: any) => {
          const { auth } = res;
          return auth ? true : false;
        })
      );
  }
}
