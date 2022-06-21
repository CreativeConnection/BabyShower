import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TapComponent } from './tap/tap.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CardComponent, TapComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [CardComponent, TapComponent, HeaderComponent],
})
export class ComponentsModule {}
