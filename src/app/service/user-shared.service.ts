import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {

  private onLoginSource = new Subject<any>();
  onLoginEmit = this.onLoginSource.asObservable();

  private onRegisterSource = new Subject<any>();
  onRegisterEmit = this.onRegisterSource.asObservable();

  onLogin(change: any) {
    this.onLoginSource.next(change);
  }

  onRegister(change: any) {
    this.onRegisterSource.next(change);
  }
}
