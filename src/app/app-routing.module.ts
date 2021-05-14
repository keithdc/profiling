import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'result',
    pathMatch: 'full',
    loadChildren: () => import('./modules/result/result.module').then(m => m.ResultModule),
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
