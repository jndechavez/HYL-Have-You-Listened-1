import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Article10Page } from './article10.page';

const routes: Routes = [
  {
    path: '',
    component: Article10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Article10PageRoutingModule {}
