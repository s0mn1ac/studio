import { Component, HostBinding, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeType } from './shared/enums/theme-type.enum';
import { ThemingService } from './shared/services/theming.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  @HostBinding('class') public cssClass!: string;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private themingService: ThemingService) {
    this.matIconRegistry.addSvgIcon('custom-flag-es', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/es.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-en', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/en.svg'));
  }

  ngOnInit(): void {
    this.initThemeConfiguration();
  }

  private initThemeConfiguration(): void {
    this.themingService.theme.subscribe((theme: ThemeType) => {
      this.cssClass = theme;
    });
  }
}
