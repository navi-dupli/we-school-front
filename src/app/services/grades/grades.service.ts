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

  getGrade(id: string) {
    return this.http
      .get(this.apiURL + `/get-grade/${id}`);
  }

  saveGrade(data: any) {
    return this.http
      .post(this.apiURL + '/createGrade', data);
  }

  updateGrade(data: any, id: string) {
    return this.http
      .post(this.apiURL + `/modifyGrade/${id}`, data);
  }

  deleteGrade(id: string) {
    return this.http
      .get(this.apiURL + `/destroyGrade/${id}`);
  }
}
