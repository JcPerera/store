import { Component, OnInit } from '@angular/core';
import { AuthUserService } from "../../services/auth-user.service";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-online-orders',
  templateUrl: './online-orders.component.html',
  styleUrls: ['./online-orders.component.css']
})
export class OnlineOrdersComponent implements OnInit {
  category: any;
  products = [];
  filteredProducts = [];
  constructor(
    private route: ActivatedRoute,
    private auth: AuthUserService,
    private productService: ProductService) {
    this.loadProducts();
    this.productService.save();
  }

  addToCart(product) {
    let item = {
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: 1
    }
    this.productService.addProdToCart(item).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);

    });

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

  createOrGetCart() {

  }

  ngOnInit() {

  }


}
