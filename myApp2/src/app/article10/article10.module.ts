import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Article10PageRoutingModule } from './article10-routing.module';

import { Article10Page } from './article10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Article10PageRoutingModule
  ],
  declarations: [Article10Page]
})
export class Article10PageModule {}
