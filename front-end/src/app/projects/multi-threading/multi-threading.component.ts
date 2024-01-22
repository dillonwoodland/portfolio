import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-threading',
  templateUrl: './multi-threading.component.html',
  styleUrls: ['../projects.css']
})
export class MultiThreadingComponent {
  constructor(private router: Router) { }
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
