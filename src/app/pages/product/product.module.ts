import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ComponentsModule],
})
export class ProductModule {}
