import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthUserService } from "./services/auth-user.service";
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap/alert';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OnlineOrdersComponent } from './components/online-orders/online-orders.component';
import { InformationComponent } from './components/information/information.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SlideShowComponent,
    ReservationComponent,
    LoginComponent,
    RegisterComponent,
    OnlineOrdersComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,   
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgbModule.forRoot(),
    TimepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'reservations', component: ReservationComponent },
      { path: 'login/register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'online-orders', component: OnlineOrdersComponent }
    ]),
  ],
  providers: [AuthUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
