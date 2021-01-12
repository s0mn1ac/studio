import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../shared/modules/core/core.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { MainPageComponent } from './components/main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
    declarations: [MainPageComponent],
    imports: [
        CommonModule,
        CoreModule,
        MainPageRoutingModule,
        MaterialModule
    ]
})
export class MainPageModule { }
