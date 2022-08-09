(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 238:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 5357);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ 8181);






const option = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
};
const url = 'http://10.1.1.130:8081/mqtt';
let ApiService = class ApiService {
    constructor(http, firestore) {
        this.http = http;
        this.firestore = firestore;
    }
    getBLEList() {
        const ref = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'blelist');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collectionData)(ref);
    }
    addNewBLE(param) {
        const ref = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'blelist');
        return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(ref, param);
    }
    setLightControl(params) {
        return this.http.post(url + "/led_control", params, option).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            console.log(response);
            return response;
        }));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _iot_ble_iot_ble_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iot-ble/iot-ble.component */ 9112);
/* harmony import */ var _tab2_dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2/dynamic-layout/dynamic-layout.component */ 8966);





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
    },
    {
        path: 'iot-lab-layout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_iot-lab-layout_iot-lab-layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/iot-lab-layout/iot-lab-layout.module */ 3684)).then(m => m.IotLabLayoutPageModule)
    }, {
        path: 'setBLE', component: _iot_ble_iot_ble_component__WEBPACK_IMPORTED_MODULE_0__.IotBleComponent
    },
    {
        path: 'layout', component: _tab2_dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_1__.DynamicLayoutComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/ble/ngx */ 4280);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2942);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 1382);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/app */ 6659);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ 5357);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);










// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase)),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.getFirestore)())
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }, _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_2__.BLE],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9112:
/*!**********************************************!*\
  !*** ./src/app/iot-ble/iot-ble.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IotBleComponent": () => (/* binding */ IotBleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_iot_ble_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./iot-ble.component.html */ 1920);
/* harmony import */ var _iot_ble_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iot-ble.component.scss */ 759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 238);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2650);








let IotBleComponent = class IotBleComponent {
    constructor(toastController, api, router, activatedRoute, fb) {
        this.toastController = toastController;
        this.api = api;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.bleForm = this.fb.group({
            name: [''],
            Distance: [''],
            SNo: [''],
            active: [''],
            circleColor: [''],
            deviceColor: [''],
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            isBLEMatched: [''],
            loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            rssi: [''],
            strengthColor: [''],
        });
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(res => {
            console.log(res);
            this.bleForm.get('id').setValue(res.id);
            let name;
            (res.name) ? name = this.bleForm.get('name').setValue(res.name) : '';
            console.log(this.bleForm);
        });
    }
    submit() {
        console.log(this.bleForm);
        if (!this.bleForm.valid) {
            this.presentToast('Input missing..');
            return;
        }
        let params = {
            Distance: "0",
            SNo: 0,
            active: "In-Active",
            circleColor: "",
            deviceColor: "#3880ff",
            id: this.bleForm.get('id').value,
            isBLEMatched: false,
            loc: this.bleForm.get('loc').value,
            name: this.bleForm.get('name').value,
            rssi: 0,
            strengthColor: "medium"
        };
        this.api.addNewBLE(params).then(res => {
            console.log(res);
            this.presentToast('Your settings have been saved.');
            this.back();
        });
    }
    back() {
        this.router.navigate(['tabs/tab1']);
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
IotBleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
IotBleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-iot-ble',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_iot_ble_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder],
        styles: [_iot_ble_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IotBleComponent);



/***/ }),

/***/ 5044:
/*!*************************!*\
  !*** ./src/app/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bleDOMClass": () => (/* binding */ bleDOMClass),
/* harmony export */   "Main": () => (/* binding */ Main),
/* harmony export */   "dataparams": () => (/* binding */ dataparams)
/* harmony export */ });
const Measured_Power = -69;
class bleDOMClass {
    constructor() {
        this.name = '';
        this.id = '';
        this.active = 'In-Active';
        this.strengthColor = '';
        this.color = 'warning';
    }
    getDistance(rssi) {
        if (rssi >= -60 && rssi <= 0) {
            // this.N = 4;//not working properly, so setting by default 2
            this.N = 2;
            this.strengthColor = 'teritary';
            this.circleColor = '#3880ff';
        }
        else if (rssi < -60 && rssi >= -70) {
            // this.N = 3;
            this.N = 2;
            this.strengthColor = 'success';
            this.circleColor = '#00CC33';
        }
        else if (rssi < -70) {
            this.N = 2;
            this.strengthColor = 'warning';
            this.circleColor = '#e40000';
        }
        const distance = Math.pow(10, (Measured_Power - (rssi)) / (10 * this.N));
        this.Distance = parseFloat(distance.toFixed(2));
    }
    getNearByLocated(meter) {
        console.log(meter);
        if (meter <= .8) {
            return true;
        }
        else {
            return false;
        }
    }
}
class Main {
    constructor() {
        this.staticList = [{
                'name': 'HC-08',
                'id': '10:08:2C:21:FE:EA', 'top': 80, 'left': 125,
                'SNo': 1,
                'rssi': null,
                'strengthColor': 'medium',
                'active': 'In-Active',
                'Distance': null,
                'isBLEMatched': false,
                'loc': 'IoT-Team',
                'deviceColor': '#3880ff',
                'circleColor': ''
            },
            {
                'name': 'HC-08',
                'id': '34:14:B5:50:12:2A',
                'top': 180, 'left': 225,
                'SNo': 2,
                'rssi': null,
                'strengthColor': 'medium',
                'active': 'In-Active',
                'Distance': null,
                'isBLEMatched': false,
                'loc': 'IoT-Lab',
                'deviceColor': '#3880ff',
                'circleColor': ''
            },
            {
                'name': 'HC-08',
                'id': '34:14:B5:C5:70:E3',
                'top': 180, 'left': 50,
                'SNo': 3,
                'rssi': null,
                'active': 'in-Active',
                'strengthColor': 'medium',
                'Distance': null,
                'isBLEMatched': false,
                'loc': 'Network-Team',
                'deviceColor': '#3880ff',
                'circleColor': ''
            },
            {
                'name': 'HC-08',
                'id': 'F8:33:31:A9:E3:26',
                'top': 180, 'left': 50,
                'SNo': 4,
                'rssi': null,
                'active': 'In-Active',
                'strengthColor': 'medium',
                'Distance': null,
                'isBLEMatched': false,
                'loc': 'ISL-Entrance',
                'deviceColor': '#3880ff',
                'circleColor': ''
            }
        ];
        this.locationList = [{
                'name': 'IoT-Lab',
                'id': '',
                'x': 0.58, 'y': 0.57, z: -0.46
            },
            {
                'name': 'IoT-Team',
                'id': '',
                'x': -0.73, 'y': -0.76, z: 0.53
            },
            {
                'name': 'ISL-Pantry',
                'id': '',
                'x': 0, 'y': 0, z: 0
            },
            {
                'name': 'ISL-Hall',
                'id': '',
                'x': 0, 'y': 0, z: 0
            }
        ];
    }
}
class dataparams {
    constructor() {
        this.loading = false;
        this.data = [];
        this.overlay = false;
    }
}


/***/ }),

/***/ 1382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9691);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);






let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__.ScrollingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ],
        exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__.ScrollingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient]
    })
], SharedModule);



/***/ }),

/***/ 8966:
/*!*****************************************************************!*\
  !*** ./src/app/tab2/dynamic-layout/dynamic-layout.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicLayoutComponent": () => (/* binding */ DynamicLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dynamic_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dynamic-layout.component.html */ 6304);
/* harmony import */ var _dynamic_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-layout.component.scss */ 8109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main */ 5044);
/* harmony import */ var _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/ble/ngx */ 4280);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 7189);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _awesome_cordova_plugins_device_motion_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/device-motion/ngx */ 7521);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api.service */ 238);





// import { element } from 'protractor';



const valModel = new _main__WEBPACK_IMPORTED_MODULE_2__.Main();



// import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


let DynamicLayoutComponent = class DynamicLayoutComponent {
    constructor(renderer, api, deviceMotion, toastController, actionSheetController, modalController, geolocation, platform, ble, zone) {
        this.renderer = renderer;
        this.api = api;
        this.deviceMotion = deviceMotion;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.geolocation = geolocation;
        this.platform = platform;
        this.ble = ble;
        this.zone = zone;
        this.show = false;
        this.deviceList = [];
        this.api.getBLEList().subscribe(res => {
            if (res) {
                this.deviceList = res;
                this.show = true;
            }
        });
        // this.deviceList =valModel.staticList;
    }
    ngOnInit() { }
};
DynamicLayoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2 },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _awesome_cordova_plugins_device_motion_ngx__WEBPACK_IMPORTED_MODULE_5__.DeviceMotion },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_3__.BLE },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone }
];
DynamicLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dynamic-layout',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dynamic_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_3__.BLE, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation, _awesome_cordova_plugins_device_motion_ngx__WEBPACK_IMPORTED_MODULE_5__.DeviceMotion],
        styles: [_dynamic_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DynamicLayoutComponent);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: '',
    firebase: {
        apiKey: "AIzaSyA1TArnI9A1XjWL7Cjpfj36PJrAPz5V0kg",
        authDomain: "bleapp-a7449.firebaseapp.com",
        projectId: "bleapp-a7449",
        storageBucket: "bleapp-a7449.appspot.com",
        messagingSenderId: "874663814266",
        appId: "1:874663814266:web:30a1baa380d657a57a47c3",
        measurementId: "G-NYCVKYB3ZW"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		158,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 1920:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/iot-ble/iot-ble.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      Devices details \n    </ion-title>\n  </ion-toolbar>\n</ion-header> \n<ion-content>\n\n<ion-card>\n  <form [formGroup]=\"bleForm\">\n    <ion-item>\n      <ion-label position=\"floating\">Device Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Device Id/MAC</ion-label>\n      <ion-input type=\"text\" formControlName=\"id\" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Location</ion-label>\n      <ion-input type=\"text\" formControlName=\"loc\"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-tab-button color=\"success\" (click)=\"submit()\">\n        <ion-icon name=\"checkmark-sharp\"></ion-icon>\n       </ion-tab-button>\n    </ion-item> -->\n\n  </form>\n</ion-card>\n</ion-content>\n<ion-tab-bar class=\"r-footer\" color=\"secondary\" slot=\"bottom\">\n  <ion-tab-button color=\"success\" (click)=\"back()\">\n    <ion-icon name=\"arrow-back-sharp\"></ion-icon>\n    <!-- <ion-label >Exit</ion-label> -->\n  </ion-tab-button>          \n  <ion-tab-button color=\"success\" (click)=\"submit()\">\n    <ion-icon name=\"checkmark-sharp\"></ion-icon>\n    <!-- <ion-label >Save</ion-label> -->\n  </ion-tab-button>\n\n</ion-tab-bar>");

/***/ }),

/***/ 6304:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/dynamic-layout/dynamic-layout.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content color=\"light\" [fullscreen]=\"true\">\n\n\n  <!-- <div [style.top.px]=\"locationList[0].x\" [style.left.px]=\"locationList[0].y\" class=\"myble\">\n    BLE\n  </div> -->\n\n  <div class=\"zoom-box\">\n    <div  appZoom id=\"layout\" class=\"div1 layout\">\n      <img  appDragdrop width=\"500\"  height=\"250\" src=\"assets/activeBLE.png\" />\n\n      <div *ngFor=\"let a of deviceList\" class=\"square\">\n        {{a.id}}\n        <img  appDragdrop width=\"500\"  height=\"250\" src=\"assets/activeBLE.png\" />\n\n      </div>\n      <!-- My First CSS Example -->\n      <!-- <span appDragdrop class=\"span1\">IoT Team</span> -->\n      <span class=\"span1\">Lab</span>\n      <!-- <p>This is a paragraph.</p> -->\n    </div>\n\n\n  </div>\n\n\n\n  <div *ngIf=\"deviceList.length>0 && currPosition.lat\" class=\"position\">\n    <ion-card class=\"bottom-cnt\">\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-start\">\n          <ion-col class=\"ion-no-padding\">\n            <ion-card-header class=\"ion-no-padding\">{{currPosition.header}}</ion-card-header>\n            <!-- <ion-button (click)=\"changeState()\">sdsds</ion-button> -->\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"currPosition.rssi\" class=\"ion-justify-content-start\">\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <div style=\"height: 100%;display: flex;flex-direction: row;align-items: center;justify-content: center;\">\n              <ion-icon [color]=\"currPosition.color\" size=\"large\" name=\"bluetooth-outline\"></ion-icon>\n\n            </div>\n          </ion-col>\n\n          <ion-col size=\"10\">\n            <ion-card-content>\n              {{currPosition.text}}\n\n            </ion-card-content>\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-card-content class=\"ion-no-padding\" color=\"dark\" *ngIf=\"currPosition.rssi && currState\">\n              <ion-card-subtitle>\n                <ion-badge color=\"success\">\n\n                  Curr. Location : {{currPosition.loc}}\n                </ion-badge>\n              </ion-card-subtitle>\n            </ion-card-content>\n          </ion-col>\n\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n  </div>\n\n  <!-- <div *ngIf=\"currPosition.lat\" class=\"loc-position\">\n    <ion-col class=\"ion-no-padding\" size=\"12\">\n      <div class=\"flexcss\">\n        <div>\n          <ion-badge>\n            X : {{currPosition.x?currPosition.x:'86876667676'}}\n          </ion-badge>\n        </div>\n        <div>\n          <ion-badge>\n\n            Y : {{currPosition.y?currPosition.y:'.4336656323'}}\n          </ion-badge>\n        </div>\n        <div>\n          <ion-badge>\n            Z : {{currPosition.z?currPosition.z:'09978675446'}}\n          </ion-badge>\n        </div>\n      </div>\n    </ion-col>\n  </div> -->\n\n</ion-content>");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 759:
/*!************************************************!*\
  !*** ./src/app/iot-ble/iot-ble.component.scss ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpb3QtYmxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 8109:
/*!*******************************************************************!*\
  !*** ./src/app/tab2/dynamic-layout/dynamic-layout.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  position: relative;\n}\n\n.swiper-zoom-container {\n  transition: 0.5s all;\n}\n\n.myble {\n  position: absolute;\n  z-index: 3;\n  background: #ddd;\n}\n\n.swiper-wrapper {\n  background-color: #fff !important;\n}\n\nsvg {\n  width: 100%;\n  height: 100%;\n}\n\n.defaultZoom {\n  transform: translate3d(-24px, 197px, 0px) scale(1.8);\n}\n\n.zoomBLE1 {\n  transform: translate3d(-24px, 197px, 0px) scale(2.8);\n}\n\n.layout {\n  position: relative;\n  height: 100%;\n  background-image: url(\"/assets/office-layout.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  transition: 0.5s all;\n}\n\n.ion-chip {\n  position: relative;\n  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.ion-chip .chip-tooltip {\n  position: absolute;\n  z-index: 6;\n  top: -25px;\n  width: 100%;\n}\n\n.inner-chip {\n  display: flex;\n  flex-direction: column;\n}\n\n.inner-chip ion-card-subtitle {\n  color: #fff;\n}\n\n.position {\n  width: 100%;\n  position: absolute;\n  z-index: 32;\n  bottom: 55px;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 0px;\n  transition: 0.5s all;\n}\n\n.bottom-cnt {\n  background: #5260ff;\n  color: #fff;\n}\n\n.bottom-cnt ion-card-header, .bottom-cnt ion-card-subtitle {\n  color: #fff;\n}\n\n.loc-position {\n  left: 0px;\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  z-index: 32;\n  top: 0px;\n  padding: 2px 5px;\n  width: 100%;\n  transition: 0.5s all;\n}\n\nion-slides {\n  width: 100%;\n}\n\n.swiper-slide img {\n  width: 100%;\n  max-width: 100%;\n}\n\n.square {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  height: 50px;\n  background-color: royalblue;\n}\n\n.square img {\n  width: 25px;\n  height: 25px;\n}\n\n.zoom-box {\n  position: absolute;\n  height: 90%;\n  top: 0px;\n  padding-top: 20px;\n  display: flex;\n  width: 100%;\n  background-color: #fff;\n  transition: 0.5s all;\n}\n\n.card-img {\n  position: relative;\n}\n\n.device {\n  position: absolute;\n  z-index: 6;\n}\n\nion-card-subtitle ion-badge {\n  color: #000;\n}\n\n#IoT-TeamImg {\n  position: relative;\n}\n\n.flexcss {\n  display: flex;\n  flex-direction: column;\n}\n\n.flexcss ion-badge {\n  color: #bae22b;\n  --ion-background-color: transparent;\n  background-color: transparent;\n  letter-spacing: 3px;\n}\n\n#hel {\n  position: relative;\n}\n\n#hel::after, #IoT-TeamImg::after {\n  position: absolute;\n  width: 120px;\n  height: 40px;\n  background: red;\n}\n\n.animatCicle {\n  position: absolute;\n  width: 120px;\n  height: 40px;\n  background: red;\n}\n\n.div1 {\n  position: relative;\n}\n\n.span1 {\n  position: absolute;\n  z-index: 3;\n  width: min-100px;\n  background: red;\n}\n\n.div1 span:first-child {\n  background: blue !important;\n  left: 40%;\n}\n\n.div1 span:nth-child(2) {\n  right: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksaUNBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBS0o7O0FBRkE7RUFDSSxvREFBQTtBQUtKOztBQUhBO0VBQ0ksb0RBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBT0o7O0FBREk7RUFDSSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSVI7O0FBRlE7RUFDSSxrQkFBQTtFQUFtQixVQUFBO0VBQVcsVUFBQTtFQUFVLFdBQUE7QUFPcEQ7O0FBSEk7RUFDSSxhQUFBO0VBQWMsc0JBQUE7QUFPdEI7O0FBTlE7RUFDSSxXQUFBO0FBUVo7O0FBTEE7RUFDSSxXQUFBO0VBQ0csa0JBQUE7RUFDSCxXQUFBO0VBQ0EsWUFBQTtFQUVBLDhCQUFBO0VBQ0EsWUFBQTtFQUlBLG9CQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtFQUFvQixXQUFBO0FBTXhCOztBQUxJO0VBQ0ksV0FBQTtBQU9SOztBQUpBO0VBQ0ksU0FBQTtFQUFVLDhCQUFBO0VBQ1Ysa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQWlCLFdBQUE7RUFDakIsb0JBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBV0o7O0FBVkc7RUFBSSxXQUFBO0VBQ0EsWUFBQTtBQWFQOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBRUEsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7RUFBbUIsVUFBQTtBQWN2Qjs7QUFUSTtFQUNJLFdBQUE7QUFZUjs7QUFUQTtFQUNJLGtCQUFBO0FBWUo7O0FBUkE7RUFDSSxhQUFBO0VBQWMsc0JBQUE7QUFZbEI7O0FBWEk7RUFDSSxjQUFBO0VBQWtCLG1DQUFBO0VBQ2xCLDZCQUFBO0VBQWtDLG1CQUFBO0FBZTFDOztBQVpBO0VBQ0ksa0JBQUE7QUFlSjs7QUFiQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZ0JKOztBQWRBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFpQko7O0FBZEE7RUFDSSxrQkFBQTtBQWlCSjs7QUFmSTtFQUNBLGtCQUFBO0VBQWtCLFVBQUE7RUFDbEIsZ0JBQUE7RUFDQSxlQUFBO0FBbUJKOztBQWhCSTtFQUNBLDJCQUFBO0VBRUEsU0FBQTtBQWtCSjs7QUFoQkk7RUFDSSxTQUFBO0FBbUJSIiwiZmlsZSI6ImR5bmFtaWMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnN3aXBlci16b29tLWNvbnRhaW5lcntcclxuICAgIHRyYW5zaXRpb246IC41MHMgYWxsO1xyXG59XHJcbi5teWJsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG59XHJcbi5zd2lwZXItd3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbnN2Z3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLmRlZmF1bHRab29te1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjRweCwgMTk3cHgsIDBweCkgc2NhbGUoMS44KTtcclxufVxyXG4uem9vbUJMRTF7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNHB4LCAxOTdweCwgMHB4KSBzY2FsZSgyLjgpO1xyXG59XHJcbi5sYXlvdXR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL29mZmljZS1sYXlvdXQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG59XHJcbiNsYXlvdXR7XHJcblxyXG59XHJcblxyXG4gICAgLmlvbi1jaGlwe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0YjZjYjcgMCUsICMxODI4NDggMTAwJSk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICBcclxuICAgICAgICAuY2hpcC10b29sdGlwe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ei1pbmRleDogNjt0b3A6LTI1cHg7d2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICAuaW5uZXItY2hpcHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4ucG9zaXRpb257XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMjtcclxuICAgIGJvdHRvbTogNTVweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjQpO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OjAgMXB4IDJweCAjMDAwO1xyXG4gICAgLy8gLW1vei1ib3gtc2hhZG93OjAgMXB4IDJweCAjMDAwO1xyXG4gICAgLy8gYm94LXNoYWRvdzowIDFweCAycHggIzAwMDtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbn1cclxuLmJvdHRvbS1jbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTI2MGZmO2NvbG9yOiNmZmY7XHJcbiAgICBpb24tY2FyZC1oZWFkZXIsaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgIH1cclxufVxyXG4ubG9jLXBvc2l0aW9ue1xyXG4gICAgbGVmdDogMHB4O2JhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMzI7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHBhZGRpbmc6IDJweCA1cHg7d2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgYWxsO1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkIHJlZFxyXG59XHJcbi5zcXVhcmUge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcclxuICAgaW1ne3dpZHRoOiAyNXB4O1xyXG4gICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICB9XHJcbiAgfVxyXG4gIFxyXG4uem9vbS1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA5MCU7ICAgXHJcbiAgICAvLyAgdG9wOiA1MHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IC41cyBhbGw7XHJcbn1cclxuLmNhcmQtaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kZXZpY2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ei1pbmRleDogNjtcclxuICAgIC8vICB3aWR0aDogMTM1cHg7XHJcblxyXG59XHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgaW9uLWJhZGdle1xyXG4gICAgICAgIGNvbG9yOiMwMDA7XHJcbiAgICB9XHJcbn1cclxuI0lvVC1UZWFtSW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmZsZXhjc3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBpb24tYmFkZ2V7XHJcbiAgICAgICAgY29sb3I6I2JhZTIyYjsgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB9XHJcbn1cclxuI2hlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jaGVsOjphZnRlciwjSW9ULVRlYW1JbWc6OmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmVkOyBcclxufVxyXG4uYW5pbWF0Q2ljbGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbi5kaXYxe1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmVcclxuICAgIH1cclxuICAgIC5zcGFuMXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MztcclxuICAgIHdpZHRoOm1pbi0xMDBweDtcclxuICAgIGJhY2tncm91bmQ6cmVkO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuZGl2MSBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDpibHVlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIGxlZnQ6NDAlXHJcbiAgICB9XHJcbiAgICAuZGl2MSBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgICAgICByaWdodDozJVxyXG4gICAgICAgIH1cclxuICAgICAgICAiXX0= */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map