import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['../projects.css']
})
export class MobileComponent {
  constructor(private router: Router) { }
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
