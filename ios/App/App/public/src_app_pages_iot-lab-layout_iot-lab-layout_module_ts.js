"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_iot-lab-layout_iot-lab-layout_module_ts"],{

/***/ 7844:
/*!***********************************************************************!*\
  !*** ./src/app/pages/iot-lab-layout/iot-lab-layout-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IotLabLayoutPageRoutingModule": () => (/* binding */ IotLabLayoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _iot_lab_layout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iot-lab-layout.page */ 8618);




const routes = [
    {
        path: '',
        component: _iot_lab_layout_page__WEBPACK_IMPORTED_MODULE_0__.IotLabLayoutPage
    }
];
let IotLabLayoutPageRoutingModule = class IotLabLayoutPageRoutingModule {
};
IotLabLayoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IotLabLayoutPageRoutingModule);



/***/ }),

/***/ 3684:
/*!***************************************************************!*\
  !*** ./src/app/pages/iot-lab-layout/iot-lab-layout.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IotLabLayoutPageModule": () => (/* binding */ IotLabLayoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _iot_lab_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iot-lab-layout-routing.module */ 7844);
/* harmony import */ var _iot_lab_layout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iot-lab-layout.page */ 8618);







let IotLabLayoutPageModule = class IotLabLayoutPageModule {
};
IotLabLayoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _iot_lab_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.IotLabLayoutPageRoutingModule
        ],
        declarations: [_iot_lab_layout_page__WEBPACK_IMPORTED_MODULE_1__.IotLabLayoutPage]
    })
], IotLabLayoutPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_iot-lab-layout_iot-lab-layout_module_ts.js.map