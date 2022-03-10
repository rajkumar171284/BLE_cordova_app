import { Component, OnInit, NgZone, DoCheck } from '@angular/core';
import { Main, bleList, bleDOMClass, dataparams } from '../main'
import { Observable, of, Subscription } from 'rxjs';
// import { element } from 'protractor';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform } from '@ionic/angular';
const valModel = new Main();
import { IotLabLayoutPage } from '../pages/iot-lab-layout/iot-lab-layout.page';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';

import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [BLE, Geolocation],
})
export class LayoutComponent implements OnInit, DoCheck {
  dataParams = new dataparams();
  deviceList: any = valModel.staticList;
  imgData: bleList[] = [];
  currPosition: any = { lat: '', lng: '', datetime: '',error:'',header:'',text:'' ,loc:'',distance:'',rssi:''}
  watch: Subscription;
  scanSubs: Subscription;
  slideOpts: any = {
    zoom: {
      minRatio: 1,
      maxRatio: 10,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }


  }
  constructor(public toastController: ToastController, public actionSheetController: ActionSheetController, public modalController: ModalController, private geolocation: Geolocation, private platform: Platform, private ble: BLE, private zone: NgZone) { }

  ngOnInit() {

    
    // this.presentModal()
    // if (document.getElementById('ble1')) {

    //   const xy = document.getElementById('ble1');

    //   var value = Math.abs(-10);

    //   // xy.setAttribute('fill','')
    //   console.log(value.toString())
    //   xy.setAttribute('r', value.toString());

    // }
    this.findNearestBLE();
    this.pageLoad()
  }
  findNearestBLE() {
    let near = _.orderBy(this.deviceList, 'Distance', 'asc')

    // console.log(near)

    // this.presentActionSheet(near[0])
    this.presentToastWithOptions(near[0])

  }
  ngDoCheck() {
    // console.log('check')    
  }
  // 
  formatImgData() {
    // const List = valModel.staticList; //testing
    const List = this.deviceList;
    this.imgData = List.map((res, i) => {


      let newlist = new bleDOMClass();
      newlist.rssi = res.rssi;
      newlist.id = res.id;
      newlist.name = res.name ? res.name : '';
      newlist.getDistance(res.rssi)
      newlist.top = res.top;
      newlist.left = res.left;
      return newlist;
    })
    // console.log(this.imgData)

  }

  pageLoad() {
    this.platform.ready().then(() => {

      let watch = this.geolocation.watchPosition({ enableHighAccuracy: true, timeout: 10000 });
      watch.subscribe((data: any) => {
        // console.log(data)
        if (data && data.coords) {
          this.currPosition.lat = data.coords.latitude;
          this.currPosition.lng = data.coords.longitude;
          this.currPosition.datetime = data.timestamp;
          // console.log(this.currPosition)
          this.scan();
        }
      });
      // 
    })

  }
  scan() {

    // this.isScanned = true;

    this.imgData = []; // clear list
    // console.log('Start scanning');
    this.scanSubs = this.ble.scan([], 300).subscribe(res => {
      // console.log('res', res)
      this.updatedata(res);

      // this.ble.isLocationEnabled().then((loc) => {
      //   console.log('loc', loc)
      // })
      // this.ble.startStateNotifications().subscribe(state => {

      //   if (state && (state.toLowerCase() == 'on')) {
      //     console.log('on state', state)
      //   } else {
      //     console.log(' state', state)
      //   }

      // })
    });
  }

  updatedata(res) {
    this.zone.run(() => {
      let result = this.filterList(res);
      // console.log('result', result);      
      this.imgData.push(result)
      if (this.imgData.length > 0) {
        for (let a of this.deviceList) {
          let index = this.imgData.findIndex(ele => {
            return ele.id == a.id;
          })
          if (index != -1) {
            // id matches   
                  console.log('a', a);      
         
            const data = this.imgData[index];            
            // make active
            a.active = data.active;
            a.rssi = data.rssi;
            a.Distance = data.Distance;
            a.N = data.N;
            if (data.N == 4) {
              a.strengthColor = '#00ff00';//green
            } else if (data.N == 3) {
              a.strengthColor = '#ffa500';//orange
            } else if (data.N == 2) {
              a.strengthColor = '#ff0000'
            }

            //set fill value for svg circle tag
            // if (document.getElementById('ble1')) {
            //   const value = a.rssi;
            //   const xy = document.getElementById('ble1');              
            //   xy.setAttribute('r', value.toString());
            //   console.log(xy)
            // }
          }
        }
        this.findNearestBLE();
      }
    });

    console.log('this.imgData', this.imgData)

  }

  filterList(x: any) {
    console.log('x', x)  
    let newDevice = new bleDOMClass();
    newDevice.getDistance(x.rssi)
    newDevice.rssi = x.rssi;
    newDevice.id = x.id;
    newDevice.name = x.name ? x.name : '';
    newDevice.getDistance(x.rssi)
    newDevice.isBLEMatched = false;
    newDevice.active = 'Active';    
    return newDevice;
  }
  // myRadius;
  myRadius() {
    console.log('ds')
  }
  getBLE(mac: string, type: string) {
    let arr: bleList[] = this.deviceList.filter((x: bleList) => {      
      return x.id === mac;
    })
    if (arr.length) {
      let meters: any;
      if (arr[0].Distance) {
        meters = arr[0].Distance.toFixed(2);
      }
      return type == 'mac' ? arr[0].id : type == 'Dist' && arr[0].Distance ? `RSSI :${arr[0].rssi} at ${meters
        } meters` : type == 'color' ? arr[0].strengthColor : type == 'status' ? arr[0].active : '';
    } else {
      return ''
    }
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: IotLabLayoutPage,
      cssClass: 'product-zoom-modal',
      // componentProps: {
      //       imgurl : img_url
      // },
      // presentingElement: await this.modalCtrl.getTop()
    });
    return await modal.present();
  }

  // async presentActionSheet(res: bleList) {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Nearest device you reached..',
  //     cssClass: 'my-custom-class',
  //     buttons: [{
  //       text: `MAC:${res.id},RSSI:${res.rssi}`,
  //       icon: 'bluetooth-outline',
  //       data: 'Data value',
  //       handler: () => {
  //         console.log('Play clicked');
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'return-down-back-outline',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();

  //   const { role, data } = await actionSheet.onDidDismiss();
  //   console.log('onDidDismiss resolved with role and data', role, data);
  // }

  async presentToastWithOptions(res: bleList) {
    console.log(res)
    this.currPosition.loc='';
    this.currPosition.rssi='';

    let str;
    let colr;
    let hdr;
    let newIcon:string;
    if (res.Distance && res.rssi) {
      this.currPosition.rssi=`${res.rssi}`;
      str = `MAC:${res.id} ,RSSI:${res.rssi}`;
      colr = 'success';
      hdr='Nearest device you reached..';
      newIcon='bluetooth-outline';
      this.currPosition.loc=res.loc;
    } else {
      this.currPosition.loc='';
    this.currPosition.rssi='';
      str = ``;
      colr = 'warning';
      hdr='No Device Found';
      newIcon='alert-circle-outline';
    }
    

    this.currPosition.color=colr;
    this.currPosition.text=str;
    this.currPosition.icon=newIcon;
    this.currPosition.header =hdr;
    console.log(this.currPosition)
    // const toast = await this.toastController.create({
    //   header: hdr,
    //   message: str,
    //   icon: newIcon,
    //   position: 'top',
    //   color: colr,
    //   buttons: [
    //     // {
    //     //   side: 'start',
    //     //   icon: 'star',
    //     //   text: 'Favorite',
    //     //   handler: () => {
    //     //     console.log('Favorite clicked');
    //     //   }
    //     // }, 
    //     {
    //       text: 'Close',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     }
    //   ]
    // });
    // await toast.present();

    // const { role } = await toast.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  ngOnDestroy() {
    this.kill()
  }
  ionViewWillLeave() {
    this.kill()
  }
  kill() {
    this.scanSubs.unsubscribe();
  }
}
