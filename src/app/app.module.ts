import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.quard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DashoboardComponent } from './dashoboard/dashoboard.component';
import { PopupModule } from 'ng2-opd-popup';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { IfrmaeComponent } from './ifrmae/ifrmae.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AgmCoreModule } from '@agm/core';
import { InternationalPhoneModule } from 'ng4-intl-phone';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashoboardComponent,
    ProfileComponent,
    NavComponent,
    ProfileviewComponent,
    IfrmaeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    MatButtonModule, MatCheckboxModule,
    PopupModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8j3GJ_ySn2k8BVrVJat2Gjtmy1G49sSQ'
    }),
    InternationalPhoneModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
