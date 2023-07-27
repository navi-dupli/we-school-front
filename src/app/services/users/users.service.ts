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

  createUser(body: any) {
    return this.http
        .post<any>(this.apiURL + '/createUser', body)
  }

  getUser(userId: string) {
    return this.http
        .get<any>(this.apiURL + `/get-user/${userId}`)
  }

  updateUser(body: any, userId: string) {
    return this.http
        .post<any>(this.apiURL + `/modifyUser/${userId}`, body)
  }

  deleteUser(userId: string) {
    console.log('aaaa', userId)
    return this.http
        .get<any>(this.apiURL + `/destroyUser/${userId}`)
  }
}
