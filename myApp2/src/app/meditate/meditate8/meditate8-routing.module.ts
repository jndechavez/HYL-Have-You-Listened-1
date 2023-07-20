import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate8Page } from './meditate8.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate8PageRoutingModule {}
