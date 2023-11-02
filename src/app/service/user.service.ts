import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";
import {UserLogin} from "../domain/user-login.domain";
import {environment} from '../../environments/environment';
import {UserLoginResponse} from "../domain/user-login-response.domain";
import {UserRegister} from "../domain/user-register.domain";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {

  }

  login(data: UserLogin) {
    const url = `${environment.apiUrl}/user/login`;
    return this.http
      .post<UserLoginResponse>(url, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  register(data: UserRegister) {
    const url = `${environment.apiUrl}/user/register`;
    return this.http
      .post<UserLoginResponse>(url, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
