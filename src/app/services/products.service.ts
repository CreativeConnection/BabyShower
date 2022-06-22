import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  item$: Observable<any>;

  constructor(firestore: Firestore) {
    const response = collection(firestore, 'regalos');
    this.item$ = collectionData(response);
  }

  updateProduct() {
  }
}
