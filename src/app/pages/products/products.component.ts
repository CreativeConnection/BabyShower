import { Component, OnInit } from '@angular/core';
import * as constans from '../../constants/product.constans';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [...constans.products.filter((p) => !p.buyer)];
  taps = [
    {
      title: 'Disponible',
      active: true,
    },
    {
      title: 'Apartado',
      active: false,
    },
    {
      title: 'Comprado',
      active: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
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
