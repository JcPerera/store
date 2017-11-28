import { Component, OnInit } from '@angular/core';
import { AuthUserService } from "../../services/auth-user.service";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/switchMap';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-online-orders',
  templateUrl: './online-orders.component.html',
  styleUrls: ['./online-orders.component.css']
})
export class OnlineOrdersComponent implements OnInit {
  category: any;
  products = [];
  filteredProducts = [];
  Newcart = {
    mobile:"",
    username:"",
    cart: {
      products: [{
        name: ""
      }]
    }

  }
  alerts = [];
  constructor(
    private route: ActivatedRoute,
    private auth: AuthUserService,
    private productService: ProductService) {
    this.loadProducts();
    this.productService.saveCartId();
    this.cartArray();
  }


  addToCart(product) {
    console.log(this.Newcart);
    if (this.Newcart.mobile == "") {
      console.log("ok working");
      this.cartArray();
      this.alerts.push({
        type: 'danger',
        msg: "Ops !! Somthing went wrong Please try Again",
        timeout: 2000
      });
    } else {
      console.log(this.Newcart);
      let item = {
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: 1
      }
      let index = this.Newcart.cart.products.findIndex(c => c.name === product.name)
      if (index === -1) {
        this.Newcart.cart.products.push(item);
        this.addNewItemsToDb(item);
      } else {
        this.addExcistingItemsToDb(this.Newcart.cart.products);
      }

    }
  }

  cartArray() {
    this.productService.getCartProducts().subscribe(cart => {
      if (cart[0]) {
        this.Newcart = cart[0];
      } else {
      }
    }, err => {
      console.log(err);
    });
  }


  addExcistingItemsToDb(item) {
    console.log(item);
    this.alerts.push({
      type: 'warning',
      msg: "Item Already In the Shopping Cart",
      timeout: 2000
    });
  }

  addNewItemsToDb(item) {
    this.productService.addProdToCart(item).subscribe(res => {
      console.log(res);
      this.alerts.push({
        type: 'success',
        msg: "Item Added to the Shopping Cart",
        timeout: 2000
      });
    }, err => {
      console.log(err);
    })
  }

  loadProducts() {
    this.productService.getProducts().switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })
      .subscribe(params => {
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) :
          this.products;
      });
  }

  GetCart() {

  }

  ngOnInit() {

  }


}
