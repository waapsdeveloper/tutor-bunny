import { Component } from '@angular/core';
import { NavService } from '../services/nav.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavService,
    public authService: AuthenticationService
  ) {}

  gotoDashboard(){
    this.nav.push('tabs')
  }
  continueWithGoogle(){
    this.authService.GoogleAuth()
  }


}
