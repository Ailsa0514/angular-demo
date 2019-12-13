import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';

// 这里要将所有使用的模块声明，就不用再根组件中再次声明了

@NgModule({
  declarations: [ListComponent, DetailComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
})
export class ProductModule { }
