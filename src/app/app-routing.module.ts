import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {IotBleComponent} from './iot-ble/iot-ble.component';
import {DynamicLayoutComponent} from './tab2/dynamic-layout/dynamic-layout.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'iot-lab-layout',
    loadChildren: () => import('./pages/iot-lab-layout/iot-lab-layout.module').then( m => m.IotLabLayoutPageModule)
  },{
    path:'setBLE',component:IotBleComponent
  },
  {
    path:'layout',component:DynamicLayoutComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
