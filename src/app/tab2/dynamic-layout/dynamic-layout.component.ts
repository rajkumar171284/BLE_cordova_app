import { Component, OnInit, Renderer2, NgZone, DoCheck, ViewChild, ElementRef, AfterViewInit, HostBinding, HostListener } from '@angular/core';
import { Main, bleList, bleDOMClass, dataparams } from '../../main'
import { Observable, of, Subscription } from 'rxjs';
// import { element } from 'protractor';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform } from '@ionic/angular';
const valModel = new Main();

import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { style, animate, animation, animateChild, useAnimation, group, sequence, transition, state, trigger, query, stagger } from '@angular/animations';

import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@awesome-cordova-plugins/device-motion/ngx';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dynamic-layout',
  templateUrl: './dynamic-layout.component.html',
  styleUrls: ['./dynamic-layout.component.scss'],
  providers: [BLE, Geolocation, DeviceMotion],

})
export class DynamicLayoutComponent implements OnInit {
  show:boolean=false;
  deviceList: any = [];

  constructor(private renderer: Renderer2, private api: ApiService, private deviceMotion: DeviceMotion, public toastController: ToastController, public actionSheetController: ActionSheetController, public modalController: ModalController, private geolocation: Geolocation, private platform: Platform, private ble: BLE, private zone: NgZone) {
    this.api.getBLEList().subscribe(res => {
      if (res) {
        
        this.deviceList = res;
        this.show=true;

      }
    })
    // this.deviceList =valModel.staticList;
  }

  ngOnInit() {}

}
