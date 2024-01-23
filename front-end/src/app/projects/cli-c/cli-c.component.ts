import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cli-c',
  templateUrl: './cli-c.component.html',
  styleUrls: ['../projects.css']
})
export class CliCComponent {
  constructor(private router: Router) { }

  videoLoaded: boolean = false;
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
