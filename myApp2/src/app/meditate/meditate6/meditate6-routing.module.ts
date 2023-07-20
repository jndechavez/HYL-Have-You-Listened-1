import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate6Page } from './meditate6.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate6PageRoutingModule {}
