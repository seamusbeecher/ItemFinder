import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from '../Services/products.service';
import { Product } from '../Model/product.model';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import * as faker from 'faker';

@Component({
  selector: 'app-grid-finder',
  templateUrl: './grid-finder.component.html',
  styleUrls: ['./grid-finder.component.css']
})
export class GridFinderComponent implements OnInit {
  
  gridFinder: Product[];

  firestoredisplayedColumns: string[] = ['name', 'price', 'pay', 'list']
  firestoreDataSource: any;
  

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private productService: ProductsService, public firestore: AngularFirestore) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(gridFinder => {
      console.log(gridFinder);
      this.gridFinder = gridFinder;
    });
  }

  //does not work
  applyFilter(filterValue: String) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.firestoreDataSource.filter = filterValue;
  }
  
  //database call
  onlineClick = element => this.productService.moveToOnline(element);

  //database call
  listClick = element => this.productService.moveToList(element);

  //database call
  addOne = element => this.productService.addData();

}
