import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email: String;
  password: String;

  constructor(public auth: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  signInUser() {
    this.auth.signIn(this.email, this.password);
  }

}
