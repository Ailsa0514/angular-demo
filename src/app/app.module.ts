import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// 引入路由模块
import { AppRoutingModule } from './app-routing.module';

// 引入使用到的组件
import { AppComponent } from './app.component';

// 商品子组件 包含列表和详情
import { ProductModule } from './component/product/product.module';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
