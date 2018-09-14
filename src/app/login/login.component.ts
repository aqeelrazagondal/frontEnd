import { Register } from './../models/register';
import { Password } from './../models/password';
import { Globel } from './../globel';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Popup } from 'ng2-opd-popup';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('countrySelect') countrySelect;

  headers: HttpHeaders;
  login: Login;

  _id: string = '';
  password: string = '';
  email: string = '';
  address: string = '';
  name: string = '';
  f_name: string;
  l_name: string;
  phoneNumber;
  globel: Globel;
  rForm: FormGroup;
  regForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string = '';
  titleAlert: string = 'Email is required';
  passwordAlert: string = 'Password is required';
  phone_number: String;
  username: String;
  emailr: String;
  passwordr: String;
  country_code;
  apiresAlert;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private fb: FormBuilder,
    private popup:Popup,) {

    this.rForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'validate': ''
    });

    this.regForm = fb.group({
      'emailr': [null, Validators.required],
      'passwordr': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'username': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'phone_number': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'country_code': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15)])]

    });

  }
  ngAfterViewInit(){
    $.getScript('assets/js/custom.js');
  }
  
  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('email').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.rForm.get('email').setValidators(Validators.required);
        }
        this.rForm.get('email').updateValueAndValidity();
      }
    )
  }
  
 
  loginUser() {
    this.login = new Login();
    this.login.email = this.email;
    this.login.password = this.password;
    this._auth.loginUser(this.login)
      .subscribe(
        res => {
          console.log('Response Data', res);
          if (res.status === 'success') {
            console.log('Status is true');
            localStorage.setItem('x-auth-token', res.object.token)
            sessionStorage.setItem('_id', res.object._id);
            sessionStorage.setItem('email', res.object.email);
            sessionStorage.setItem('username', res.object.username);
            console.log('After Login Token ', res.object.token);
            this._router.navigate(['/dashboard']);
          }
        },
        err => console.log(err)
      )  
  }

  register(){
    let register = new Register();
    register.email = this.emailr;
    register.password = this.passwordr;
    register.phone_number = this.phone_number;
    register.username = this.username;
    console.log('This.register object ', register);
    this._auth.register(register)
      .subscribe(res => {
        console.log('Response from api', res.message);
        this.apiresAlert = res.message;
      }, err  => {
        console.log('Error from api ', err.error);
        this.apiresAlert = err.error;
      })
  }
  userDetail() {
    console.log('ADMIN ID', this._id);
  }

  popupShow(){
    this.popup1.show(this.popup.options);
  }

}