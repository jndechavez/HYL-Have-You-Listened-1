import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Meditate5Page } from './meditate5.page';

const routes: Routes = [
  {
    path: '',
    component: Meditate5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Meditate5PageRoutingModule {}
