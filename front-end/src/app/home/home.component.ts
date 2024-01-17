import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resumePath = '../assets/Dillon-Woodland.pdf'
  downloadResume() {
    const link = document.createElement('a');
    link.href = this.resumePath;
    link.download = 'Dillon-Woodland.pdf';
    link.click();
  }
}
