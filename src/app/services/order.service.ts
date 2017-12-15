import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  address = {};
  cart={};
  constructor() { }

  print(){
    console.log(this.address, this.cart);
  }
}
