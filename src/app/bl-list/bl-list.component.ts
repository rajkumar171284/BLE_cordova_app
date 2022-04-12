import { Component, OnInit, NgZone, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Main, bleList, bleDOMClass, dataparams } from '../main'
import { Observable, of, Subscription } from 'rxjs';
import { element } from 'protractor';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ApiService } from '../api.service';
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
  allDevices: any = [];
  deviceList: any = [];
  newObservable: Subscription | undefined;
  listStatus: string = 'a';
  statusMessage: any;
  constructor(private router:Router ,private api: ApiService, private platform: Platform, private geolocation: Geolocation, private ble: BLE, private zone: NgZone) {

  }

  interval: any;
  interval2: any;
  currPosition: any = {};
  ionViewWillEnter(){
    console.log("ionViewWillEnter")
  }
  
  ngOnInit() {
    this.isScanned = false;
    this.deviceList = valModel.staticList.map((x: bleList, i) => {
      return x;
    })
    this.deviceList = this.dataParams.data;

    // this.api.getBLEList().subscribe(res => {
    //   if (res) {
    //     this.dataParams.data = res;
    //     console.log(this.dataParams.data)
    //     this.deviceList = this.dataParams.data;
    //   }
    // })

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
    // this.deviceList = [];
  }
  scan() {
    this.isScanned = true;
    // console.log('Start scanning');
    this.platform.ready().then(() => {
      let watch = this.geolocation.watchPosition({ enableHighAccuracy: true, timeout: 10000 });
      watch.subscribe((data: any) => {
        // console.log(data)
        if (data && data.coords) {
          this.allDevices = [];
          this.currPosition.lat = data.coords.latitude;
          this.currPosition.lng = data.coords.longitude;
          this.currPosition.datetime = data.coords.timestamp;
          this.ble.scan([], 5).subscribe(res =>
            this.updatedata(res),
            error => this.scanError(error)
            // this.ble.startStateNotifications().subscribe(state => {
            //   // console.log('state', state)
            //   if (res.id) {
            //     // this.ble.read(res.id).then
            //     // this.ble.readRSSI(res.id)
            //   }
            // })


          );
          setTimeout(() => { this.setStatus('Scan complete') }, 5000)
          // setTimeout(this.setStatus('Scan complete'), 5000, 'Scan complete');
        }

      });
      // 
    })

  }
  // If location permission is denied, you'll end up here
  scanError(error) {
    console.log(error)
    // this.setStatus('Error ' + error);
    // let toast = this.toastCtrl.create({
    //   message: 'Error scanning for Bluetooth low energy devices',
    //   position: 'middle',
    //   duration: 5000
    // });
    // toast.present();
  }
  setStatus(message) {
    console.log(message);
    this.zone.run(() => {
      this.statusMessage = message;
    });
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

  updatedata(x) {
    // console.log('upt', x)
    this.zone.run(() => {
      // this.filterList(x);
      const list = this.formatList(x);
      this.allDevices.push(list)
      // console.log(this.allDevices)
      this.deviceList = this.allDevices.map(ble => {
        let index = this.dataParams.data.findIndex(item => {
          return item.id == ble.id;
        })
        if (index != -1) {
          // found
          const newBLE = this.dataParams.data[index];
          ble.isBLEMatched = true;
          ble.color = 'success';
          ble.active = 'Active';
        } else {
          ble.isBLEMatched = false;
          ble.color = 'warning';
          ble.active = 'in-Active';
        }
        return ble;
      })
      // console.log(this.allDevices)

    });

    console.log('this.deviceList', this.deviceList)
  }
  formatList(x: bleList) {
    // console.log('x', x)
    if (x.id) {
      x.isBLEMatched = false;
      let newlist = new bleDOMClass();
      newlist.id = x.id;
      newlist.rssi = x.rssi;
      newlist.name = x.name ? x.name : '';
      newlist.getDistance(x.rssi)
      newlist.color = 'warning';
      newlist.isBLEMatched = false;
      newlist.active = 'In-Active';
      return newlist;

    }
  }

  selectBLE(item: any) {
    if (item) {
      this.router.navigate(['setBLE'],{
        queryParams:item
      })

    }
  }

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
  getListbyStatus(status: any) {
    this.listStatus = status;
  }
}
