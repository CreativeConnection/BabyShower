import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TapComponent } from './tap/tap.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    CardComponent,
    TapComponent,
    HeaderComponent,
    ProductDetailComponent,
    FormComponent,
  ],
  imports: [CommonModule],
  exports: [CardComponent, TapComponent, HeaderComponent, FormComponent],
})
export class ComponentsModule {}
