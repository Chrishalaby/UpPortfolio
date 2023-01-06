import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  sendEmail() {
    window.open('mailto:chridtianhalabi@gmail.com', '_blank');
  }

  callNumber() {
    window.open('tel:96171067260', '_blank');
  }

  openWhatsApp() {
    window.open('https://wa.me/71067260', '_blank');
  }

  viewLinkedIn() {
    window.open('https://www.linkedin.com/in/halabichristian', '_blank');
  }

  GitHub() {
    window.open('https://github.com/Chrishalaby', '_blank');
  }

  Insta(){
    window.open('https://www.instagram.com/halabichristian', '_blank');
  }
}
