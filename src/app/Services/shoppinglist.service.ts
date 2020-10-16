import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ShoppingList } from '../Model/shoppinglist.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  productsCollection: AngularFirestoreCollection<ShoppingList>;
  shoppingList: Observable<any[]>;

  constructor(public firestore: AngularFirestore) {
    this.shoppingList = this.firestore.collection('shoppingList').valueChanges();
    // this.shoppingList = this.firestore.collection('products').snapshotChanges().pipe(map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as ShoppingList;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   })
    // }))
   }

   getShoppingList() {
    return this.shoppingList;
  }

  deleteProduct(element) {
    console.log("Remove Button Worked");
    console.log(element);
    return this.firestore
      .collection("shoppinglist")
      .doc(element.payload.doc.id)
      .delete();
  }
}

