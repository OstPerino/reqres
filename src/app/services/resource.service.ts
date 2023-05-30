import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IResourceResponse} from "../types/resource.type";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IResourceResponse> {
    return this.http.get<IResourceResponse>('https://reqres.in/api/unknown')
  }
}
