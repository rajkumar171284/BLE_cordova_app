import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
// import { Firestore, collectionData } from '@angular/fire/firestore';
// import { addDoc, collection } from '@firebase/firestore';
const option = {
  headers: new HttpHeaders()
}
const url = 'http://10.1.1.130:8081/mqtt'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
// /private firestore: Firestore
  constructor(private http: HttpClient) { }
  // getBLEList():Observable<any> {
  //   const ref = collection(this.firestore, 'blelist');
  //   return collectionData(ref) as Observable<any>;
  // }
  // addNewBLE(param:any){
  //   const ref = collection(this.firestore, 'blelist');
  //   return addDoc(ref,param);
  // }
  setLightControl(params): Observable<any> {
    return this.http.post(url + "/led_control", params, option).pipe(map((response: HttpResponse<any>) => {
      // console.log(response)
      return response;
    }))
  }
  getAllMAC(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/getAllMACdetails`,params, option).pipe(map(response => {
      return response;
    }))
  }
  addMACdetails(params: any): Observable<any> {
    return this.http.post(`${environment.url}/asset/addMACdata`,params, option).pipe(map(response => {
      return response;
    }))
  }
}
