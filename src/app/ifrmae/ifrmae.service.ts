import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IfrmaeService {

  constructor(private _router: Router) { }

  onSubmit(){
    console.log('Iframe service method on submit...');
    return this._router.navigate(['/session']);
  }
}
