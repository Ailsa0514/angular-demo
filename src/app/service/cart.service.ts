import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class CartService {

  constructor() { }

  get(){
    console.log("购物车服务");
  }
}
