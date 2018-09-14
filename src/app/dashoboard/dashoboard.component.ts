import { AuthService } from './../auth.service';
import { IfrmaeService } from './../ifrmae/ifrmae.service';
import { ProfileService } from './../profile/profile.service';
import { Webinar } from './../models/webinar';
import { DashboardService } from './dashboard.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Input, Output, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validator, Validators, FormBuilder } from '@angular/forms';

import { } from '@types/googlemaps';
import {Popup} from 'ng2-opd-popup';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-dashoboard',
  templateUrl: './dashoboard.component.html',
  styleUrls: ['./dashoboard.component.css']
})


export class DashoboardComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  adminID: string;
  email: string;
  name: string;
  address: string;
  f_name: string;
  l_name: string;
  webinars: string[];
  UTC: string[];
  webinarIDList: string[];
  web_name: string = '';
  web_date: string = '';
  web_day: string = '';
  web_start_time: string = '';
  web_description: string = '';
  web_utc: string = '';
  web_topic: string= ''; 
  upcomingWebinar = [];
  previousWebinar = [];
  
  newdate: Date;
  dt;
  webinar: Webinar;
  // webinarDetail: WebinarDetail
  webinarDetail = {}
  webinarObject: {};
  more;
  paragraph;
  btndelete;
  rForm: FormGroup;
  fnameAlert: string = 'First Name is required';
  isTracking: boolean;
  marker: any;



  constructor(
    private dashboardService:DashboardService,
    private _router: Router,
    private popup:Popup,
    private profileService:ProfileService,
    private ifrmaeService:IfrmaeService,
    private authService:AuthService
  ) { 
      if(this.token){
        _router.navigate(['/dashboard']);
      }
      this.findMe();
  }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    $.getScript('assets/js/custom.js');
  }
  
  get token() {
    return localStorage.getItem('x-auth-token');
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  showPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }
  showTrackingPosition(position) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  registerWebinar(){
    console.log('Webinar Method called....!!');

    let startTempTime= '2018-10-15T'+this.web_start_time+':00Z';
    this.webinar = new Webinar();
    this.webinar.web_day = this.web_day;
    console.log(this.webinar.web_date);
    this.webinar.web_date = new Date(this.web_date);
    this.webinar.web_description = this.web_description;
    this.webinar.web_name = this.web_name;
    this.webinar.web_start_time = startTempTime
    this.webinar.web_topic = this.web_topic;
    this.webinar.web_utc = this.web_utc;
    console.log('this.webinar ',this.webinar);
    // let newDate = this.date+'T23:00:00.000Z'
    this.dashboardService.registerWebinar(this.webinar)
    .subscribe(
      res => {
        console.log('Response Data from Register web....', res);  
        location.reload();      
       
      },
      err => console.log(err)
    )
    this._router.navigate(['/dashboard']);
    // location.reload();
  }


}
