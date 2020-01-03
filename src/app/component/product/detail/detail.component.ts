import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "src/app/service/product.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  productList;
  product;
  error;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {

    this.productService.getProduct()
    .subscribe(
      (data) => { this.productList = data; }, // success path
      error => this.error = error // error path
    );
  }

  ngOnInit() {
    //获取当前路由的id值
    console.log(this.route.snapshot.paramMap.get('id'));

    let _id = this.route.snapshot.paramMap.get('id');
    console.log( this.productList);
   
  }
}
