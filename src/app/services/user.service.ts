import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserResponse} from "../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>('https://reqres.in/api/users?page=2');
  }
}
