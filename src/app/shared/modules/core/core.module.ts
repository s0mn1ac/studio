import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/config/transloco-root.module';
import { HeaderComponent } from '../../components/header/header.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { AppService } from '../../services/app.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        HeaderComponent,
        LayoutComponent
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        TranslocoRootModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        TranslocoRootModule,
        HeaderComponent,
        LayoutComponent,
        MaterialModule
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
