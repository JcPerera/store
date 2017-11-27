import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthUserService } from "./auth-user.service";

@Injectable()
export class ReservationService {

  Details = {
    mobile: "",
    email: "",
    name: "",
    username: "",
    date: "",
    time: "",
    count: "",
    today: ""
  };

  constructor(private auth: AuthUserService, private http: Http) { }

  updateReservation(item) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/reservations', item, { headers: headers })
      .map(res => res.json());
  }

  buildData(reservation) {
    let user = this.auth.loadUser();
    this.Details = JSON.parse(user);
    this.Details = {
      mobile: this.Details.mobile,
      email: this.Details.email,
      name: this.Details.name,
      username: this.Details.username,
      date: reservation.date,
      time: reservation.time,
      count: reservation.count,
      today: reservation.today
    }
    return this.Details;
  }

}
