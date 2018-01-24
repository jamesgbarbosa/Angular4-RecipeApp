import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class AuthService {
  token;

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
      firebase.auth().signInWithEmailAndPassword(email,password).then( (tk)=> {
        this.token = tk;
        this.router.navigate(['/'], {relativeTo: this.route});
      }).catch( (error)=> {
        console.log("Failed to signin: " + error);
      })
  }

  signout() {
    firebase.auth().signOut();
  }

  isAuthenticated() {
    return this.token == null;
  }

}
