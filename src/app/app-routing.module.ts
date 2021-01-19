import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/components/main-page.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
            },
            {
                path: 'about',
                loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
            },
            {
                path: 'gallery',
                loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
            },
            {
                path: 'contact',
                loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
            },
            // {
            //     path: 'main',
            //     loadChildren: () =>
            //         import('./main-page/main-page.module').then(
            //             m => m.MainPageModule
            //         )
            // },
            {
                path: 'projects',
                loadChildren: () =>
                    import('./projects-page/projects-page.module').then(
                        m => m.ProjectsPageModule
                    )
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
