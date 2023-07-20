import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate4Page } from './meditate4.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate4PageRoutingModule {}
