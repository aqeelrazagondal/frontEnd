import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
  
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _registerUrl = "https://tt-webinar.com:3000/api/webinar/register";
  private getWebinarUrl = 'https://tt-webinar.com:3000/api/webinar/listOfWebinar';
  private deleteWebURL = 'https://tt-webinar.com:3000/api/webinar/getById/5b46f9dc3ac50b3438d79cf6';
  constructor(private http: HttpClient,
              private _router: Router
  ) { }
  
  
  registerWebinar(webinar) {
    const body = JSON.stringify(webinar);
    console.log ('in service Add webinar : ' + body);
    return this.http.post<any>(this._registerUrl, webinar);
  }



}
  