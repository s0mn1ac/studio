import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionName } from '../../enums/section-name.enum';
import { HeaderItem } from '../../models/header-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() allHeaderItems!: HeaderItem[];
  @Input() languageSelected!: string;
  @Input() isDarkModeEnabled!: boolean;

  @Output() menuItemEmitter: EventEmitter<string> = new EventEmitter();
  @Output() changeLanguageEmitter: EventEmitter<string> = new EventEmitter();
  @Output() changeThemeEmitter: EventEmitter<boolean> = new EventEmitter();

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

  public changeTheme(checked: boolean): void {
    this.changeThemeEmitter.emit(checked);
  }

  public changeLanguage(language: string): void {
    this.changeLanguageEmitter.emit(language);
  }

}
