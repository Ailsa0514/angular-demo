import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "./component/cart/cart.component";

// 这里需要设置的是跟路由   默认指定的是：product这个组件

const routes: Routes = [
  { path: "cart", component: CartComponent },
  { path: "", redirectTo: "/product", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
