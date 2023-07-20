import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article1Page } from './article1.page';

const routes: Routes = [
  {
    path: '',
    component: Article1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article1PageRoutingModule {}
