import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) { }

  mobileClicked() {
    this.router.navigate(['Mobile']);
  }
  angularAjaxClicked() {
    this.router.navigate(['Angular-AJAX']);
  }
  ajaxClicked() {
    this.router.navigate(['AJAX']);
  }
  angularClicked() {
    this.router.navigate(['Angular']);
  }
  osClicked() {
    this.router.navigate(['OS']);
  }
  multiThreadingClicked() {
    this.router.navigate(['Multi-threading']);
  }
  cliClicked() {
    this.router.navigate(['CLI']);
  }
  tcpUdpClicked() {
    this.router.navigate(['TCP-UDP']);
  }
  stdmClicked() {
    this.router.navigate(['STDM']);
  }
}
