import { ProfileComponent } from './profile/profile.component';
import { DashoboardComponent } from './dashoboard/dashoboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.quard';

const routes: Routes = [ 
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashoboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
 
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }