import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IotLabLayoutPage } from './iot-lab-layout.page';

const routes: Routes = [
  {
    path: '',
    component: IotLabLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IotLabLayoutPageRoutingModule {}
