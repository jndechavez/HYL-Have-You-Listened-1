import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Meditate5PageRoutingModule } from './meditate5-routing.module';

import { Meditate5Page } from './meditate5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Meditate5PageRoutingModule
  ],
  declarations: [Meditate5Page]
})
export class Meditate5PageModule {}
