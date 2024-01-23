import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stdm',
  templateUrl: './stdm.component.html',
  styleUrls: ['../projects.css']
})
export class StdmComponent {
  constructor(private router: Router) { }

  videoLoaded: boolean = false;
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
