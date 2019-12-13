import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productList;
  error;
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.getList();
  }



  getList() {
    this.productService.getProduct()
      .subscribe(
        (data) => { this.productList = data; }, // success path
        error => this.error = error // error path
      );
  }

}
