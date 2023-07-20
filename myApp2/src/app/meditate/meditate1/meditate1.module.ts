import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate1PageRoutingModule } from './meditate1-routing.module';

import { Meditate1Page } from './meditate1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate1PageRoutingModule
  ],
  declarations: [Meditate1Page]
})
export class Meditate1PageModule {}
