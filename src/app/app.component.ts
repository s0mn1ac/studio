import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeType } from './shared/enums/theme-type.enum';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { CookiePolicyComponent } from './shared/components/footer/cookie-policy/cookie-policy.component';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('cookiePolicyDialog') public cookiePolicyDialog!: CookiePolicyComponent;

  private transloco$!: Subscription;

  @HostBinding('class') public cssClass!: string;

  constructor(private appService: AppService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private overlayContainer: OverlayContainer, private cookieService: NgcCookieConsentService) {
    this.matIconRegistry.addSvgIcon('custom-flag-es', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/spain-flag.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-en', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/united-kingdom-flag.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-de', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/germany-flag.svg'));
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(ThemeType.DARK);
    this.cssClass = ThemeType.DARK;
    this.initTranslocoSubscription();
  }

  private initTranslocoSubscription(): void {

    const lang = sessionStorage.getItem('active-lang');

    if (lang != null) {
      this.appService.translocoService.setActiveLang(lang);
    }

    this.transloco$ = this.appService.translocoService.selectTranslation().subscribe((event: any) => {

      sessionStorage.setItem('active-lang', this.appService.translocoService.getActiveLang());
      
      const content = this.cookieService.getConfig().content;
  
      if (content) {
        content.message = this.appService.translocoService.translate('footer.cookiePolicy.message');
        content.dismiss = this.appService.translocoService.translate('footer.cookiePolicy.allow');
      }
  
      this.cookieService.destroy();
      this.cookieService.init(this.cookieService.getConfig());
    });
  }

  ngOnDestroy(): void {
    this.transloco$.unsubscribe();
  }

}
