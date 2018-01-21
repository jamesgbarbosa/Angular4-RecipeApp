import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDrdL42QtYTqX1YlTcI4WKbkVfNRqurAcM',
      authDomain: 'recipe-app-30cd6.firebaseapp.com'
    });
  }
}
