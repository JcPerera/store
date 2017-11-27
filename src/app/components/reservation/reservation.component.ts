import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Data } from '@angular/router/src/config';
import { ReservationService } from "../../services/reservation.service";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  mytime: Data;
  bsConfig: Partial<BsDatepickerConfig>;
  colorTheme = 'theme-red';
  count;
  date: Date;
  today = new Date().toDateString();
  alerts: any = [];

  reservation = {};
  updated ={};

  constructor(private resService: ReservationService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 30);
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }


  ngOnInit() {
  }

  addReservation() {
    if (this.mytime == null) {
      this.alerts.push({
        type: 'danger',
        msg: `Please Enter a Valid Time`,
        timeout: 3000
      });
    } else if (this.date == null) {
      this.alerts.push({
        type: 'danger',
        msg: `Please Enter a Valid Date`,
        timeout: 3000
      });
    }
    else if (this.count <= 0) {
      this.alerts.push({
        type: 'danger',
        msg: `Please Enter a Valid Guest Count`,
        timeout: 3000
      });
    }
    else {
      this.reservation = {
        date: this.date.toDateString(),
        time: this.mytime.toTimeString(),
        count: this.count,
        today: this.today
      }
      this.updated = this.resService.buildData(this.reservation);
      this.resService.updateReservation(this.updated).subscribe(res=>{
        this.alerts.push({
          type: 'success',
          msg: res.msg,
          timeout: 3000
        });
        console.log(res);
      })
    }
  }


}
