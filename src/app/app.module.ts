import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './shared/modules/core/core.module';
import { GlobalErrorHandler } from './config/error-handler.service';
import { TranslocoInitializer } from './config/initializers/transloco.initializer';
import { MaterialModule } from './shared/modules/material/material.module';
import { IvyGalleryModule } from 'angular-gallery';

@NgModule({
  declarations: [AppComponent],
  exports: [BrowserAnimationsModule],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CoreModule.forRoot(),
    HttpClientModule,
    MaterialModule,
    NgxPageScrollModule,
    IvyGalleryModule
  ],
  providers: [
    TranslocoInitializer,
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
