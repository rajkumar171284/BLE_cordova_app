import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { BlListComponent } from '../bl-list/bl-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderPipe } from '../order.pipe';
import { IotBleComponent } from '../iot-ble/iot-ble.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,SharedModule 
  ],
  declarations: [Tab1Page,BlListComponent,OrderPipe,IotBleComponent]
})
export class Tab1PageModule {}
