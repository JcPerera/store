import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/online-orders', { headers: headers })
      .map(res => res.json());
  }

}
