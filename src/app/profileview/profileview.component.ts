import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {
  adminID;
  email;
  name;
  f_name;
  l_name;
  address;

  constructor() { }

  ngOnInit() {
    this.profileView();
  }

  ngAfterViewInit(){
    $.getScript('assets/js/custom.js');
  }
  profileView(){
    this.email = sessionStorage.getItem('email');
    this.name = sessionStorage.getItem('name');
    this.address = sessionStorage.getItem('address');  
    this.f_name = sessionStorage.getItem('f_name');
    this.l_name = sessionStorage.getItem('l_name');
  }
}
