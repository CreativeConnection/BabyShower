import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import * as constans from '../../constants/product.constans';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProducts: any = [];
  products: any = [];
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

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.item$.subscribe((data) => {
      this.allProducts = [...data];
      this.handleTap(0);
    });
  }
  handleTap(index: number) {
    console.log("this.allProducts ", this.allProducts );
    
    this.taps = this.taps.map((tap, indexTap) => {
      return {
        title: tap.title,
        active: index == indexTap,
      };
    });
    if (index === 0) {
      this.products = [
        ...this.allProducts.filter((p:any) => !p.buyer && !p.purchased),
      ];
    } else if (index == 1) {
      this.products = [
        ...this.allProducts.filter((p:any) => p.buyer && !p.purchased),
      ];
    } else {
      this.products = [
        ...this.allProducts.filter((p:any) => p.buyer && p.purchased),
      ];
    }
  }

  onGif(uid: string) {
    console.log("uid", uid);
    
  }
}
