import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'regalos',
    pathMatch: 'full',
  },
  {
    path: 'regalos',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'detalle',
    loadChildren: () =>
      import('./pages/detail/detail.module').then((m) => m.DetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
