import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  getDoc,
  updateDoc,
  doc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  item$: Observable<any>;
  colRef: any;

  constructor(firestore: Firestore) {
    this.colRef = collection(firestore, 'regalos');
  }

  getProduct(): Observable<any> {
    return (this.item$ = collectionData(this.colRef));
  }
  updateProduct(uuid: string, data: any) {
    const docRef = doc(this.colRef, uuid);
    updateDoc(docRef,{...data})
  }
}
