import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toy-operating-system',
  templateUrl: './toy-operating-system.component.html',
  styleUrls: ['../projects.css']
})
export class ToyOperatingSystemComponent {
  constructor(private router: Router) { }
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
