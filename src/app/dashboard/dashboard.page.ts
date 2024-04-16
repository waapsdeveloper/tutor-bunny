import { Component } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {

  constructor(private nav: NavService) {}

  gotoDashboard(){
    this.nav.push
  }

}
