import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderItem } from '../../models/header-item.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerConfiguration: HeaderItem[] = [];

  public isDarkModeEnabled = true;
  public languageSelected: string = 'es';

  constructor(private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.changeLanguage(this.appService.translocoService.getActiveLang());
    this.initHeaderConfiguration();
  }

  public onClickHeaderOption(name: string): void {
    this.headerConfiguration.forEach((header: HeaderItem) => {
      if (header.id === name) {
        header.active = true;
      } else {
        header.active = false;
      }
    });
    // this.router.navigate(['/home'], {fragment: name});
    this.router.navigate([name]);
  }

  public changeLanguage(lang: string): void {
    this.appService.translocoService.setActiveLang(lang);
    this.languageSelected = lang;
  }

  private initHeaderConfiguration(): void {
    this.headerConfiguration = [
      { id: 'home', active: true },
      { id: 'about', active: false },
      { id: 'gallery', active: false },
      { id: 'contact', active: false }
    ];
  }

  public async navigateTo(name: string): Promise<void> {
    // this.appService.headerService.navigateTo(name);
  }

  public navigateToProjectsPage(): void {
    this.router.navigate(['/projects']);
  }

}
