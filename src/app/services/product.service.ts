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

  gerCart() {
    this.user = JSON.parse(this.auth.loadUser());
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:8080/cart', this.user, { headers: headers })
      .map(res => res.json());
  }

  save(){
    this.gerCart().subscribe(data=>{
      if(data){
        console.log(data)
      this.storeCart(data._id);
      }
    },err=>{
      console.log(err);
    })
  }

  storeCart(cartId){
    localStorage.setItem('cart_id', cartId);
    this.cartId =cartId;
  }
}
