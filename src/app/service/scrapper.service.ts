import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";
import {environment} from '../../environments/environment';
import {ScrapperSearchRequest} from "../domain/scrapper-search-request.domain";
import {ScrapperSearchResponse} from "../domain/scrapper-search-response.domain";
import {ScrapperAddRequest} from "../domain/scrapper-add-request.domain";

@Injectable({
  providedIn: 'root'
})
export class ScrapperService {

  private JWT_KEY = "jwt";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    }),
  };

  constructor(private http: HttpClient) {

  }

  search(data: ScrapperSearchRequest) {
    const authorization = `Bearer ${localStorage.getItem(this.JWT_KEY)}`;
    this.httpOptions.headers = this.httpOptions.headers.set("Authorization", authorization);

    const url = `${environment.apiUrl}/scrapper/search`;
    return this.http
      .post<ScrapperSearchResponse>(url, JSON.stringify(data), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  add(data: ScrapperAddRequest) {
    const authorization = `Bearer ${localStorage.getItem(this.JWT_KEY)}`;
    this.httpOptions.headers = this.httpOptions.headers.set("Authorization", authorization);

    const url = `${environment.apiUrl}/scrapper/add`;
    return this.http
        .post(url, JSON.stringify(data), this.httpOptions)
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
