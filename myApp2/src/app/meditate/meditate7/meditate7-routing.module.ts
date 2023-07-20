import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate7Page } from './meditate7.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate7PageRoutingModule {}
