import { IProduct } from '../models/product.interface';

export const products: IProduct[] = [
  {
    title: 'Cambiador bebe',
    image: 'https://alapalma.com/wp-content/uploads/412Y-PxjUlL._SS500_.jpg',
    buyer: 'Davixon',
    purchased: false,
  },
  {
    title: 'Corral',
    image:
      'https://cdn.shopify.com/s/files/1/1886/9469/products/Untitleddesign-2021-07-03T160358.265.png?v=1630935982',
    buyer: 'Nonita Belsy',
    purchased: true,
  },
  {
    title: 'Jefe',
    image:
      'https://i2.wp.com/www.senpai.com.mx/wp-content/uploads/2021/11/Halo-Quien-es-el-Jefe-Maestro-compressed.jpg?w=1280&ssl=1',
    purchased: false,
  },
];
