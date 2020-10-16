import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { OnlinelistService } from '../Services/onlinelist.service';
import { OnlineList } from '../Model/onlinelist.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-online',
  templateUrl: './grid-online.component.html',
  styleUrls: ['./grid-online.component.css']
})
export class GridOnlineComponent implements OnInit {

  gridOnline: OnlineList[];

  constructor(private onlineService: OnlinelistService) { }

  ngOnInit() {
    this.onlineService.getOnlineList().subscribe(gridFinder => {
      console.log(gridFinder);
      this.gridOnline = gridFinder;
    });
  }
  firestoredisplayedColumns: string[] = ['name', 'price', 'link', 'remove']
  firestoreDataSource = this.gridOnline;

  //database call
  remove = element => this.onlineService.deleteProduct(element);

}