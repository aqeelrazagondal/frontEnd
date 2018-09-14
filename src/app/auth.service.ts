import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "https://backendrockvillie.herokuapp.com/api/";
  httpOptions;
  options: RequestOptions;
  headers: any;
 
  constructor(private http: HttpClient,
    private _router: Router) {
    
  }
  loginUser(user) {
    return this.http.post<any>(this.baseUrl+'auth', user)
  }
  logoutUser() {
    localStorage.removeItem('x-auth-token');
    console.log('Logging out from application');
    this._router.navigate(['/']);
  }
  register(user){
    return this.http.post<any>(this.baseUrl+'users/register', user)
  }
  getToken() {
    return localStorage.getItem('x-auth-token')
  }
  loggedIn() {
    return !!localStorage.getItem('x-auth-token')
  }
}
