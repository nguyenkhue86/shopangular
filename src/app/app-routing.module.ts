import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule),
    data: {
      moduleName: 'TRANG CHỦ',
      link: '/'
    }
  },
  {
    path: 'products',
    loadChildren: () => import('./component/products/products.module').then(m => m.ProductsModule),
    data: {
      moduleName: 'SẢN PHẨM',
      link: '/products'
    }
  },
  {
    path: 'cart',
    loadChildren: () => import('./component/cart/cart.module').then(m => m.CartModule),
    data: {
      moduleName: 'GIỎ HÀNG',
      link: '/cart'
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('./component/contact/contact.module').then(m => m.ContactModule),
    data: {
      moduleName: 'LIÊN HỆ',
      link: '/contact'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
