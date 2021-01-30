import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsPageComponent } from 'src/app/shared/components/header/projects-dialog/projects-page.component';
import { ThemeType } from '../../enums/theme-type.enum';
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
    this.getInitialTheme();
  }

  private getInitialTheme(): void {
    const theme = this.themingService.getTheme();
    this.isDarkModeEnabled = theme === ThemeType.DARK ? true : false;
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
      this.projectsPageComponent.showDialog();

      // this.router.navigate([name]);
    } else {
      if (this.router.url === '/projects') {
        this.router.navigate(['']).then(() => this.navigateTo(name));
      } else {
        this.navigateTo(name);
      }
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
    this.isDarkModeEnabled = checked;
    if (this.isDarkModeEnabled) {
      this.themingService.setTheme(ThemeType.DARK);
    } else {
      this.themingService.setTheme(ThemeType.LIGHT);
    }
  }

  public async navigateTo(name: string): Promise<void> {
    this.appService.headerService.navigateTo(name);
  }

  public navigateToProjectsPage(): void {
    // this.router.navigate(['/projects']);
  }

}
