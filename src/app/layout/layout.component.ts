import { Component, OnInit, Renderer2, NgZone, DoCheck, ViewChild, ElementRef, AfterViewInit, HostBinding, HostListener } from '@angular/core';
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
import { style, animate, animation, animateChild, useAnimation, group, sequence, transition, state, trigger, query, stagger, keyframes } from '@angular/animations';

import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { DeviceMotion, DeviceMotionAccelerationData } from '@awesome-cordova-plugins/device-motion/ngx';
import { IonSlides } from '@ionic/angular';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [BLE, Geolocation, DeviceMotion],
  animations: [


    trigger('transition', [
      state('init', style({
        transform: 'translate3d(-24px, 197px, 0px) scale(1.8)'
      })),
      state('position1', style({
        // transform: 'translate3d(-24px, 1000px, 0px) scale(5)'

      })),
      state('position2', style({
        transform: 'translate3d(-304px, 600px, 0px) scale(5)'
      })),
      state('position3', style({
        transform: 'translate3d(24px, 600px, 0px) scale(5)'
      })),
      state('position4', style({
        transform: 'translate3d(-354px, -100px, 0px) scale(5)'
      })),

      transition('init=>position1', animate('400ms ease-in-out')),
      transition('init=>position2', animate('400ms ease-in-out')),
      transition('init=>position3', animate('400ms ease-in-out')),
      transition('init=>position4', animate('400ms ease-in-out')),

      transition('position1=>init', animate('400ms ease-in-out')),
      transition('position2=>init', animate('400ms ease-in-out')),
      transition('position3=>init', animate('400ms ease-in-out')),
      transition('position4=>init', animate('400ms ease-in-out')),

    ]),

    // bounce img1 starts
    trigger('bounce', [
      transition('* => *', [
        animate(
          1000,
          keyframes([
            style({ transform: 'translateX(0)    rotateY(0)', offset: 0 }),
            style({
              transform: 'translateY(-10%) ',
              offset: 0.33,
            }),
            // style({
            //   transform: 'translateY(-20%) ',
            //   offset: 0.66,
            // }),
            style({ transform: 'translateY(0%)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    

  ],

})
export class LayoutComponent implements OnInit, DoCheck, AfterViewInit {
  state = "closed";
  hide = false
  size = 'none';
  sizeImg1 = 'none';
  sizeImg2 = 'none';
  sizeImg3 = 'none';
  transForm: string = 'init';
  // @ViewChild("mySlider") mySlider: ElementRef;

  // public animateProfile = true;
  // @HostListener('window:scroll')
  trigger: boolean;

  dataParams = new dataparams();
  deviceList: any = [];
  imgData: bleList[] = [];
  locationList = [];
  currPosition: any = {
    lat: '', lng: '', datetime: '', error: '', header: '', text: '', loc: '', distance: '', rssi: ''
    , x: '', y: '', z: '', currx: '', curry: '', currz: ''
  }
  watch: Subscription;
  scanSubs: Subscription;
  slideOpts: any = {
    zoom: {
      minRatio: 10,
      maxRatio: 12,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed',
      effect: 'flip',

    }


  }
  subscription: Subscription;
  show: boolean = false;
  svgElement = document.getElementById('layout');
  bounceName = 'bounceUp'
  constructor(private renderer: Renderer2, private api: ApiService, private deviceMotion: DeviceMotion, public toastController: ToastController, public actionSheetController: ActionSheetController, public modalController: ModalController, private geolocation: Geolocation, private platform: Platform, private ble: BLE, private zone: NgZone) {
    // this.api.getBLEList().subscribe(res => {
    //   if (res) {
    //     this.dataParams.data = res;
    //     console.log(this.dataParams.data)
    //     this.deviceList = this.dataParams.data;
    //     this.show=true;

    //   }
    // })
    this.deviceList = valModel.staticList;
  }
  imgWidth = '500';
  imgX = '110';
  imgY = '-180';
  @ViewChild(IonSlides) slides: IonSlides;

  currState: boolean = false;
  ngAfterViewInit() {
    // this.scrollToPosition();
    // this.gotoTop() 
    // setInterval(() => (this.trigger = !this.trigger),1000);
       
  }
  multipleState: string = 'state1';

  bounceImg1=false;
  bounceImg3=false;
  bounceImg4=false;
  bounceImg2=false;

  changeState(): void {

    if (this.currPosition.loc == 'IoT-Team') {
      this.transForm = 'position1'

      this.size = 'none';
      this.sizeImg2 = 'none';
      this.sizeImg3 = 'none';
      this.sizeImg1 = 'large';
      // console.log('1', this.size, this.sizeImg1)
      // bounce starts
      setInterval(() => (this.bounceImg1 = !this.bounceImg1),1000);


    } else if (this.currPosition.loc == 'IoT-Lab') {
      this.transForm = 'position2';
      this.size = 'large';
      this.sizeImg1 = 'none';
      this.sizeImg2 = 'none';
      this.sizeImg3 = 'none';
      setInterval(() => (this.bounceImg2 = !this.bounceImg2),1000);

    }
    else if (this.currPosition.loc == 'Network-Team') {
      this.transForm = 'position3';
      this.size = 'none';
      this.sizeImg1 = 'none';
      this.sizeImg2 = 'large';
      this.sizeImg3 = 'none';
      // console.log('2', this.size, this.sizeImg1)
      setInterval(() => (this.bounceImg3 = !this.bounceImg3),1000);

    }
    else if (this.currPosition.loc == 'ISL-Entrance') {
      this.transForm = 'position4';
      this.size = 'none';
      this.sizeImg1 = 'none';
      this.sizeImg2 = 'none';
      this.sizeImg3 = 'large';
      setInterval(() => (this.bounceImg4 = !this.bounceImg4),1000);
    } else {
      this.size = 'none';
      this.sizeImg1 = 'none';
      this.sizeImg2 = 'none';
      this.sizeImg3 = 'none';
      this.transForm = 'init'
      this.bounceImg1=false;
      this.bounceImg3=false;
      this.bounceImg4=false;
      this.bounceImg2=false;
    
    }
  }


  ngOnInit() {

    this.pageLoad()
    // this.locationList = valModel.locationList.map(a => {

    //   a.x = a.x * 50;
    //   a.y = a.y * 150;
    //   return a
    // })

    // this.presentModal()


    // this.slides.zoom

    // Watch device acceleration
    // this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
    //   // console.log(acceleration);
    //   this.currPosition.x = acceleration.x;
    //   this.currPosition.y = acceleration.y;
    //   this.currPosition.z = acceleration.z;

    // });

  }
  loadPage() {

    this.pageLoad()
  }
  findNearestBLE() {
    let near = _.orderBy(this.deviceList, 'Distance', 'asc')
    this.presentToastWithOptions(near[0])
    // console.log(near)
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
      this.watch = watch.subscribe((data: any) => {
        // console.log(data)
        if (data && data.coords) {
          this.currPosition.lat = data.coords.latitude;
          this.currPosition.lng = data.coords.longitude;
          this.currPosition.datetime = data.timestamp;
          this.scan();
        }
      });
      // 
    })

  }
  scan() {
    this.imgData = []; // clear list
    this.scanSubs = this.ble.scan([], 300).subscribe(res => {
      this.updatedata(res);

    });
  }

  updatedata(res) {
    this.zone.run(() => {
      let result = this.filterList(res);
      // console.log('result', result);      
      this.imgData.push(result)
      if (this.imgData.length > 0 && this.deviceList.length > 0) {
        for (let a of this.deviceList) {
          let index = this.imgData.findIndex(ele => {
            return ele.id == a.id;
          })
          if (index != -1) {
            // id matches               
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
            a.deviceColor = a.strengthColor;
            a.circleColor = data.circleColor;
          }
        }
        this.findNearestBLE();
      }
    });

    // console.log('this.imgData', this.imgData)

  }

  filterList(x: any) {
    // console.log('x', x)
    let newDevice = new bleDOMClass();
    newDevice.getDistance(x.rssi)
    newDevice.rssi = x.rssi;
    newDevice.id = x.id;
    newDevice.name = x.name ? x.name : '';
    newDevice.getDistance(x.rssi)
    newDevice.isBLEMatched = false;
    newDevice.active = 'Active';
    // console.log(newDevice.circleColor)

    return newDevice;
  }
  // myRadius;
  myRadius() {
    // console.log('ds')
  }
  getBLE(record: number, type: string) {
    // console.log('ds',type)
    if (this.deviceList.length == 0) {
      return;
    }
    let arr: bleList[] = this.deviceList.filter((x: bleList) => {
      return x.SNo === record;
    })
    if (arr.length) {
      // console.log('ds',type)

      let meters: any;
      if (arr[0].Distance) {
        meters = arr[0].Distance;
        // setInterval(() => (this.bounceImg2 = !this.bounceImg2),1000);

      }
      return type == 'mac' ? arr[0].id : type == 'Dist' && arr[0].Distance ? `RSSI :${arr[0].rssi} @ ${meters
        } meters` : type == 'color' ? arr[0].deviceColor : type == 'status' ? arr[0].active.toUpperCase() : '';

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


  async presentToastWithOptions(res: bleList) {
    // console.log(res)
    this.currPosition.loc = '';
    this.currPosition.rssi = '';

    let str;
    let colr;
    let hdr;
    let newIcon: string;
    if (res.Distance && res.rssi) {
      this.currPosition.id = res.id;
      this.currPosition.rssi = `${res.rssi}`;
      str = `MAC:${res.id} ,RSSI:${res.rssi} at a distance of ${res.Distance} meters`;
      colr = 'success';
      hdr = 'Nearby BLE is,';
      newIcon = 'bluetooth-outline';
      this.currPosition.loc = res.loc;
      this.currPosition.distance = res.Distance;
      this.currPosition.circleColor = res.circleColor;
      this.sendNotification();
      const item = new bleDOMClass()
      const state = item.getNearByLocated(this.currPosition.distance);
      if (state) {
        this.currState = state;
        this.isLocated(this.currPosition, this.currPosition.loc);
      } else {
        // if out of range
        this.currState = state;
        this.size = 'none';
        this.sizeImg1 = 'none';
        this.sizeImg2 = 'none';
        this.sizeImg3 = 'none';
        this.transForm = 'init'

      }
      console.log(this.currState)
    } else {
      this.currPosition.circleColor = ''
      this.currPosition.loc = '';
      this.currPosition.rssi = '';
      this.currPosition.id = '';
      str = ``;
      colr = 'warning';
      hdr = 'No Active Device';
      newIcon = 'alert-circle-outline';
      this.sendNotification();
    }


    this.currPosition.color = colr;
    this.currPosition.text = str;
    this.currPosition.icon = newIcon;
    this.currPosition.header = hdr;
    console.log('this.currPosition', this.currPosition)
  }
  sendNotification() {
    // Schedule a single notification
    // this.localNotifications.schedule({
    //   id: 1,
    //   text: 'BLE-Notifications',
    //   // sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
    //   data: { mydata: this.currPosition.text }
    // });
  }

  createNewBLE(e) {

  }
  ngOnDestroy() {
    this.kill()
  }
  ionViewWillLeave() {
    this.kill()
  }
  kill() {
    this.watch.unsubscribe();
    this.scanSubs.unsubscribe();
    this.subscription.unsubscribe()
  }

  isLocated(ble: any, loc: string) {
    // console.log('isLocated', ble.loc, loc)    
    // var circle = document.getElementById(loc);
    this.changeState();
    // console.log('state', circle)
    // var interval = 30;
    // var angle = 20;
    // var angle_increment = 6;
    // circle.setAttribute("stroke-dasharray", angle + ", 20000");


  }


  isShow: boolean;
  topPosToStartShowing = 100;
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  jonu(x) {
    // // console.log(x)
    // const circle = document.getElementById('IoT-Team');
    // var myTimer = document.getElementById('myTimer');
    // var interval = 30;
    // var angle = 20;
    // var angle_increment = 6;
    // // this.isLocated(this.deviceList[0], this.deviceList[0].loc)
    // // circle.setAttribute("stroke", 'blue');
    // circle.setAttribute("stroke-dasharray", angle + ", 20000");



    // circle.scrollTop += 140;


  }

  private zoomImage() {

  }
}



