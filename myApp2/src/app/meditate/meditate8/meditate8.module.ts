import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate8PageRoutingModule } from './meditate8-routing.module';

import { Meditate8Page } from './meditate8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate8PageRoutingModule
  ],
  declarations: [Meditate8Page]
})
export class Meditate8PageModule {}
