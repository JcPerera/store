import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  mytime: Date = new Date();
 
  bsValue: Date = new Date();
  bsRangeValue: any ;

  constructor() { 
  }


  ngOnInit() {

  }

 
}
