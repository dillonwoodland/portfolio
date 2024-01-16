import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router: Router) { }

  activeNavItem: string = 'home';

  homeClicked() {
    this.activeNavItem = 'home';
    this.router.navigate(['/']);
  }

  projectsClicked() {
    this.activeNavItem = 'projects';
    this.router.navigate(['Projects']);
  }
  contactClicked() {
    this.activeNavItem = 'contact';
    this.router.navigate(['Contact']);
  }
  aboutClicked() {
    this.activeNavItem = 'about';
    this.router.navigate(['About']);
  }
}
