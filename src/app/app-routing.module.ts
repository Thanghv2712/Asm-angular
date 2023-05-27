import { BaseLayoutComponent } from './Layouts/base-layout/base-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
    {
      path : "" , component : BaseLayoutComponent , children:[
        {path : "" , component : ProductListComponent},
        {path : "about" , component : AboutPageComponent},
        {path : "product/:id" , component : ProductDetailComponent}
      ]
    },

    { path : "admin" , component : AdminLayoutComponent , children:[
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
			{path :"dashboard" , component : DashboardComponent},
            {path :"product/add" , component : ProductAddComponent},
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
