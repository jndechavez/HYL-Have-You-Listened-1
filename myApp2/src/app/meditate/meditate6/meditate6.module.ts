import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate6PageRoutingModule } from './meditate6-routing.module';

import { Meditate6Page } from './meditate6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate6PageRoutingModule
  ],
  declarations: [Meditate6Page]
})
export class Meditate6PageModule {}
