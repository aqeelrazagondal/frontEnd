import { FormGroup, Validator, Validators, FormBuilder } from '@angular/forms';
import { Profile } from './../models/profile';
import { ProfileService } from './profile.service';
import { Router, NavigationEnd } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


declare var $: any;



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  headers: HttpHeaders;
  options: RequestOptions;
  profile: Profile;
  rForm: FormGroup;
  dateofbirth: Date;
  address: string;
  country: string = '';
  timezone: string = '';

  addressAlert: string = 'Address is required';
  dateOfBirthdayAlert: string = 'Date of birthday required';


  constructor(
    private profileService: ProfileService,
    private _router: Router,
    private fb: FormBuilder,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.profile = new Profile();
    this.profile._id = sessionStorage.getItem('adminID');
    console.log('adminID in profile', this.profile._id);

    this.rForm = fb.group({
      'dateOfBirth': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])]
    });
  }

  ngOnInit() {
  
  }

  ngAfterViewInit() {
    $.getScript('assets/js/custom.js', function () {
      console.log('ngAfterViewInit assets/js/custom.js File is loaded', $);
    });

  }

  

  changeProfile(user) {
    this.profile._id = sessionStorage.getItem('_id');
    this.profile.dateOfBirth = new Date();
    this.profile.address = this.address;
  
    console.log('this.profile ', this.profile);
    this.profileService.changeProfile(this.profile).subscribe(
      res => {
        console.log('Response from api', res);
        this._router.navigate(['/dashboard']);
      },
      err => console.log(err)
    )
  }
}
