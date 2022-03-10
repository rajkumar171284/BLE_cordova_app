import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IotLabLayoutPageRoutingModule } from './iot-lab-layout-routing.module';

import { IotLabLayoutPage } from './iot-lab-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IotLabLayoutPageRoutingModule
  ],
  declarations: [IotLabLayoutPage]
})
export class IotLabLayoutPageModule {}
