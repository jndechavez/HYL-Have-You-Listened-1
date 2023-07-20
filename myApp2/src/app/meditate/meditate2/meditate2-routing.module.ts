import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate2Page } from './meditate2.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate2PageRoutingModule {}
