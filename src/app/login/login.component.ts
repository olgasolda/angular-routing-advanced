import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
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
    public authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.setMessage();
  }

  login() {
    this.setMessage('Trying to log in...');
    this.authService.login(this.userLogin, this.userPassword)
      .subscribe((res: any) => {
        console.log(`Login observable result ${res}`);
        this.setMessage();
        this.router.navigate([this.authService.redirectUrl || '/home']).catch(console.log);
      });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage(msg: string = '') {
    if (msg) {
      this.message = msg;
      return;
    }

    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }
}
