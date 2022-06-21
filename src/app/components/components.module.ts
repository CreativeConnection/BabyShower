import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TapComponent } from './tap/tap.component';

@NgModule({
  declarations: [CardComponent, TapComponent],
  imports: [CommonModule],
  exports: [CardComponent, TapComponent],
})
export class ComponentsModule {}
