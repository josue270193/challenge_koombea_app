import {Component} from '@angular/core';
import {UserRegister} from "../../domain/user-register.domain";
import {UserSharedService} from "../../service/user-shared.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  hide = true;
  user = new UserRegister();

  constructor(private userSharedService: UserSharedService) {

  }

  onRegister() {
    this.userSharedService.onRegister(this.user);
  }
}
