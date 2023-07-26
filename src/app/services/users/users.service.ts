import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Define API
  apiURL = environment.url;
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http
      .get<any>(this.apiURL + '/users')
  }
}
