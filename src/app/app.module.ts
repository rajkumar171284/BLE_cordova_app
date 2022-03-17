import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

// import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,
    SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },BLE],
  bootstrap: [AppComponent],
})
export class AppModule {}
