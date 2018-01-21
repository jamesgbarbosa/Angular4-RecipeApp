import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).then( () => {
      console.log('Account creation success');
      this.router.navigate(['/'], {relativeTo: this.route});
    }).catch((err) => {
      console.log('Sign up failed with reason: ' + err);
    });
  }

}
