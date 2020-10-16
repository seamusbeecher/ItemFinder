import { Component, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  EventEmitter } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthServiceService, private router: Router) { }

  onClickSignIn() {
    this.router.navigate(['sign-in']);
  }

  onClickSignOut() {
    this.router.navigate(['finder']);
    this.auth
        .signOut();
  }

  ngOnInit() {
  }

}
