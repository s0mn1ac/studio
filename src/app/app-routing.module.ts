import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'disabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
