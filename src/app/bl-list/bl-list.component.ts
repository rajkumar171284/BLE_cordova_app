import { Component, OnInit, NgZone, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { Platform } from '@ionic/angular';

import { Main, bleList, bleDOMClass, dataparams } from '../main'
import { Observable, of, Subscription } from 'rxjs';
import { element } from 'protractor';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

const valModel = new Main();

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';
// import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';


@Component({
  selector: 'app-bl-list',
  templateUrl: './bl-list.component.html',
  styleUrls: ['./bl-list.component.scss'],
  providers: [BLE, Geolocation],
  // animations: [
  //   trigger('popOverState', [
  //     state('show', style({
  //       opacity: 1
  //     })),
  //     state('hide', style({
  //       opacity: 0
  //     })),
  //     transition('show => hide', animate('600ms ease-out')),
  //     transition('hide => show', animate('1000ms ease-in'))
  //   ])
  //  ]

})
export class BlListComponent implements OnInit, OnDestroy, OnChanges {
  dataParams = new dataparams();
  isScanned: boolean = false;

  deviceList: bleList[] = [];
  newObservable: Subscription | undefined;
  constructor(private platform: Platform, private geolocation: Geolocation, private ble: BLE, private zone: NgZone) {


  }

  interval: any;
  interval2: any;
  currPosition: any = {};
  ngOnInit() {
    this.isScanned = false;
    this.deviceList = [];

    this.deviceList = valModel.staticList.map((x: bleList, i) => {
      return x;
    })
    console.log(this.deviceList)

    // this.interval2 = setInterval(() => {
    // this.newObservable = this.ble.scan([], 5).subscribe((res:any) => { return res });

    // console.log('this.newObservable', this.newObservable)

    // api will enable device bluetooth
    // this.ble.isEnabled().then((result) => {
    //   console.log('isEnabled result',result)
    //   this.ble.scan([], 5).subscribe((res: any) => { 
    //     this.ble.showBluetoothSettings().then((setting:any)=>{
    //       console.log('setting',setting)

    //     })
    //    });
    // }).catch(err => {
    //   console.log('err',err)
    //   this.ble.scan([], 5).subscribe((res: any) => { 
    //     console.log('not Enabled result',res)

    //     // this.ble.showBluetoothSettings().then((setting:any)=>{
    //     //   console.log('setting',setting)

    //     // })
    //    });
    // })

  }

  ngOnChanges(changes: SimpleChanges) {
    this.isScanned = false;
    this.deviceList = [];
  }
  scan() {
    this.isScanned = true;
    console.log('Start scanning');
    this.platform.ready().then(() => {
      let watch = this.geolocation.watchPosition({ enableHighAccuracy: true, timeout: 10000 });
      watch.subscribe((data: any) => {
        // console.log(data)
        if (data && data.coords) {
          this.currPosition.lat = data.coords.latitude;
          this.currPosition.lng = data.coords.longitude;
          this.currPosition.datetime = data.coords.timestamp;
          this.ble.scan([], 15).subscribe(res => {
            // console.log('res', res)
            this.updatedata(res);
            // this.ble.startStateNotifications().subscribe(state => {
            //   // console.log('state', state)
            //   if (res.id) {
            //     // this.ble.read(res.id).then
            //     // this.ble.readRSSI(res.id)
            //   }
            // })


          });
        }

      });
      // 
    })

  }

  public stateSuccess = function (device) {
    console.log('rssi' + device);

  }
  public stateFailure = function (device) {
    console.log('rssi' + device);

  }
  getRSSI(deviceId: string) {
    this.ble.readRSSI(deviceId).then(result => {
      console.log('result', result)
    })
  }

  updatedata(res) {
    // console.log('upt',res)
    this.zone.run(async () => {
      this.filterList(res);
      // let result = await this.filterList(res);
      // if(result.id){

      // }
      // this.deviceList.push(result);
    });
    console.log('this.deviceList', this.deviceList)
  }
  async filterList(x: bleList) {
    // console.log('x', x)
    x.isBLEMatched = false;
    let newlist = new bleDOMClass();
    newlist.id=x.id;
    newlist.rssi = x.rssi;
    newlist.name = x.name ? x.name : '';
    newlist.getDistance(x.rssi)
    newlist.isBLEMatched = false;
    
    this.deviceList.forEach((element, index) => {
      if (element.id == x.id) {
        // if matched
        x.isBLEMatched = true;        
        // element.SNo = index + 1;
        element.isBLEMatched = true;
        element.rssi = x.rssi;
        element.Distance = newlist.Distance;
        element.color = 'warning';

      } else {
        newlist.color = 'success';
        newlist.isBLEMatched = false;
        let newIndex=this.deviceList.findIndex(a=>{
           return a.id==newlist.id
        })
        if(newIndex==-1){
        this.deviceList.push(newlist)
        }
      }
    })
    return x;

  }

  // get stateName() {
  //   return this.show ? 'show' : 'hide'
  // }

  stopScan(e) {
  e.stopPropagation();
    this.isScanned = false;
    this.ble.stopScan().then(() => {
      this.isScanned = false;
      clearInterval(this.interval);
      clearInterval(this.interval2);

    })

  }
  ngOnDestroy() {
    this.kill()
  }
  ionViewWillLeave() {
    this.kill()
  }
  kill() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.interval2) {
      clearInterval(this.interval2);
    }
  }
}
