import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  // Define API
  apiURL = environment.url;
  constructor(private http: HttpClient) { }
  getDegrees() {
    return this.http
      .get<any>(this.apiURL + '/grades')
  }
}
