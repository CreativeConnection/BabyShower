import { Component } from '@angular/core';
import * as constans from './constants/product.constans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'babyShower';
  products = [...constans.products.filter((p) => !p.buyer)];
  taps = [
    {
      title: 'Dsiponible',
      active: true,
    },
    {
      title: 'Elejido',
      active: false,
    },
    {
      title: 'Comprado',
      active: false,
    },
  ];
  handleTap(index: number) {
    this.taps = this.taps.map((tap, indexTap) => {
      return {
        title: tap.title,
        active: index == indexTap,
      };
    });
    if (index === 0) {
      this.products = [
        ...constans.products.filter((p) => !p.buyer && !p.purchased),
      ];
    } else if (index == 1) {
      this.products = [
        ...constans.products.filter((p) => p.buyer && !p.purchased),
      ];
    } else {
      this.products = [
        ...constans.products.filter((p) => p.buyer && p.purchased),
      ];
    }
  }
}
