import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'assets/data/product.json'
  constructor(
    private http: HttpClient
  ) { }

  getProduct() {
    return this.http.get(this.url);
  }

  // getProductId() {
  //   this.http.get(this.url);
  // }
}
