import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

 cart=[];

  constructor(private productService: ProductService) {
    this.AddcartToArray();
   }

  ngOnInit() {
  }

  AddcartToArray() {
    this.productService.getCartProducts().subscribe(cart => {
      if (cart[0]) {
        this.cart=cart[0].cart.products;
        console.log(this.cart);
      } else {
      }
    }, err => {
      console.log(err);
    });
  }


}
