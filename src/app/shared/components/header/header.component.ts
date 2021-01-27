import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderItem } from '../../models/header-item.model';
import { AppService } from '../../services/app.service';
import { ThemingService } from '../../services/theming.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerConfiguration: HeaderItem[] = [];

  public isDarkModeEnabled = false;
  public languageSelected = 'es';

  constructor(
    private appService: AppService, private router: Router, private themingService: ThemingService) { }

  ngOnInit(): void {
    this.changeLanguage(this.appService.translocoService.getActiveLang());
    this.initHeaderConfiguration();
    this.setDarkMode();
  }

  private setDarkMode(): void {
    const darkModeOn = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkModeEnabled = darkModeOn ? true : false;
  }

  public onClickHeaderOption(name: string): void {
    this.headerConfiguration.forEach((header: HeaderItem) => {
      if (header.id === name) {
        header.active = true;
      } else {
        header.active = false;
      }
    });
    if (name === 'projects') {
      this.router.navigate([name]);
    } else {
      if (this.router.url === '/projects') { this.router.navigate(['home']); }
      this.navigateTo(name);
    }
  }

  public changeLanguage(lang: string): void {
    this.appService.translocoService.setActiveLang(lang);
    this.languageSelected = lang;
  }

  private initHeaderConfiguration(): void {
    this.headerConfiguration = [
      { id: 'home', active: false },
      { id: 'about', active: false },
      { id: 'gallery', active: false },
      { id: 'contact', active: false },
      { id: 'projects', active: false }
    ];
    const activeItem = this.headerConfiguration.find((headerItem: HeaderItem) => this.router.url.endsWith(headerItem.id));
    if (activeItem) {
      activeItem.active = true;
      this.navigateTo(activeItem.id);
    } else {
      this.headerConfiguration[0].active = true;
    }
  }

  public changeTheme(checked: boolean): void {
    console.log('change');
    this.isDarkModeEnabled = checked;
    if (this.isDarkModeEnabled) {
      this.themingService.theme.next('dark-theme');
    } else {
      this.themingService.theme.next('light-theme');
    }
  }

  public async navigateTo(name: string): Promise<void> {
    this.appService.headerService.navigateTo(name);
  }

  public navigateToProjectsPage(): void {
    this.router.navigate(['/projects']);
  }

}
