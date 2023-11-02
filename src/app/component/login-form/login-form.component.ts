import {Component} from '@angular/core';
import {UserLogin} from "../../domain/user-login.domain";
import {UserSharedService} from "../../service/user-shared.service";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  hide = true;
  user = new UserLogin();

  constructor(private userSharedService: UserSharedService) {

  }

  onLogin() {
    this.userSharedService.onLogin(this.user);
  }
}
