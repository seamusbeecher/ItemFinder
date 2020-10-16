import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { OnlineList } from '../Model/onlinelist.model';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlinelistService {

  productsCollection: AngularFirestoreCollection<OnlineList>;
  onlineList: Observable<any[]>;

  constructor(public firestore: AngularFirestore) { 
    this.onlineList = this.firestore.collection('onlinelist').valueChanges();
    // this.onlineList = this.firestore.collection('products').snapshotChanges().pipe(map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as OnlineList;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   })
    // }))
  }

  getOnlineList() {
    return this.onlineList;
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
