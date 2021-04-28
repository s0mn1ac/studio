import { Component, HostBinding, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeType } from './shared/enums/theme-type.enum';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  @HostBinding('class') public cssClass!: string;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private overlayContainer: OverlayContainer) {
    this.matIconRegistry.addSvgIcon('custom-flag-es', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/spain-flag.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-en', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/united-kingdom-flag.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-de', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/germany-flag.svg'));
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(ThemeType.DARK);
    this.cssClass = ThemeType.DARK;
  }

}
