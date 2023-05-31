import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {IUser, IUserEdit, IUserResponse} from "../types/user.type";
import {Nullable} from "../types/types.type";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>('https://reqres.in/api/users?page=2');
  }

  getUserInfo(id: Nullable<string | number>): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }

  editUser(id: Nullable<string | number>, body: Nullable<IUserEdit>): Observable<any> {
    return this.http.put(`https://reqres.in/api/users/${id}`, body);
  }

  deleteUser(id: Nullable<string | number>): Observable<boolean> {
    return this.http.delete(`https://reqres.in/api/users/${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
