import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate3Page } from './meditate3.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate3PageRoutingModule {}
