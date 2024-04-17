import { Component } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavService) {}

  gotoDashboard(){
    this.nav.push('tabs')
  }

}
