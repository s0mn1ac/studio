import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
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

}
