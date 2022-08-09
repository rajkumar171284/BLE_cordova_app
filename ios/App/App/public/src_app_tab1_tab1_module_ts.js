"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 617:
/*!**********************************************!*\
  !*** ./src/app/bl-list/bl-list.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlListComponent": () => (/* binding */ BlListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bl_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bl-list.component.html */ 2861);
/* harmony import */ var _bl_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bl-list.component.scss */ 9833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/ble/ngx */ 4280);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main */ 5044);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 7189);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ 238);










const valModel = new _main__WEBPACK_IMPORTED_MODULE_3__.Main();
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';
// import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
let BlListComponent = class BlListComponent {
    constructor(router, api, platform, geolocation, ble, zone) {
        this.router = router;
        this.api = api;
        this.platform = platform;
        this.geolocation = geolocation;
        this.ble = ble;
        this.zone = zone;
        this.dataParams = new _main__WEBPACK_IMPORTED_MODULE_3__.dataparams();
        this.isScanned = false;
        this.allDevices = [];
        this.deviceList = [];
        this.listStatus = 'a';
        this.currPosition = {};
        this.stateSuccess = function (device) {
            console.log('rssi' + device);
        };
        this.stateFailure = function (device) {
            console.log('rssi' + device);
        };
    }
    ionViewWillEnter() {
        console.log("ionViewWillEnter");
    }
    ngOnInit() {
        this.isScanned = false;
        this.dataParams.data = valModel.staticList.map((x, i) => {
            return x;
        });
        this.deviceList = this.dataParams.data;
        // this.api.getBLEList().subscribe(res => {
        //   if (res) {
        //     this.dataParams.data = res;
        //     console.log(this.dataParams.data)
        //     this.deviceList = this.dataParams.data;
        //   }
        // })
        console.log(this.deviceList);
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
    ngOnChanges(changes) {
        this.isScanned = false;
        // this.deviceList = [];
    }
    scan() {
        this.isScanned = true;
        // console.log('Start scanning');
        this.platform.ready().then(() => {
            let watch = this.geolocation.watchPosition({ enableHighAccuracy: true, timeout: 10000 });
            watch.subscribe((data) => {
                // console.log(data)
                if (data && data.coords) {
                    this.allDevices = [];
                    this.currPosition.lat = data.coords.latitude;
                    this.currPosition.lng = data.coords.longitude;
                    this.currPosition.datetime = data.coords.timestamp;
                    this.ble.scan([], 5).subscribe(res => this.updatedata(res), error => this.scanError(error)
                    // this.ble.startStateNotifications().subscribe(state => {
                    //   // console.log('state', state)
                    //   if (res.id) {
                    //     // this.ble.read(res.id).then
                    //     // this.ble.readRSSI(res.id)
                    //   }
                    // })
                    );
                    setTimeout(() => { this.setStatus('Scan complete'); }, 5000);
                    // setTimeout(this.setStatus('Scan complete'), 5000, 'Scan complete');
                }
            });
            // 
        });
    }
    // If location permission is denied, you'll end up here
    scanError(error) {
        console.log(error);
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
    getRSSI(deviceId) {
        this.ble.readRSSI(deviceId).then(result => {
            console.log('result', result);
        });
    }
    updatedata(x) {
        // console.log('upt', x)
        this.zone.run(() => {
            // this.filterList(x);
            const list = this.formatList(x);
            this.allDevices.push(list);
            // console.log(this.allDevices)
            this.deviceList = this.allDevices.map(ble => {
                let index = this.dataParams.data.findIndex(item => {
                    return item.id == ble.id;
                });
                if (index != -1) {
                    // found
                    const newBLE = this.dataParams.data[index];
                    ble.isBLEMatched = true;
                    ble.color = 'success';
                    ble.active = 'Active';
                }
                else {
                    ble.isBLEMatched = false;
                    ble.color = 'warning';
                    ble.active = 'in-Active';
                }
                return ble;
            });
            // console.log(this.allDevices)
        });
        console.log('this.deviceList', this.deviceList);
    }
    formatList(x) {
        // console.log('x', x)
        if (x.id) {
            x.isBLEMatched = false;
            let newlist = new _main__WEBPACK_IMPORTED_MODULE_3__.bleDOMClass();
            newlist.id = x.id;
            newlist.rssi = x.rssi;
            newlist.name = x.name ? x.name : '';
            newlist.getDistance(x.rssi);
            newlist.color = 'warning';
            newlist.isBLEMatched = false;
            newlist.active = 'In-Active';
            return newlist;
        }
    }
    // selectBLE(item: any) {
    //   if (item) {
    //     this.router.navigate(['setBLE'],{
    //       queryParams:item
    //     })
    //   }
    // }
    stopScan(e) {
        e.stopPropagation();
        this.isScanned = false;
        this.ble.stopScan().then(() => {
            this.isScanned = false;
            clearInterval(this.interval);
            clearInterval(this.interval2);
        });
    }
    ngOnDestroy() {
        this.kill();
    }
    ionViewWillLeave() {
        this.kill();
    }
    kill() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.interval2) {
            clearInterval(this.interval2);
        }
    }
    getListbyStatus(status) {
        this.listStatus = status;
    }
};
BlListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_2__.BLE },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone }
];
BlListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-bl-list',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bl_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_2__.BLE, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation],
        styles: [_bl_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlListComponent);



/***/ }),

/***/ 3473:
/*!*******************************!*\
  !*** ./src/app/order.pipe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPipe": () => (/* binding */ OrderPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


let OrderPipe = class OrderPipe {
    transform(arr, order) {
        // console.log('bfore', arr, order)
        if (arr.length > 0) {
            if (order.toLowerCase() === 'active') {
                return arr.filter(a => a.isBLEMatched == true);
            }
            return arr;
        }
    }
};
OrderPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'order', pure: false
    })
], OrderPipe);



/***/ }),

/***/ 8383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8383);
/* harmony import */ var _bl_list_bl_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bl-list/bl-list.component */ 617);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 1382);
/* harmony import */ var _order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order.pipe */ 3473);
/* harmony import */ var _iot_ble_iot_ble_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../iot-ble/iot-ble.component */ 9112);












let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page, _bl_list_bl_list_component__WEBPACK_IMPORTED_MODULE_3__.BlListComponent, _order_pipe__WEBPACK_IMPORTED_MODULE_5__.OrderPipe, _iot_ble_iot_ble_component__WEBPACK_IMPORTED_MODULE_6__.IotBleComponent]
    })
], Tab1PageModule);



/***/ }),

/***/ 2371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 2817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 8443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab1',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 2861:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/bl-list/bl-list.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n\n\n  <div [ngClass]=\"{'flex-container-scanned':isScanned,'flex-container-init':!isScanned}\" class=\"flex-container\">\n    <ion-label *ngIf=\"!isScanned\" class=\"ion-margin-bottom slogan\">A Better way to\n      <ion-card-subtitle color=\"light\">TRACK <ion-icon size=\"large\" name=\"analytics-outline\"></ion-icon>\n      </ion-card-subtitle>\n      your Devices\n    </ion-label>\n\n\n    <div (click)=\"scan()\" [ngClass]=\"{'flex-scaning':isScanned,'flex-init':!isScanned}\" class=\"flex-content \">\n      <ion-label color=\"light\">\n        <!-- <ion-icon name=\"scan-outline\"></ion-icon>   -->\n        {{isScanned?'Scanning ...':''}}\n        <ion-icon color=\"light\" size=\"large\" *ngIf=\"!isScanned\" name=\"scan-outline\"></ion-icon>\n        <!-- {{data.length}} -->\n      </ion-label>\n      <ion-button slot=\"end\" *ngIf=\"isScanned\" color=\"medium\" (click)=\"stopScan($event)\">\n        <!-- <ion-icon name=\"scan-outline\"></ion-icon>   -->\n        Stop\n\n      </ion-button>\n    </div>\n  </div>\n  <!-- <div class=\"flex-container2\"> -->\n\n\n  <!-- <div class=\"wbg\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-badge (click)=\"getListbyStatus('a')\">\n            <ion-card-subtitle color=\"light\">\n              {{deviceList.length?'All Device(s)':isScanned && deviceList.length==0?'No Device Found':''}}\n            </ion-card-subtitle>\n          </ion-badge>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-badge (click)=\"getListbyStatus('Active')\">\n            <ion-card-subtitle color=\"light\">\n              {{deviceList.length?'Active':isScanned && deviceList.length==0?'No Device Found':''}}\n            </ion-card-subtitle>\n          </ion-badge>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid>\n  </div> -->\n  <div class=\"wbg2\">\n    <cdk-virtual-scroll-viewport minBufferPx=\"200\" maxBufferPx=\"400\" itemSize=\"50\">\n<!-- (click)=\"!item.loc?selectBLE(item):''\" for feature apply -->\n      <ion-card  *cdkVirtualFor=\"let item of deviceList\" [color]=\"item.isBLEMatched?'mybg':'shade1'\">\n\n        <ion-grid>\n          <ion-row class=\"ion-justify-content-start\">\n            <ion-col size=\"2\">\n              <div>\n                <ion-img src=\"assets/inactiveBLE.png\"></ion-img>\n              </div>\n            </ion-col>\n\n            <ion-col size=\"8\">\n              <div>\n\n                <ion-card-header class=\"ion-no-padding\">\n\n                  <ion-card-subtitle>{{item.id}}</ion-card-subtitle>\n                </ion-card-header>\n\n                <ion-card-content class=\"ion-no-padding\">\n                  <ion-card-subtitle>RSSI:{{item.rssi}}</ion-card-subtitle>\n                  <ion-card-subtitle slot=\"end\">\n                    {{ item.name?item.name:'' }}\n\n                  </ion-card-subtitle>\n                  <ion-card-subtitle>\n                    {{ item.Distance?'at':'' }} {{ item.Distance?item.Distance:'' }}\n                    {{ item.Distance?'meters':'' }}\n\n                  </ion-card-subtitle>\n\n                </ion-card-content>\n\n              </div>\n            </ion-col>\n\n            <ion-col size=\"2\">\n              <div>\n                <ion-icon size=\"large\" [color]=\"item.strengthColor\" name=\"cellular-outline\"></ion-icon>\n                <!-- <ion-icon *ngIf=\"item.isBLEMatched\" size=\"large\" [color]=\"item.color\"\n                        name=\"checkmark-circle-outline\">\n                      </ion-icon> -->\n                <!-- <ion-card-subtitle>{{item.isBLEMatched?'Match Found':'No Match'}}\n                  </ion-card-subtitle> -->\n\n              </div>\n              <!-- <div *ngIf=\"!item.loc\">\n                <ion-text color=\"primary\">Add</ion-text>\n              </div> -->\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </ion-card>\n\n\n    </cdk-virtual-scroll-viewport>\n  </div>\n  <!-- </div> -->\n</ion-content>");

/***/ }),

/***/ 2817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-title size=\"small\">\n      BLE TRACKER\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"small\">\n        BLE TRACKER    \n          <!-- <ion-img class=\"logo\" src=\"assets/logo.png\"></ion-img> -->\n\n      </ion-title>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <app-bl-list ></app-bl-list>\n</ion-content>\n");

/***/ }),

/***/ 9833:
/*!************************************************!*\
  !*** ./src/app/bl-list/bl-list.component.scss ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  background: linear-gradient(45deg, #00CED1, #5A4FCF);\n}\n\n.flex-container {\n  display: flex;\n  background: linear-gradient(45deg, #9966bb, #565cd8);\n  transition: 0.3s all;\n}\n\n.flex-container2 {\n  display: flex;\n  background: linear-gradient(45deg, #fff, #f3f3f3);\n  transition: 0.3s all;\n}\n\n.flex-container-init {\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-container-scanned {\n  height: 10%;\n  flex-direction: column;\n  justify-content: top;\n  align-items: center;\n}\n\n.flex-content {\n  display: flex;\n  transition: 0.3s all;\n}\n\n.flex-init {\n  text-transform: uppercase;\n  text-shadow: 0 1px 2px #000;\n  height: 12.5em;\n  width: 50%;\n  background: dodgerblue;\n  border-radius: 50%;\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 1px 2px #000;\n}\n\n.flex-scaning {\n  background: transparent;\n  height: 6em;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\n\ncdk-virtual-scroll-viewport {\n  height: 100%;\n  width: 100%;\n  --ion-background-color:#fff;\n}\n\nion-card ion-card-subtitle {\n  color: #444;\n}\n\n.wbg {\n  background-color: #fff;\n}\n\n.wbg2 {\n  background-color: #fff;\n  height: 100%;\n  padding-bottom: 2em;\n}\n\n.icondiv {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n\n.slogan {\n  color: #bae22b;\n  font-size: 2em;\n  transition: 0.3s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvREFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxpREFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQ0E7RUFDQSxhQUFBO0VBQ0Msb0JBQUE7QUFFRDs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFFQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsMkJBQUE7QUFGSjs7QUFJRTtFQUNJLFdBQUE7QUFETjs7QUFHRTtFQUNFLHNCQUFBO0FBQUo7O0FBR0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNJLGNBQUE7RUFBYyxjQUFBO0VBQWMsb0JBQUE7QUFJbEMiLCJmaWxlIjoiYmwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwMENFRDEsICM1QTRGQ0YpO1xyXG5cclxufVxyXG4uZmxleC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM5OTY2YmIsICM1NjVjZDgpO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGFsbDsgICBcclxufVxyXG4uZmxleC1jb250YWluZXIye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmLCAjZjNmM2YzKTtcclxuICAgIHRyYW5zaXRpb246IC4zcyBhbGw7ICAgXHJcbn1cclxuLmZsZXgtY29udGFpbmVyLWluaXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgXHJcbn1cclxuLmZsZXgtY29udGFpbmVyLXNjYW5uZWR7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgXHJcbn1cclxuXHJcblxyXG4uZmxleC1jb250ZW50e1xyXG5kaXNwbGF5OiBmbGV4OyAgICBcclxuIHRyYW5zaXRpb246IC4zcyBhbGw7ICAgXHJcbn1cclxuXHJcbi5mbGV4LWluaXR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LXNoYWRvdzowIDFweCAycHggIzAwMDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMi41ZW07XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogZG9kZ2VyYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6MCAxcHggMnB4ICMwMDA7XHJcbn1cclxuXHJcblxyXG4uZmxleC1zY2FuaW5ne1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDZlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxufVxyXG5cclxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgLy8gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDBDRUQxLCAjNUE0RkNGKTtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgaW9uLWNhcmQgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgIGNvbG9yOiM0NDRcclxuICB9XHJcbiAgLndiZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIFxyXG4gIH1cclxuICAud2JnMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgfVxyXG4gIC5pY29uZGl2e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5zbG9nYW57XHJcbiAgICAgIGNvbG9yOiNiYWUyMmI7Zm9udC1zaXplOjJlbTt0cmFuc2l0aW9uOiAuM3MgYWxsO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map