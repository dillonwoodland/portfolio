import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tcp-udp',
  templateUrl: './tcp-udp.component.html',
  styleUrls: ['../projects.css']
})
export class TcpUdpComponent {
  constructor(private router: Router) { }

  videoLoaded: boolean = false;
  backButtonClicked() {
    this.router.navigate(['Projects']);
  }
}
