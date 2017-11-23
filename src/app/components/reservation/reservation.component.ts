import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  mytime: Date = new Date();

  bsValue: Date = new Date();
  bsRangeValue: any;
  count: any;

  colorTheme = 'theme-red';
  
   bsConfig: Partial<BsDatepickerConfig>;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 30);
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
  }


  ngOnInit() {

  }


}
