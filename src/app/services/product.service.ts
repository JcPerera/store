import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthUserService } from "./auth-user.service";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  user = {};
  cartId;
  constructor(private http: Http, private auth: AuthUserService) {
    this.cartId = this.auth.loadCartId();
    this.user = JSON.parse(this.auth.loadUser());
   }

  getProducts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/online-orders', { headers: headers })
      .map(res => res.json());
  }

  getCartProducts() {
    let headers = new Headers();
    return this.http.get('http://localhost:8080/cart/' + this.cartId, { headers: headers })
      .map(res => res.json());
  }

  addProdToCart(item) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/cart/' + this.cartId, item, { headers: headers })
      .map(res => res.json());
  }

  updateItemQuantity(item) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/cart/update/' + this.cartId, item, { headers: headers })
      .map(res => res.json());
  }

  removeItem(item){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/cart/remove/' + this.cartId, item, { headers: headers })
      .map(res => res.json());
  }
  

  

  

}
