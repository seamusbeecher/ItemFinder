import { Injectable } from '@angular/core';
import {  AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { 
    this.userData = afAuth.authState;

    }

    register (email, password) {
      this.afAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          this.router.navigate(['finder']);
          console.log('You are Successfully signed up!', res);
        })
        .catch(error => {
          console.log('Something is wrong:', error.message);
        });
    }

    signOut() {
      this.afAuth.auth.signOut();
    }

    signIn(email, password) {
      this.afAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          this.router.navigate(['grid']);
          console.log('You are Successfully logged in!');
        })
        .catch(err => {
          console.log('Something is wrong:',err.message);
        });
    }

}
