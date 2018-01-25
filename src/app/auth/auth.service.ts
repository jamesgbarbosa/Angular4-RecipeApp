import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: String;

  constructor(private route: ActivatedRoute, private router: Router) { }

  signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then( () => {
      console.log('Successfully created account');
      this.router.navigate(['/'], {relativeTo: this.route});
    }).catch( (error) => {
      console.log(`Failed to create account: ${error}`);
    });
  }

  signin(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).then( (reponse) => {
        firebase.auth().currentUser.getIdToken().then( (tk) => {
          this.token = tk;
        });
        this.router.navigate(['/'], {relativeTo: this.route});
      }).catch( (error) => {
        console.log('Failed to sign in: ' + error);
      });
  }

  signout() {
    this.token = null;
    firebase.auth().signOut();
    this.router.navigate(['/signin'], {relativeTo: this.route});
  }

  isAuthenticated() {
    if (this.getUserDataFromToken()) {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken();
  }

  getUserDataFromToken() {
    const userKey = Object.keys(window.localStorage)
      .filter(it => it.startsWith('firebase:authUser'))[0];
    const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
    return user;
  }

}
