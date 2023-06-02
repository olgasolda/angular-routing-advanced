import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: string = 'admin';
  userPassword: string = '123';
  message!: string;
  protected readonly AuthService = AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.setMessage();
  }

  login() {
    this.authService.login(this.userLogin, this.userPassword);
    this.setMessage();
  }

  logout() {
    this.authService.logout();
  }

  private setMessage(msg: string = '') {
    if (msg) {
      this.message = msg;
      return;
    }

    this.message = `Logged ${AuthService.isLoggedIn ? 'in' : 'out'}`;
  }
}
