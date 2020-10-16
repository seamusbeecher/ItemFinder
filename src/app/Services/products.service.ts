import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../Model/product.model';
import { Observable } from 'rxjs/internal/Observable';
import * as faker from 'faker';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<any[]>;

  constructor(public firestore: AngularFirestore) { 
    this.products = this.firestore.collection('products').valueChanges();
    // this.products = this.firestore.collection('products').snapshotChanges().pipe(map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Product;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   })
    // }))
  }

  getProducts() {
    return this.products;
  }

  moveToOnline(element) {
    this.firestore.collection('onlinelist').doc(faker.random.alphaNumeric(16)).set(element);
  }

  moveToList(element) {
    this.firestore.collection('shoppinglist').doc(faker.random.alphaNumeric(16)).set(element);
  }

  // Database seeding
  addData() {
    const hacker = {
      name: faker.lorem.word(),
      location: faker.random.number({ min: 1, max: 20 }),
      availability: faker.random.number({ min: 1, max: 10}),
      link: faker.internet.url(),
      price: faker.finance.amount(),
      uid: faker.random.alphaNumeric(16)
    }
    this.firestore.collection('products').doc(hacker.uid).set(hacker)
  }

}
