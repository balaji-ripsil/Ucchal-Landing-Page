import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {Registration} from './video/registration.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  customerServiceUrl: string = AppSetting.customerServiceUrl;
  constructor(private httpClient: HttpClient) { }

 submit(cart): Observable<Registration> {
    const registrationUrl = 'customerregister/';
    const url: string = this.customerServiceUrl + registrationUrl;
    return this.httpClient.post<Registration>(url, cart);
  }
}
