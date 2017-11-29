import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AuthUserService } from "./services/auth-user.service";
import { AuthguardsService } from "./services/authguards.service";
import { ProductService } from "./services/product.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OnlineOrdersComponent } from './components/online-orders/online-orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { ReservationService } from "./services/reservation.service";
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';




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
    ProfileComponent,
    ShoppingCartComponent,
    ShippingFormComponent,
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
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login/register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'reservations',
        component: ReservationComponent,
        canActivate: [AuthguardsService]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthguardsService]
      },
      {
        path: 'online-orders',
        component: OnlineOrdersComponent,
        canActivate: [AuthguardsService]
      },
      {
        path: 'shopping-cart/shipping',
        component: ShippingFormComponent,
        canActivate: [AuthguardsService]
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
        canActivate: [AuthguardsService]
      }
    ]),
  ],
  providers: [
    AuthUserService, 
    AuthguardsService, 
    ProductService,
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
