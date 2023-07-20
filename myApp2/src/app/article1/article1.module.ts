import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article1PageRoutingModule } from './article1-routing.module';

import { Article1Page } from './article1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article1PageRoutingModule
  ],
  declarations: [Article1Page]
})
export class Article1PageModule {}
