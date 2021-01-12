import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
