import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate1Page } from './meditate1.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate1PageRoutingModule {}
