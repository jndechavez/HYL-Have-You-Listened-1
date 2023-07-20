import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate7PageRoutingModule } from './meditate7-routing.module';

import { Meditate7Page } from './meditate7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate7PageRoutingModule
  ],
  declarations: [Meditate7Page]
})
export class Meditate7PageModule {}
