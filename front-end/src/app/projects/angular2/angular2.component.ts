import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular2',
  templateUrl: './angular2.component.html',
  styleUrls: ['../projects.css']
})
export class Angular2Component {
  constructor(private router: Router) { }
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
