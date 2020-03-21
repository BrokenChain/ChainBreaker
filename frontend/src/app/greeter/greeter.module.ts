import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreeterPageRoutingModule } from './greeter-routing.module';

import { GreeterPage } from './greeter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreeterPageRoutingModule
  ],
  declarations: [GreeterPage]
})
export class GreeterPageModule {}
