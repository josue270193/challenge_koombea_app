import {UserLogin} from "./user-login.domain";

export class UserRegister extends UserLogin {

  name: string | null;
  lastname: string | null;

  constructor() {
    super();
    this.name = null;
    this.lastname = null;
  }

}
