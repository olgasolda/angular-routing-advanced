import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {delay, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl!: string;

  constructor(private router: Router) {
  }

  login(name: string, password: string): Observable<boolean> {
    return of({login: 'admin', password: '123'})
      .pipe(delay(2000))
      .pipe(map((res: any) => name === res.login && password === res.password ? this.isLoggedIn = true : false));
  }

  logout() {
    this.isLoggedIn = false;
  }

  canActivate(url: string): boolean {
    if (this.isLoggedIn) return true;

    this.redirectUrl = url;
    this.router.navigate(['login']).catch(console.log);
    return false;
  }

}
