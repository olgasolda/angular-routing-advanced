import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static isLoggedIn: boolean = false;

  constructor() {
  }

  login(name: string, password: string): boolean {
    return name === 'admin' && password === '123' ? AuthService.isLoggedIn = true : false;
  }

  logout() {
    AuthService.isLoggedIn = false;
  }
}
