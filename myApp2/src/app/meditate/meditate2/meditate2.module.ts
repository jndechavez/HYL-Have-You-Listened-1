import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate2PageRoutingModule } from './meditate2-routing.module';

import { Meditate2Page } from './meditate2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate2PageRoutingModule
  ],
  declarations: [Meditate2Page]
})
export class Meditate2PageModule {}
