import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ThemeType } from './shared/enums/theme-type.enum';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {

  private popupOpenSubscription$!: Subscription;
  private popupCloseSubscription$!: Subscription;
  private initializeSubscription$!: Subscription;
  private statusChangeSubscription$!: Subscription;
  private revokeChoiceSubscription$!: Subscription;
  private noCookieLawSubscription$!: Subscription;

  @HostBinding('class') public cssClass!: string;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private overlayContainer: OverlayContainer, private ccService: NgcCookieConsentService) {
    this.matIconRegistry.addSvgIcon('custom-flag-es', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/spain-flag.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-en', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/united-kingdom-flag.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-de', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/germany-flag.svg'));
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(ThemeType.DARK);
    this.cssClass = ThemeType.DARK;
    this.initCookieSubscription();
  }

  private initCookieSubscription(): void {
    this.popupOpenSubscription$ = this.ccService.popupOpen$.subscribe(() => { });
    this.popupCloseSubscription$ = this.ccService.popupClose$.subscribe(() => { });
    this.initializeSubscription$ = this.ccService.initialize$.subscribe((event: NgcInitializeEvent) => {  });
    this.statusChangeSubscription$ = this.ccService.statusChange$.subscribe((event: NgcStatusChangeEvent) => { this.ccService.getStatus().allow; console.log(event) });
    this.revokeChoiceSubscription$ = this.ccService.revokeChoice$.subscribe(() => { });
    this.noCookieLawSubscription$ = this.ccService.noCookieLaw$.subscribe((event: NgcNoCookieLawEvent) => {  });
  }

  ngOnDestroy(): void {
    this.popupOpenSubscription$.unsubscribe();
    this.popupCloseSubscription$.unsubscribe();
    this.initializeSubscription$.unsubscribe();
    this.statusChangeSubscription$.unsubscribe();
    this.revokeChoiceSubscription$.unsubscribe();
    this.noCookieLawSubscription$.unsubscribe();
  }

}
