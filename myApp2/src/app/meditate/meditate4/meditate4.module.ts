import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate4PageRoutingModule } from './meditate4-routing.module';

import { Meditate4Page } from './meditate4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate4PageRoutingModule
  ],
  declarations: [Meditate4Page]
})
export class Meditate4PageModule {}
