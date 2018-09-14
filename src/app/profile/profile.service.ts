import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  headers: HttpHeaders;
  options: RequestOptions;

  private changeProfileURL = "https://backendrockvillie.herokuapp.com/api/users/profile";

  constructor(private http: HttpClient,
    private _router: Router) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
    // this.options = new RequestOptions({ headers: this.headers });
  }

  changeProfile(user) {
    return this.http.post<any>(this.changeProfileURL, user);
  }
  settings() {
    return this._router.navigate(['/settings']);
  }
}
