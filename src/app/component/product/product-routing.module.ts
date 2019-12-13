import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
// 设置的是当前的商品组件中需要路由
const routes: Routes = [
    {
        path: 'product',
        component: ProductComponent,

        children: [
            { path: '', component: ListComponent },
            { path: 'detail/:id', component: DetailComponent },
        ],
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }
