import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ComponentsModule, ProductsRoutingModule],
})
export class ProductsModule {}
