import { NgModule } from '@angular/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  exports: [
    DynamicDialogModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
