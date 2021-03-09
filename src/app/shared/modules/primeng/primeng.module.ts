import { NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [],
  exports: [
    DialogModule,
    SidebarModule,
    CarouselModule,
    GalleriaModule
  ]
})
export class PrimeNgModule { }
