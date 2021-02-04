import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
