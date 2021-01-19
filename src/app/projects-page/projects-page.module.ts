import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../shared/modules/core/core.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { ProjectsPageComponent } from './components/projects-page.component';

@NgModule({
    declarations: [ProjectsPageComponent],
    imports: [
        CommonModule,
        CoreModule,
        ProjectsPageRoutingModule,
        MaterialModule
    ]
})
export class ProjectsPageModule { }
