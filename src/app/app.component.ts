import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('custom-flag-es', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/es.svg'));
    this.matIconRegistry.addSvgIcon('custom-flag-en', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/flags/en.svg'));
  }
}
