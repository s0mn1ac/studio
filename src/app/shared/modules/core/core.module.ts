import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/config/transloco-root.module';
import { HeaderComponent } from '../../components/header/header.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AppService } from '../../services/app.service';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../primeng/primeng.module';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        HeaderComponent,
        LayoutComponent,
        FooterComponent,
        SidebarComponent,
        ScrollToTopComponent
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        TranslocoRootModule,
        RouterModule,
        MaterialModule,
        PrimeNgModule,
        FontAwesomeModule
    ],
    exports: [
        TranslocoRootModule,
        HeaderComponent,
        LayoutComponent,
        FooterComponent,
        SidebarComponent,
        ScrollToTopComponent,
        MaterialModule,
        PrimeNgModule,
        FontAwesomeModule
    ],
    providers: [],

})
export class CoreModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: CoreModule,
            providers: [
                AppService,
                TranslocoService
            ],
        };
    }
}
