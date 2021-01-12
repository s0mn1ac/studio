import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isHomeClicked = false;
  public isDarkModeEnabled = true;
  public languageSelected: string = 'es';

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.changeLanguage(this.appService.translocoService.getActiveLang());
  }

  public onClickHomeHeaderButton(): void {
    this.isHomeClicked = !this.isHomeClicked;
  }

  public changeLanguage(lang: string): void {
    this.appService.translocoService.setActiveLang(lang);
    this.languageSelected = lang;
  }

}
