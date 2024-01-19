import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular1',
  templateUrl: './angular1.component.html',
  styleUrls: ['../projects.css']
})
export class Angular1Component {
  constructor(private router: Router) { }

  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
