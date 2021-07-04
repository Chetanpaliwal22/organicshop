import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  providers: [AngularFireAuth]
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
   }

  ngOnInit(): void {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
