import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "products", component: ProductsPageComponent
  },
  {
    path: "create", component: FormPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
