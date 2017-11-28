import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthUserService } from "./auth-user.service";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  user = {};
  cartId;
  constructor(private http: Http, private auth: AuthUserService) { }

  getProducts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/online-orders', { headers: headers })
      .map(res => res.json());
  }

  getCartId() {
    this.user = JSON.parse(this.auth.loadUser());
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/cart', this.user, { headers: headers })
      .map(res => res.json());
  }

  getCartProducts() {
    this.user = JSON.parse(this.auth.loadUser());
    let headers = new Headers();
    return this.http.get('http://localhost:8080/cart/' + this.cartId, { headers: headers })
      .map(res => res.json());
  }

  addProdToCart(item) {
    this.user = JSON.parse(this.auth.loadUser());
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/cart/' + this.cartId, item, { headers: headers })
      .map(res => res.json());
  }

  UpdateFullCart(item) {
    this.user = JSON.parse(this.auth.loadUser());
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/cart/' + this.cartId, item, { headers: headers })
      .map(res => res.json());
  }

  saveCartId() {
    this.getCartId().subscribe(data => {
      if (data) {
        this.storeCart(data._id);
      }
    }, err => {
      console.log(err);
    })
  }

  storeCart(cartId) {
    localStorage.setItem('cart_id', cartId);
    this.cartId = cartId;
  }

  

}
