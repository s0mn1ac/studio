import { NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  exports: [
    DialogModule,
    SidebarModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }
