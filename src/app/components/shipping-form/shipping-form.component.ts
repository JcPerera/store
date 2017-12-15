import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../services/order.service";

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  shipping ={}
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  placeOrder(){
    this.orderService.address=this.shipping;
    this.orderService.print();
  }

}
