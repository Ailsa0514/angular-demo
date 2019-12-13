
    1   创建一个module  用来导入当前需要使用的组件
    2   创建一个路由的 module 用来写当前需要的路由，这个组件必须要在app.module.ts中使用生命的
#  ng generate module my-module --routing    


# 路由模块有一系列特性：
    把路由这个关注点从其它应用类关注点中分离出去。
    测试特性模块时，可以替换或移除路由模块。
    为路由服务提供商（包括守卫和解析器等）提供一个共同的地方。
    不要声明组件 
#  路由导入import { RouterModule, Routes } from '@angular/router';
# 设置子路由
    默认的path："" 为空
   要在父级组件中设置路由的出口
   带有id路由设置方式（detail/:id）
    获取id值  this.route.snapshot.paramMap.get('id')
# 使用方式：<a [routerLink]="['/product/detail', product.id]"></a>
   未带有明确的字段的参数的query 的方式不会显示在浏览器上面的