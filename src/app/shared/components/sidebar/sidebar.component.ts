import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { HeaderItem } from '../../models/header-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() allHeaderItems!: HeaderItem[];
  @Input() languageSelected!: string;

  @Output() menuItemEmitter: EventEmitter<string> = new EventEmitter();
  @Output() changeLanguageEmitter: EventEmitter<string> = new EventEmitter();

  public faInstagram = faInstagram;
  public faFacebook = faFacebook;
  public faTwitter = faTwitter;
  public faYoutube = faYoutube;

  public menuItemSelected!: HeaderItem;

  public isOpen = false;

  constructor() { }

  ngOnInit(): void { }

  public toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  public onClickMenuItem(name: string): void {
    this.isOpen = !this.isOpen;
    this.menuItemEmitter.emit(name);
  }

  public changeLanguage(language: string): void {
    this.changeLanguageEmitter.emit(language);
  }

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
