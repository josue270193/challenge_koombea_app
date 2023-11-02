import {Component} from '@angular/core';
import {UserService} from "./service/user.service";
import {UserLogin} from "./domain/user-login.domain";
import {UserLoginResponse} from "./domain/user-login-response.domain";
import {UserSharedService} from "./service/user-shared.service";
import {UserRegister} from "./domain/user-register.domain";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  JWT_KEY = "jwt";

  constructor(private userService: UserService,
              private userSharedService: UserSharedService,
              private router: Router
  ) {
    this.userSharedService.onLoginEmit.subscribe(data => this.onLogin(data));
    this.userSharedService.onRegisterEmit.subscribe(data => this.onRegister(data));
  }

  onLogin(data: UserLogin) {
    this.userService.login(data)
      .subscribe((data: UserLoginResponse) => {
        localStorage.setItem(this.JWT_KEY, data.jwt ?? '' );
        this.router.navigate(["/scrapper"])
      });
  }

  onRegister(data: UserRegister) {
    this.userService.register(data)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
