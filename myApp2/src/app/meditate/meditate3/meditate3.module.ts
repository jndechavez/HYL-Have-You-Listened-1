import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate3PageRoutingModule } from './meditate3-routing.module';

import { Meditate3Page } from './meditate3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate3PageRoutingModule
  ],
  declarations: [Meditate3Page]
})
export class Meditate3PageModule {}
