import { AuthService } from './../auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  email: string;
  name: string;
  address: string;
  f_name: string;
  l_name: string;
  constructor(private _router: Router,
    private authservice: AuthService,
    private spinnerService: Ng4LoadingSpinnerService) {

  }

  ngOnInit() {
  }
 
  ngAfterViewInit() {
    $.getScript('assets/js/custom.js');
  }

  dashboard(){
    console.log('Click on Home button');
    this._router.navigate(['/dashboard']);
    location.reload();
  }
  logout() {
    console.log('Logout user called...!!!');
    this.authservice.logoutUser();
  }

}
