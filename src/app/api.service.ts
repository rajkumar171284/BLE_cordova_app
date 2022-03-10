import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment'
const option = {
  headers: new HttpHeaders()
}
const url = 'http://10.1.1.130:8081/mqtt'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  setLightControl(params): Observable<any> {
    return this.http.post(url + "/led_control", params, option).pipe(map((response: HttpResponse<any>) => {
      console.log(response)
      return response;
    }))
  }
}
