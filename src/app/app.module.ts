import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './shared/modules/core/core.module';
import { GlobalErrorHandler } from './config/error-handler.service';
import { TranslocoInitializer } from './config/initializers/transloco.initializer';
import { MaterialModule } from './shared/modules/material/material.module';
import { IvyGalleryModule } from 'angular-gallery';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { environment } from './../environments/environment';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieDomain
  },
  palette: {
    popup: {
      background: '#065A82',
      text: '#FFFFFF',
      link: '#FFFFFF'
    },
    button: {
      background: '#F4AC45',
      text: '#FFFFFF',
      border: 'transparent'
    }
  },
  content: {
    message: 'Utilizamos cookies para mejorar tu experiencia de uso. Si continúas navegando entendemos que aceptas su uso.',
    dismiss: '¡Vamos allá!'
  },
  showLink: false,
  theme: 'classic',
  position: 'bottom',
  type: 'info'
};

@NgModule({
  declarations: [AppComponent],
  exports: [BrowserAnimationsModule],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CoreModule.forRoot(),
    HttpClientModule,
    MaterialModule,
    IvyGalleryModule,
    HttpClientModule
  ],
  providers: [
    TranslocoInitializer,
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
