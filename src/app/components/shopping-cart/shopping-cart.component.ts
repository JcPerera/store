import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart = [{
    quantity: 0,
    price: 0
  }];
  count;
  tPrice;

  constructor(private productService: ProductService) {
    this.AddcartToArray();

  }

  ngOnInit() {
  }

  AddcartToArray() {
    this.productService.getCartProducts().subscribe(cart => {
      if (cart[0]) {
        this.cart = cart[0].cart.products;
        console.log(this.cart);
        this.calculateCount();
      } else {
      }
    }, err => {
      console.log(err);
    });
  }

  calculateCount() {
    this.tPrice = 0;
    this.count = 0;
    let i = 0;
    for (i = 0; i < this.cart.length; i++) {
      this.count = this.count + this.cart[i].quantity;
      this.tPrice = this.tPrice + (this.cart[i].quantity * this.cart[i].price)
    }
  }

  addItem(item){
    item.quantity +=1;
    this.productService.updateItemQuantity(item).subscribe(x=>{
      this.AddcartToArray();
    })
  }

  removeItem(item){
    if (item.quantity==1){
      this.productService.removeItem(item).subscribe(x=>{
        this.AddcartToArray();
      })
    }else{
      item.quantity -=1;
      this.productService.updateItemQuantity(item).subscribe(x=>{
        this.AddcartToArray();
      })
    }
  }

}
