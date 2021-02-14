import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../shared/modules/core/core.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { MainPageComponent } from './components/main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsPageComponent } from './components/projects/projects-page.component';
import { ServicesComponent } from './components/services/services.component';
import { PaintServicesComponent } from './components/services/components/paint-services/paint-services.component';
import { PrintServicesComponent } from './components/services/components/print-services/print-services.component';

@NgModule({
    declarations: [
        MainPageComponent,
        HomeComponent,
        GalleryComponent,
        ContactComponent,
        AboutComponent,
        ProjectsPageComponent,
        ServicesComponent,
        PaintServicesComponent,
        PrintServicesComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        MainPageRoutingModule,
        MaterialModule
    ]
})
export class MainPageModule { }
