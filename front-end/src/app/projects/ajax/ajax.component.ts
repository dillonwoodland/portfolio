import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['../projects.css']
})
export class AjaxComponent {
  constructor(private router: Router) { }
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
