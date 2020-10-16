import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShoppinglistService } from '../Services/shoppinglist.service';
import { ShoppingList } from '../Model/shoppinglist.model';
import { Observable } from 'rxjs';
import * as faker from 'faker';
import { element } from 'protractor';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  gridShoppingList: ShoppingList[];

  constructor(private shoppingService: ShoppinglistService, public firestore: AngularFirestore) { }

  ngOnInit() {
    this.shoppingService.getShoppingList().subscribe(gridFinder => {
      console.log(gridFinder);
      this.gridShoppingList = gridFinder;
    });
  }

  firestoredisplayedColumns: string[] = ['name', 'availability', 'location', 'price', 'remove']
  firestoreDataSource = this.gridShoppingList;

  //database call
  remove = element => this.shoppingService.deleteProduct(element);

}