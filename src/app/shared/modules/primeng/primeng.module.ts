import { NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ChipModule } from 'primeng/chip';
import { TreeModule } from 'primeng/tree';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [],
  exports: [
    DialogModule,
    SidebarModule,
    CarouselModule,
    GalleriaModule,
    ScrollTopModule,
    ChipModule,
    TreeModule,
    OverlayPanelModule
  ]
})
export class PrimeNgModule { }
