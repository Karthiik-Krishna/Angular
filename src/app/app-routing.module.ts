import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateComponent } from './update/update.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {path:'', redirectTo:'view', pathMatch:'full'},
  {path:'view', component:ViewProductsComponent},
  {path:'add', component: AddProductComponent, canActivate:[AuthGuard]},
  {path: 'view/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
