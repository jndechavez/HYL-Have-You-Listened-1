import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'article1',
    loadChildren: () => import('./article1/article1.module').then( m => m.Article1PageModule)
  },
  {
    path: 'article2',
    loadChildren: () => import('./article2/article2.module').then( m => m.Article2PageModule)
  },
  {
    path: 'article3',
    loadChildren: () => import('./article3/article3.module').then( m => m.Article3PageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'meditate1',
    loadChildren: () => import('./meditate/meditate1/meditate1.module').then( m => m.Meditate1PageModule)
  },
  {
    path: 'meditate2',
    loadChildren: () => import('./meditate/meditate2/meditate2.module').then( m => m.Meditate2PageModule)
  },
  {
    path: 'meditate3',
    loadChildren: () => import('./meditate/meditate3/meditate3.module').then( m => m.Meditate3PageModule)
  },
  {
    path: 'meditate4',
    loadChildren: () => import('./meditate/meditate4/meditate4.module').then( m => m.Meditate4PageModule)
  },
  {
    path: 'meditate5',
    loadChildren: () => import('./meditate/meditate5/meditate5.module').then( m => m.Meditate5PageModule)
  },
  {
    path: 'meditate6',
    loadChildren: () => import('./meditate/meditate6/meditate6.module').then( m => m.Meditate6PageModule)
  },
  {
    path: 'meditate7',
    loadChildren: () => import('./meditate/meditate7/meditate7.module').then( m => m.Meditate7PageModule)
  },
  {
    path: 'meditate8',
    loadChildren: () => import('./meditate/meditate8/meditate8.module').then( m => m.Meditate8PageModule)
  },
  {
    path: 'article4',
    loadChildren: () => import('./article4/article4.module').then( m => m.Article4PageModule)
  },
  {
    path: 'article5',
    loadChildren: () => import('./article5/article5.module').then( m => m.Article5PageModule)
  },
  {
    path: 'article6',
    loadChildren: () => import('./article6/article6.module').then( m => m.Article6PageModule)
  },
  {
    path: 'article7',
    loadChildren: () => import('./article7/article7.module').then( m => m.Article7PageModule)
  },
  {
    path: 'article8',
    loadChildren: () => import('./article8/article8.module').then( m => m.Article8PageModule)
  },
  {
    path: 'article9',
    loadChildren: () => import('./article9/article9.module').then( m => m.Article9PageModule)
  },
  {
    path: 'article10',
    loadChildren: () => import('./article10/article10.module').then( m => m.Article10PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
