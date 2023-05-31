// TODO: Auth service here

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  authorize(body: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', body);
  }

  registration(body: any): Observable<any> {
    return this.http.post('https://reqres.in/api/register', body);
  }
}
