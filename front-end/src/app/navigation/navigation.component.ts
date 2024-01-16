import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router: Router) { }

  homeClicked() {
    this.router.navigate(['/']);
  }

  projectsClicked() {
    this.router.navigate(['Projects']);
  }
  contactClicked() {
    this.router.navigate(['Contact']);
  }
  aboutClicked() {
    this.router.navigate(['About']);
  }
}
