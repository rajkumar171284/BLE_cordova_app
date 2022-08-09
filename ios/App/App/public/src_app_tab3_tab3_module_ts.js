"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 7242:
/*!**********************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPanelComponent": () => (/* binding */ ControlPanelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_control_panel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./control-panel.component.html */ 950);
/* harmony import */ var _control_panel_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-panel.component.scss */ 8754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 238);





let ControlPanelComponent = class ControlPanelComponent {
    constructor(api) {
        this.api = api;
        this.setValue = false;
    }
    ngOnInit() { }
    setCtrl(e) {
        this.setValue = !this.setValue;
        // console.log(this.setValue)
        let p = {
            message: this.setValue
        };
        this.api.setLightControl(p).subscribe(res => {
            console.log(res);
        });
    }
};
ControlPanelComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ControlPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-control-panel',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_control_panel_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_control_panel_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ControlPanelComponent);



/***/ }),

/***/ 8058:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 2308);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 7586:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 2308);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 8058);
/* harmony import */ var _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../control-panel/control-panel.component */ 7242);










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page, _control_panel_control_panel_component__WEBPACK_IMPORTED_MODULE_3__.ControlPanelComponent]
    })
], Tab3PageModule);



/***/ }),

/***/ 2308:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 8752);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 4170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _D_raj_iot_ionicProjects_BLE_cordova_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 950:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/control-panel/control-panel.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-label color=\"warning\">Set Light Controls</ion-label>\n      <ion-toggle [checked]=\"setValue\" (ionChange)=\"setCtrl($event)\" ></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-card> -->\n\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-card class=\"switches\" color=\"switch1\">\n\n         \n          <div  class=\"ion-text-center\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-icon class=\"icon\" size=\"large\" [color]=\"setValue?'warning':'dark'\" name=\"bulb-outline\"></ion-icon>\n            </ion-col>\n           \n\n            \n          </div>\n          <div>\n            <ion-toggle [checked]=\"setValue\" (ionChange)=\"setCtrl($event)\" ></ion-toggle>\n            {{setValue?'On':'Off'}}\n          </div>\n     \n\n        <!-- <ion-list color=\"switch1\">                \n          <ion-item color=\"switch1\" class=\"ion-text-center\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-icon class=\"icon\" size=\"large\" [color]=\"setValue?'warning':'dark'\" name=\"bulb-outline\"></ion-icon>\n            </ion-col>\n           \n\n            \n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-toggle [checked]=\"setValue\" (ionChange)=\"setCtrl($event)\" ></ion-toggle>\n            {{setValue?'On':'Off'}}\n          </ion-item>\n        </ion-list> -->\n\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"switches\" color=\"switch2\" >\n                     \n        <div  class=\"ion-text-center\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-icon class=\"icon\" size=\"large\" [color]=\"setValue?'warning':'medium'\" name=\"medical-outline\"></ion-icon>\n            </ion-col>\n            \n          </div>\n          <div lines=\"none\">\n            <ion-toggle disabled [checked]=\"setValue\" (ionChange)=\"setCtrl($event)\" ></ion-toggle>\n            Off\n          </div>\n       \n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"switches\" color=\"switch3\" >\n                 \n          <div class=\"ion-text-center\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-icon class=\"icon\" size=\"large\" [color]=\"setValue?'warning':'medium'\" name=\"desktop-outline\"></ion-icon>\n            </ion-col>\n            \n          </div>\n          <div>\n            <ion-toggle disabled [checked]=\"setValue\" (ionChange)=\"setCtrl($event)\" ></ion-toggle>\n            Off\n          </div>\n       \n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card class=\"switches\" color=\"switch4\">\n    \n          \n      \n          <div class=\"ion-text-center\">\n            <ion-col size=\"12\" class=\"ion-text-center\">\n              <ion-icon class=\"icon\" size=\"large\" [color]=\"setValue?'warning':'medium'\" name=\"albums-outline\"></ion-icon>\n            </ion-col>\n            \n          </div>\n          <div>\n            <ion-toggle disabled [checked]=\"setValue\" (ionChange)=\"setCtrl($event)\" ></ion-toggle>\n            Off\n          </div>\n     \n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ 8752:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      My Controls\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">My Controls</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- <app-explore-container name=\"Tab 3 page\"></app-explore-container> -->\n  <app-control-panel></app-control-panel>\n</ion-content>\n");

/***/ }),

/***/ 8754:
/*!************************************************************!*\
  !*** ./src/app/control-panel/control-panel.component.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".switches div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n  padding: 0.5em;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 35px;\n  vertical-align: middle;\n}\n\n.switch1 {\n  --ion-background-color:#8EBBFD !important;\n}\n\n.switch2 {\n  --ion-background-color:#d7c19d !important;\n}\n\n.switch3 {\n  --ion-background-color:#96DED1 !important;\n}\n\n.switch4 {\n  --ion-background-color:#FFB2FF !important;\n}\n\n:root {\n  --ion-color-switch1: #8EBBFD;\n  --ion-color-switch1-rgb: 142,187,253;\n  --ion-color-switch1-contrast: #000000;\n  --ion-color-switch1-contrast-rgb: 0,0,0;\n  --ion-color-switch1-shade: #7da5df;\n  --ion-color-switch1-tint: #99c2fd;\n}\n\n.ion-color-switch1 {\n  --ion-color-base: var(--ion-color-switch1);\n  --ion-color-base-rgb: var(--ion-color-switch1-rgb);\n  --ion-color-contrast: var(--ion-color-switch1-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-switch1-contrast-rgb);\n  --ion-color-shade: var(--ion-color-switch1-shade);\n  --ion-color-tint: var(--ion-color-switch1-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQWMsdUJBQUE7RUFDZixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNIOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBRUEsc0JBQUE7QUFGSjs7QUFLQTtFQUNJLHlDQUFBO0FBRko7O0FBS0E7RUFDSSx5Q0FBQTtBQUZKOztBQUtBO0VBQ0kseUNBQUE7QUFGSjs7QUFLQTtFQUNJLHlDQUFBO0FBRko7O0FBSUE7RUFDQyw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFERDs7QUFJQTtFQUNDLDBDQUFBO0VBQ0Esa0RBQUE7RUFDQSx1REFBQTtFQUNBLCtEQUFBO0VBQ0EsaURBQUE7RUFDQSwrQ0FBQTtBQUREIiwiZmlsZSI6ImNvbnRyb2wtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN3aXRjaGVzIGRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgIHBhZGRpbmc6IC41ZW07XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgXHJcbn1cclxuLmljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgLy8gY29sb3I6ICNmZkM5Nzc7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICB9XHJcblxyXG4uc3dpdGNoMXtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzhFQkJGRCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpdGNoMntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2Q3YzE5ZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpdGNoM3tcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6Izk2REVEMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpdGNoNHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0ZGQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcbjpyb290IHtcclxuXHQtLWlvbi1jb2xvci1zd2l0Y2gxOiAjOEVCQkZEO1xyXG5cdC0taW9uLWNvbG9yLXN3aXRjaDEtcmdiOiAxNDIsMTg3LDI1MztcclxuXHQtLWlvbi1jb2xvci1zd2l0Y2gxLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG5cdC0taW9uLWNvbG9yLXN3aXRjaDEtY29udHJhc3QtcmdiOiAwLDAsMDtcclxuXHQtLWlvbi1jb2xvci1zd2l0Y2gxLXNoYWRlOiAjN2RhNWRmO1xyXG5cdC0taW9uLWNvbG9yLXN3aXRjaDEtdGludDogIzk5YzJmZDtcclxufVxyXG5cclxuLmlvbi1jb2xvci1zd2l0Y2gxIHtcclxuXHQtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc3dpdGNoMSk7XHJcblx0LS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zd2l0Y2gxLXJnYik7XHJcblx0LS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zd2l0Y2gxLWNvbnRyYXN0KTtcclxuXHQtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zd2l0Y2gxLWNvbnRyYXN0LXJnYik7XHJcblx0LS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zd2l0Y2gxLXNoYWRlKTtcclxuXHQtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3dpdGNoMS10aW50KTtcclxufVxyXG5cclxuIl19 */";

/***/ }),

/***/ 4170:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map