import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public faInstagram = faInstagram;
  public faFacebook = faFacebook
  public faTwitter = faTwitter;
  public faYoutube = faYoutube;

  public openNewTab(name: string): void {
    switch (name) {
      case 'Instagram':
        window.open('https://www.instagram.com/maginkst', '_blank');
        break;
      case 'Facebook':
        window.open('https://m.facebook.com/maginkst', '_blank');
        break;
      case 'Twitter':
        window.open('https://twitter.com/maginkst', '_blank');
        break;
      case 'Youtube':
        window.open('https://www.youtube.com', '_blank');
        break;
      default:
        break;
    }
  }

}
