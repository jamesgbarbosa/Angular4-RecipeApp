import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AuthService {
  token: String

  constructor(private route: ActivatedRoute, private router: Router) { }

  signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email,password).then( ()=> {
      console.log("Successfully created account");
      this.router.navigate(['/'], {relativeTo: this.route})
    }).catch( (error)=> {
      console.log("Failed to create account: " + error);
    })
  }

  signin(email, password) {
      firebase.auth().signInWithEmailAndPassword(email,password).then( (reponse)=> {
        firebase.auth().currentUser.getToken().then( (tk) => {
          this.token = tk;
        });
        this.router.navigate(['/'], {relativeTo: this.route});
      }).catch( (error)=> {
        console.log("Failed to signin: " + error);
      })
  }

  signout() {
    this.token = null;
    firebase.auth().signOut();
  }

  isAuthenticated() {
    return this.token != null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (tk) => { this.token = tk;});
    return this.token;
  }

}
