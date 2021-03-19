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
import { ReferencesComponent } from './components/references/references.component';
import { QualityBadgeComponent } from './components/services/components/paint-services/quality-badge/quality-badge.component';
import { PresentationCardComponent } from './components/about/presentation-card/presentation-card.component';
import { FullScreenDialogComponent } from './components/gallery/full-screen-dialog/full-screen-dialog.component';
import { ExtendedGalleryComponent } from './components/gallery/extended-gallery/extended-gallery.component';
import { ChipComponent } from './components/gallery/extended-gallery/chip/chip.component';

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
        PrintServicesComponent,
        QualityBadgeComponent,
        ReferencesComponent,
        PresentationCardComponent,
        FullScreenDialogComponent,
        ExtendedGalleryComponent,
        ChipComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        MainPageRoutingModule,
        MaterialModule
    ]
})
export class MainPageModule { }
