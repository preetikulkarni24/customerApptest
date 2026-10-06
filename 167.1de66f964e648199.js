"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[167],{

/***/ 17500
/*!**************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/definitions.js ***!
  \**************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ },

/***/ 4970
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/firebase-analytics/dist/esm/index.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalytics: () => (/* binding */ FirebaseAnalytics)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 17500);

const FirebaseAnalytics = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("FirebaseAnalytics", {
  web: () => __webpack_require__.e(/*! import() */ 4496).then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 24496)).then(m => new m.FirebaseAnalyticsWeb())
});


//# sourceMappingURL=index.js.map

/***/ },

/***/ 89442
/*!****************************************************************************!*\
  !*** ./src/app/add-existing-passenger/add-existing-passenger.component.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddExistingPassengerComponent: () => (/* binding */ AddExistingPassengerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
var _AddExistingPassengerComponent;














function AddExistingPassengerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No Passengers Details Present! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 12)(1, "ion-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template_ion_checkbox_click_1_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectPassenger(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AddExistingPassengerComponent_ion_list_10_ion_item_1_Template_ion_checkbox_ngModelChange_1_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](i_r2.checked, $event) || (i_r2.checked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label")(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", i_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r2.title, " .", i_r2.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2.email);
  }
}
function AddExistingPassengerComponent_ion_list_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddExistingPassengerComponent_ion_list_10_ion_item_1_Template, 7, 4, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.travellersList);
  }
}
function AddExistingPassengerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddExistingPassengerComponent_div_11_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.addTraveller());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class AddExistingPassengerComponent {
  constructor(loader, util, theme, ex, commonStorage, commonService, apiFactory, modalController, dateService, navCtrl, route, router, globalData, modalCtrl, navParams) {
    this.loader = loader;
    this.util = util;
    this.theme = theme;
    this.ex = ex;
    this.commonStorage = commonStorage;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.modalController = modalController;
    this.dateService = dateService;
    this.navCtrl = navCtrl;
    this.route = route;
    this.router = router;
    this.globalData = globalData;
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.selectedPassengers = [];
    // this.commonService.gTrack('addexistingpassenger');
    this.travellerlength = navParams.get('travellerLength');
    this.selectedPassengers = navParams.get('passengerList');
    this.getPassengerList();
    // this.commonService.gTrack('addExistingPassenger','“Add existing customer” is clicked')
  }
  ngOnInit() {}
  getPassengerList() {
    this.apiFactory.travellersList().subscribe(result => {
      this.loader.hideLoadingDefault();
      if (typeof result.code == "undefined") {
        this.travellersList = result.travellers_list;
        this.travellersList.forEach(value => {
          value['checked'] = false;
        });
        this.selectedPassengers.forEach(s => {
          if (s.checked) {
            this.travellersList.forEach(t => {
              if (s.id == t.id) t['checked'] = s.checked;
            });
          }
        });
      } else {
        setTimeout(() => {
          this.util.showAlert('', result.message);
        });
      }
    }, err => {
      this.loader.hideLoadingDefault();
      if (!this.util.isConnected()) {} else {}
    });
  }
  selectPassenger(data) {
    if (data.checked != true) {
      this.selectedPassengers.push(data);
    } else {
      let newArray = this.selectedPassengers.filter(function (el) {
        return el.id !== data.id;
      });
      this.selectedPassengers = newArray;
    }
  }
  addTraveller() {
    if (this.selectedPassengers.length > this.travellerlength) {
      this.util.showAlert('', "you can't select more than " + this.travellerlength + " passenger");
      return false;
    } else {
      this.dismiss();
      return false;
    }
  }
  dismiss() {
    this.modalCtrl.dismiss(this.selectedPassengers);
  }
}
_AddExistingPassengerComponent = AddExistingPassengerComponent;
_AddExistingPassengerComponent.ɵfac = function AddExistingPassengerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AddExistingPassengerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_3__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_5__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_6__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_8__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_11__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_13__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams));
};
_AddExistingPassengerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _AddExistingPassengerComponent,
  selectors: [["app-add-existing-passenger"]],
  decls: 12,
  vars: 3,
  consts: [["mode", "md", 1, "bg-cl"], ["slot", "end"], ["mode", "md", 3, "click"], ["name", "close", "color", "default"], [1, "head"], [1, "bg-content"], [1, "center-div"], ["style", "font-weight:bolder;margin-top: 16px", 4, "ngIf"], [4, "ngIf"], ["padding", "", 4, "ngIf"], [2, "font-weight", "bolder", "margin-top", "16px"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], [2, "margin-top", "5px", "margin-right", "10px", 3, "click", "ngModelChange", "ngModel"], [1, "txt-bp-name"], [1, "txt-bp-adrss"], ["padding", ""], ["mode", "md", "expand", "block", 1, "login-btn", 3, "click"]],
  template: function AddExistingPassengerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddExistingPassengerComponent_Template_ion_button_click_3_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add Existing Passenger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AddExistingPassengerComponent_div_9_Template, 2, 0, "div", 7)(10, AddExistingPassengerComponent_ion_list_10_Template, 2, 1, "ion-list", 8)(11, AddExistingPassengerComponent_div_11_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.travellersList.length < 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.travellersList.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedPassengers.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
  styles: [".head[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  margin: 0;\n}\n\n.bg-cl[_ngcontent-%COMP%] {\n  --background: #ffdd21 !important;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  left: 10px;\n  right: 10px;\n  text-transform: initial;\n  --background: #ed3237;\n  font-family: NotoSans;\n  font-weight: bolder;\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  height: 50px;\n  border-radius: 4px;\n}"]
});

/***/ },

/***/ 96536
/*!********************************************************************!*\
  !*** ./src/app/blacklisted-dialog/blacklisted-dialog.component.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlacklistedDialogComponent: () => (/* binding */ BlacklistedDialogComponent)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 70600);
var _BlacklistedDialogComponent;




class BlacklistedDialogComponent {
  constructor(modalCtrl, params) {
    this.modalCtrl = modalCtrl;
    this.params = params;
    this.countdown = 30;
    this.message = params.get('message');
  }
  ngOnInit() {
    this.startCountdown();
  }
  startCountdown() {
    this.countdown = 30;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.goBack();
      }
    }, 1000);
  }
  goBack() {
    this.modalCtrl.dismiss("");
  }
}
_BlacklistedDialogComponent = BlacklistedDialogComponent;
_BlacklistedDialogComponent.ɵfac = function BlacklistedDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BlacklistedDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams));
};
_BlacklistedDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _BlacklistedDialogComponent,
  selectors: [["app-blacklisted-dialog"]],
  decls: 13,
  vars: 2,
  consts: [[1, "dialog-content"], [1, "header"], [1, "heading"], [1, "body"], [1, "warningMsg"], ["expand", "block", 1, "goBack", 3, "click"]],
  template: function BlacklistedDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content")(1, "div", 0)(2, "div")(3, "div", 1)(4, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Booking Not Allowed");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlacklistedDialogComponent_Template_ion_button_click_11_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " OK ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.message || "Entered Number is Blacklisted");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Automatically continuing in ", ctx.countdown, " seconds ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonicModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.IonContent],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.dialog-content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin: 16px 16px 0;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #F95959;\n}\n\n.body[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n\n.warningMsg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #F95959;\n}\n\n.goBack[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 48px;\n  --background: #2C3A45;\n  --border-radius: 0;\n}"]
});

/***/ },

/***/ 97918
/*!***********************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details-routing.module.ts ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPageRoutingModule: () => (/* binding */ PassengerDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _passenger_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passenger-details.page */ 13440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassengerDetailsPageRoutingModule;




const routes = [{
  path: '',
  component: _passenger_details_page__WEBPACK_IMPORTED_MODULE_1__.PassengerDetailsPage
}];
class PassengerDetailsPageRoutingModule {}
_PassengerDetailsPageRoutingModule = PassengerDetailsPageRoutingModule;
_PassengerDetailsPageRoutingModule.ɵfac = function PassengerDetailsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPageRoutingModule)();
};
_PassengerDetailsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PassengerDetailsPageRoutingModule
});
_PassengerDetailsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PassengerDetailsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 20167
/*!***************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details.module.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPageModule: () => (/* binding */ PassengerDetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passenger-details-routing.module */ 97918);
/* harmony import */ var _passenger_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passenger-details.page */ 13440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17705);
var _PassengerDetailsPageModule;






class PassengerDetailsPageModule {}
_PassengerDetailsPageModule = PassengerDetailsPageModule;
_PassengerDetailsPageModule.ɵfac = function PassengerDetailsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPageModule)();
};
_PassengerDetailsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _PassengerDetailsPageModule
});
_PassengerDetailsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.PassengerDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PassengerDetailsPageModule, {
    declarations: [_passenger_details_page__WEBPACK_IMPORTED_MODULE_4__.PassengerDetailsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _passenger_details_routing_module__WEBPACK_IMPORTED_MODULE_3__.PassengerDetailsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]
  });
})();

/***/ },

/***/ 13440
/*!*************************************************************!*\
  !*** ./src/app/passenger-details/passenger-details.page.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PassengerDetailsPage: () => (/* binding */ PassengerDetailsPage)
/* harmony export */ });
/* harmony import */ var _home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _add_existing_passenger_add_existing_passenger_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-existing-passenger/add-existing-passenger.component */ 89442);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 70990);
/* harmony import */ var _snack_preference_snack_preference_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snack-preference/snack-preference.page */ 66250);
/* harmony import */ var _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cities-modal/cities-modal.page */ 85960);
/* harmony import */ var _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../price-breakup/price-breakup.component */ 30072);
/* harmony import */ var _countries_countries_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../countries/countries.json */ 2660);
/* harmony import */ var _services_validator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/validator-service */ 1863);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 18530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70152);
/* harmony import */ var _auto_signup_dialog_auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auto-signup-dialog/auto-signup-dialog.page */ 48176);
/* harmony import */ var _blacklisted_dialog_blacklisted_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../blacklisted-dialog/blacklisted-dialog.component */ 96536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_global_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/global-data.service */ 7516);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/theme-service */ 99692);
/* harmony import */ var _services_authentication__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../services/authentication */ 82491);
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/date-service */ 18149);
/* harmony import */ var _services_exception__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/exception */ 91502);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/common-service */ 6036);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../services/firebase-analytics.service */ 47402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 32881);

var _PassengerDetailsPage;




























const _c0 = ["ionInputGst"];
const _c1 = () => ({
  standalone: true
});
const _c2 = () => ({
  "color": "#191966"
});
const _c3 = () => ({
  "color": "#000"
});
const _c4 = () => ({});
function PassengerDetailsPage_ng_container_0_ion_input_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_input_15_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_0_ion_select_16_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", code_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](code_r4);
  }
}
function PassengerDetailsPage_ng_container_0_ion_select_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_0_ion_select_16_ion_select_option_1_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_0_ion_item_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-toggle", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template_ion_toggle_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template_ion_toggle_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-toggle", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template_ion_toggle_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template_ion_toggle_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_0_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 43)(1, "ion-col", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-col", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Send booking details and update on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-col", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_6_Template, 1, 3, "ion-toggle", 48)(7, PassengerDetailsPage_ng_container_0_ion_row_24_ion_toggle_7_Template, 1, 3, "ion-toggle", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-cbus" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Traveller Details (For Onward Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "Contact-details-title");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ion-icon", 68);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ion-icon", 69);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_4_Template, 1, 0, "ion-icon", 66)(5, PassengerDetailsPage_ng_container_0_ion_card_25_span_6_ion_icon_5_Template, 1, 0, "ion-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r8.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", seat_r8.sex == "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", seat_r8.sex == "Mr");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r8.seat_number);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-radio-group", 70)(2, "ion-row")(3, "ion-col")(4, "ion-item", 71)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col")(8, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-radio", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-col")(13, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "ion-radio", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const seat_r8 = ctx_r9.$implicit;
    const i_r9 = ctx_r9.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", seat_r8.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r9, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r8.sex === "Mr" && !seat_r8.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r9, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r8.sex === "Ms" && !seat_r8.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Female", "");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 60)(1, "ion-col", 57)(2, "ion-item", 41)(3, "ion-input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_13_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r9, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r12]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r12);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r13.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r13.card_type);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 77)(1, "ion-item", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 77)(1, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 83)(2, "ion-item", 41)(3, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r9].value.passport_issued_date, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 85)(5, "ion-item", 41)(6, "ion-input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r9].value.passport_expiry_date, i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 87)(2, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_25_div_2_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div")(4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, PassengerDetailsPage_ng_container_0_ion_card_25_span_6_Template, 6, 3, "span", 56)(7, PassengerDetailsPage_ng_container_0_ion_card_25_span_7_Template, 4, 1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 57)(10, "ion-item", 41)(11, "ion-input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_25_Template_ion_input_keyup_11_listener($event) {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r9, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_12_Template, 17, 7, "ion-row", 1)(13, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_13_Template, 4, 0, "ion-row", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-row", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_15_Template, 4, 2, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_0_ion_card_25_ion_col_17_Template, 3, 0, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_18_Template, 7, 2, "ion-row", 1)(19, PassengerDetailsPage_ng_container_0_ion_card_25_ion_row_19_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r9 == 0 && ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("Passenger " + (i_r9 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r9].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r9].value.id_card_type == 3);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 52)(1, "ion-item", 89)(2, "ion-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-checkbox", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_26_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_26_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-checkbox" : "themeone-checkbox_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Traveller Details (For Return Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "Contact-details" : "Contact-details-title");
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ion-icon", 97);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "ion-icon", 98);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_4_Template, 1, 0, "ion-icon", 95)(5, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_ion_icon_5_Template, 1, 0, "ion-icon", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r17.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", seat_r17.sex == "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", seat_r17.sex == "Mr");
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r17.seat_number);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-radio-group", 99)(2, "ion-row")(3, "ion-col")(4, "ion-item", 100)(5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col")(8, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-radio", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-col")(13, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "ion-radio", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const seat_r17 = ctx_r18.$implicit;
    const i_r18 = ctx_r18.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r18, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r17.sex === "Mr" && !seat_r17.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r18, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r17.sex === "Ms" && !seat_r17.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Female", "");
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 101)(1, "ion-col", 87)(2, "ion-item", 41)(3, "ion-input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_13_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r18, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r21]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r21);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r22.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r22.card_type);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 81)(2, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Select Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_ng_template_4_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 77)(1, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_ng_container_3_Template, 5, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 77)(1, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 83)(2, "div")(3, "ion-item", 41)(4, "ion-input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r18].value.passport_issued_date, i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-col", 85)(6, "div")(7, "ion-item", 41)(8, "ion-input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template_ion_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r18].value.passport_expiry_date, i_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 87)(2, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_div_2_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div")(4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_6_Template, 6, 3, "span", 56)(7, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_span_7_Template, 4, 1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-row")(9, "ion-col", 57)(10, "ion-item", 41)(11, "ion-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_div_27_ion_card_1_Template_ion_input_keyup_11_listener($event) {
      const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r18, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_12_Template, 17, 6, "ion-row", 1)(13, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_13_Template, 4, 0, "ion-row", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_15_Template, 4, 2, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_col_17_Template, 3, 0, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_18_Template, 9, 2, "ion-row", 1)(19, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_ion_row_19_Template, 4, 0, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r18 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("Passenger " + (i_r18 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "cbustheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "networktheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r18].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r18].value.id_card_type == 3);
  }
}
function PassengerDetailsPage_ng_container_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_0_div_27_ion_card_1_Template, 20, 11, "ion-card", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 104)(1, "ion-col")(2, "ion-item", 105)(3, "ion-input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_28_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.address, $event) || (ctx_r1.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.address);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 41)(1, "ion-input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_5_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_5_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_6_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r28.name, " ");
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 41)(1, "ion-select", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_6_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_6_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_6_ion_select_option_2_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-icon", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 41)(1, "ion-input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_7_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_7_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r29);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 107)(1, "div", 108)(2, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Please Enter your Residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_ion_card_29_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_5_Template, 2, 3, "ion-item", 18)(6, PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_6_Template, 4, 6, "ion-item", 18)(7, PassengerDetailsPage_ng_container_0_ion_card_29_ion_item_7_Template, 2, 4, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_30_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "ion-item", 41)(2, "ion-input", 118, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_0_ion_card_30_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_30_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item", 41)(5, "ion-input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_30_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " Note: Please carry your ID proof. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_0_ion_card_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 107)(1, "ion-item", 115)(2, "ion-checkbox", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_0_ion_card_30_Template_ion_checkbox_ionChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_0_ion_card_30_Template_ion_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_0_ion_card_30_div_5_Template, 8, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-checkbox" : "themeone-checkbox_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle", (ctx_r1.metaData == null ? null : ctx_r1.metaData.msiteFolder) === "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](7, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_0_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "(Excluding VAT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_0_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "ion-row")(3, "ion-col", 124)(4, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-col", 124)(7, "p", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_div_44_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r32);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngStyle", ctx_r1.metaData.msiteFolder == "cbustheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c4));
  }
}
function PassengerDetailsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header", 2)(2, "ion-toolbar", 3)(3, "ion-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-buttons", 5)(6, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content", 7)(8, "form", 8)(9, "ion-card", 9)(10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, " Ticket details and updates will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-item", 11)(13, "ion-row", 12)(14, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_0_ion_input_15_Template, 1, 1, "ion-input", 14)(16, PassengerDetailsPage_ng_container_0_ion_select_16_Template, 2, 1, "ion-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "ion-col", 16)(18, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_0_Template_ion_input_ionInput_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, PassengerDetailsPage_ng_container_0_ion_item_19_Template, 2, 0, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "ion-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Create My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, PassengerDetailsPage_ng_container_0_ion_row_24_Template, 8, 3, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_0_ion_card_25_Template, 20, 11, "ion-card", 23)(26, PassengerDetailsPage_ng_container_0_ion_card_26_Template, 5, 2, "ion-card", 24)(27, PassengerDetailsPage_ng_container_0_div_27_Template, 2, 1, "div", 1)(28, PassengerDetailsPage_ng_container_0_ion_card_28_Template, 4, 1, "ion-card", 25)(29, PassengerDetailsPage_ng_container_0_ion_card_29_Template, 8, 4, "ion-card", 26)(30, PassengerDetailsPage_ng_container_0_ion_card_30_Template, 6, 9, "ion-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 27)(32, "ion-row", 28)(33, "ion-col", 29)(34, "div")(35, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 31)(38, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_span_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, PassengerDetailsPage_ng_container_0_span_40_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "ion-col", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_0_Template_ion_col_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](44, PassengerDetailsPage_ng_container_0_div_44_Template, 11, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-bg-cl" : "themeone-bg-cl_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-checkbox" : "themeone-checkbox_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Address"] && ctx_r1.locale.passenger_details_config["Address"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && (ctx_r1.commonStorage == null ? null : ctx_r1.commonStorage.getItem("isServiceTaxApplicable")) && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "themeone-bottom" : "themeone-bottom_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.metaData.msiteFolder == "cbustheme" ? "cbus-select-pickup-btn" : "themeone-select-pickup-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "(Round Trip)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_item_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-input", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_input_18_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r34);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_1_div_19_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", code_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", code_r35, " ");
  }
}
function PassengerDetailsPage_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 154)(1, "ion-select", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_div_19_ion_select_option_2_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "ion-icon", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_1_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_hr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 158);
  }
}
function PassengerDetailsPage_ng_container_1_ion_row_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-col", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Send booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-col", 162)(6, "ion-toggle", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_row_24_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_row_24_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 164)(1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_25_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Traveller details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template_ion_input_ionInput_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r39, 1));
    })("ionBlur", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template_ion_input_ionBlur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeBlur($event, i_r39, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_4_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r41);
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r39, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 101)(1, "ion-col")(2, "ion-item", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_3_Template, 1, 0, "ion-input", 182)(4, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_ion_input_4_Template, 1, 0, "ion-input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r45.type, " ");
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 186)(2, "ion-item", 187)(3, "ion-select", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const seat_r44 = ctx_r42.$implicit;
      const i_r39 = ctx_r42.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r39, 1, seat_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_ion_select_option_4_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "ion-icon", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_ion_col_8_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const seat_r44 = ctx_r42.$implicit;
      const i_r39 = ctx_r42.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r39, 1, seat_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 190)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 191)(4, "ion-item")(5, "ion-label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-input", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r46);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const seat_r44 = ctx_r42.$implicit;
      const i_r39 = ctx_r42.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r39, 1, seat_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_ion_col_8_Template, 5, 1, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredState[i_r39] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "input", i_r39, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredState[i_r39]);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r48 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r48]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r48);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r49.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r49.card_type);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 197)(1, "ion-item", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 197)(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 201)(2, "ion-item")(3, "ion-input", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50);
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r39].value.passport_issued_date, i_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 201)(5, "ion-item")(6, "ion-input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50);
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r39].value.passport_expiry_date, i_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 201)(8, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-input", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 205)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_1_Template, 2, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_3_Template, 2, 0, "span", 169)(4, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_4_Template, 2, 0, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_span_10_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 173)(14, "ion-input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ion_card_26_div_1_Template_ion_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38);
      const i_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r39, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-row", 175)(16, "ion-radio-group", 99)(17, "ion-row")(18, "ion-col")(19, "ion-item", 100)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-col")(23, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "ion-radio", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-col")(28, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "ion-radio", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_32_Template, 5, 2, "ion-row", 94)(33, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_33_Template, 6, 1, "ion-row", 1)(34, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_card_34_Template, 9, 4, "ion-card", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_36_Template, 4, 2, "ion-col", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_col_38_Template, 3, 0, "ion-col", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_ion_row_39_Template, 10, 2, "ion-row", 1)(40, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_div_40_Template, 3, 0, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_19_0;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const seat_r44 = ctx_r42.$implicit;
    const i_r39 = ctx_r42.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r39]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isLogin && i_r39 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r39 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r39 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r44.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", seat_r44.sex != "" && seat_r44.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r39, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r44.sex === "Mr" && !seat_r44.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r39, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r44.sex === "Ms" && !seat_r44.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx_r1.passengerForm.at(i_r39)) == null ? null : tmp_19_0.value == null ? null : tmp_19_0.value.isCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r39].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_ion_card_26_div_1_Template, 41, 19, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.passengerForm.length === ctx_r1.onwardSeatDetails.length);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 206)(1, "ion-item", 207)(2, "ion-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-checkbox", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_27_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ion_card_27_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-label", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const i_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r53, 2));
    })("ionBlur", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template_ion_input_ionBlur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54);
      const i_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeBlur($event, i_r53, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_5_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r55);
      const i_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r53, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 101)(1, "ion-col")(2, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_label_3_Template, 2, 0, "ion-label", 211)(4, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_4_Template, 1, 0, "ion-input", 212)(5, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_ion_input_5_Template, 1, 0, "ion-input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_ion_select_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r59.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r59.type);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 186)(2, "ion-select", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_Template_ion_select_ionChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r56);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const seat_r58 = ctx_r56.$implicit;
      const i_r53 = ctx_r56.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r53, 2, seat_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_ion_select_option_3_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-icon", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_ion_col_8_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const seat_r58 = ctx_r56.$implicit;
      const i_r53 = ctx_r56.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r53, 2, seat_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "ion-label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 190)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 191)(4, "ion-item")(5, "ion-label", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-input", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const seat_r58 = ctx_r56.$implicit;
      const i_r53 = ctx_r56.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r53, 2, seat_r58));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_ion_col_8_Template, 5, 1, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredStateReturn[i_r53] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "inputR", i_r53, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredStateReturn[i_r53]);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r62 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r62]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r62);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r63.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r63.card_type);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 77)(1, "ion-item", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 197)(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 201)(2, "div")(3, "ion-item")(4, "ion-input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r64);
      const i_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r53].value.passport_issued_date, i_r53));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-col", 201)(6, "div")(7, "ion-item")(8, "ion-input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template_ion_input_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r64);
      const i_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r53].value.passport_issued_date, i_r53));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "ion-col", 201)(10, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "ion-input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 205)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 166)(1, "div", 53)(2, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_5_Template, 2, 0, "span", 1)(6, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_span_6_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item")(14, "ion-input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_div_28_ion_card_1_Template_ion_input_keyup_14_listener($event) {
      const i_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r52).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r53, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-row", 175)(16, "ion-radio-group", 99)(17, "ion-row")(18, "ion-col")(19, "ion-item", 100)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-col")(23, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "ion-radio", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-col")(28, "ion-item", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "ion-radio", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_32_Template, 6, 3, "ion-row", 94)(33, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_33_Template, 5, 1, "ion-row", 1)(34, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_card_34_Template, 9, 4, "ion-card", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_36_Template, 4, 2, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_col_38_Template, 3, 0, "ion-col", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_ion_row_39_Template, 12, 2, "ion-row", 1)(40, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_div_40_Template, 3, 0, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r58 = ctx.$implicit;
    const i_r53 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r53]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r53 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r53 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r58.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r53, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r58.sex === "Mr" && !seat_r58.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r53, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r58.sex === "Ms" && !seat_r58.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.passengerFormR[i_r53].value.isCard == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r53].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_div_28_ion_card_1_Template, 41, 17, "ion-card", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_1_ion_card_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 224)(1, "ion-row")(2, "ion-col")(3, "ion-item", 125)(4, "ion-input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ion_card_29_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r65);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.address, $event) || (ctx_r1.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.address);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 229)(1, "ion-input", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_5_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_5_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r67);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_6_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r69.name, " ");
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 229)(1, "ion-select", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_6_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r68);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_6_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r68);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_6_ion_select_option_2_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 229)(1, "ion-input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_7_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r70);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_7_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r70);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 226)(1, "div", 108)(2, "p", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Please Enter your residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-icon", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r66);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_5_Template, 2, 3, "ion-item", 228)(6, PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_6_Template, 3, 6, "ion-item", 228)(7, PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_ion_item_7_Template, 2, 4, "ion-item", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "ion-item")(2, "ion-input", 234, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item")(5, "ion-input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r72);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 226)(1, "ion-item", 207)(2, "ion-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-checkbox", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r71);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r71);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_div_5_Template, 6, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_1_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_1_Template, 8, 4, "ion-card", 225)(2, PassengerDetailsPage_ng_container_1_ng_container_30_ion_card_2_Template, 6, 5, "ion-card", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable") && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
  }
}
function PassengerDetailsPage_ng_container_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "(Excluding taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "ion-row")(3, "ion-col", 124)(4, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-col", 124)(7, "p", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_div_43_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r73);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 128)(3, "ion-buttons", 5)(4, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-title", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_1_span_7_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-content", 130)(9, "form", 8)(10, "ion-card", 131)(11, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Contact details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_1_ion_item_15_Template, 2, 0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-row", 134)(17, "ion-col", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_1_ion_input_18_Template, 1, 1, "ion-input", 14)(19, PassengerDetailsPage_ng_container_1_div_19_Template, 4, 1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "ion-col", 137)(21, "ion-input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_1_Template_ion_input_ionInput_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, PassengerDetailsPage_ng_container_1_p_22_Template, 2, 0, "p", 139)(23, PassengerDetailsPage_ng_container_1_hr_23_Template, 1, 0, "hr", 140)(24, PassengerDetailsPage_ng_container_1_ion_row_24_Template, 7, 3, "ion-row", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_1_ion_card_25_Template, 5, 0, "ion-card", 141)(26, PassengerDetailsPage_ng_container_1_ion_card_26_Template, 2, 1, "ion-card", 142)(27, PassengerDetailsPage_ng_container_1_ion_card_27_Template, 5, 1, "ion-card", 143)(28, PassengerDetailsPage_ng_container_1_div_28_Template, 2, 1, "div", 1)(29, PassengerDetailsPage_ng_container_1_ion_card_29_Template, 5, 1, "ion-card", 144)(30, PassengerDetailsPage_ng_container_1_ng_container_30_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 145)(32, "div", 146)(33, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "ion-row", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_1_span_36_Template, 2, 0, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_span_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "View Breakup");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_1_Template_div_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r33);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 152)(41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "PROCEED");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, PassengerDetailsPage_ng_container_1_div_43_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name), " - ", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Address"] && ctx_r1.locale.passenger_details_config["Address"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, " ", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.globalData.RESERVATION_DATA.serviceTaxAmount && ctx_r1.appData.isIndia && !ctx_r1.hideGstText);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_2_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" (", ctx_r1.reservationData.next_day_service, ") ");
  }
}
function PassengerDetailsPage_ng_container_2_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "div", 275);
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 241)(2, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-icon", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name));
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_40_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" (", ctx_r1.reservationDataReturn.next_day_service, ") ");
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 244)(1, "ion-col", 245)(2, "div", 246)(3, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 249)(8, "p", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_2_ion_row_40_span_10_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-col", 245)(12, "div", 251)(13, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "p", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.reservationDataReturn.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationDataReturn.boardingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.mainTimeDiffrenceReturn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.reservationDataReturn.next_day_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.reservationDataReturn.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationDataReturn.droppingStage.travel_date));
  }
}
function PassengerDetailsPage_ng_container_2_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Passenger Details (For Onward Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 286)(2, "ion-input", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_48_ion_col_15_Template_ion_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r77);
      const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r76, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r79 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r79]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r79);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r80.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r80.card_type);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 186)(1, "ion-item", 288)(2, "ion-label", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_col_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 186)(1, "ion-item", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 245)(2, "ion-item", 278)(3, "ion-input", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r81);
      const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r76].value.passport_issued_date, i_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 245)(5, "ion-item", 278)(6, "ion-input", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r81);
      const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r76].value.passport_expiry_date, i_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 245)(8, "ion-item", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-input", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_2_div_48_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 294)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Enter valid ID details; otherwise, it will impact your journey or package.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 53)(2, "ion-row")(3, "ion-col", 186)(4, "div", 277)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 186)(12, "ion-item", 278)(13, "ion-input", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_48_Template_ion_input_input_13_listener($event) {
      const i_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r75).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r76, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_2_div_48_ion_col_15_Template, 3, 0, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-col", 280)(17, "ion-segment", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_48_Template_ion_segment_ngModelChange_17_listener($event) {
      const seat_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r75).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](seat_r78.sex, $event) || (seat_r78.sex = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "ion-segment-button", 282)(19, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "ion-segment-button", 283)(22, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_2_div_48_ion_col_25_Template, 6, 2, "ion-col", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, PassengerDetailsPage_ng_container_2_div_48_ion_col_27_Template, 3, 0, "ion-col", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, PassengerDetailsPage_ng_container_2_div_48_ion_row_28_Template, 10, 2, "ion-row", 1)(29, PassengerDetailsPage_ng_container_2_div_48_div_29_Template, 3, 0, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r78 = ctx.$implicit;
    const i_r76 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r76]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Passenger ", i_r76 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Seat ", seat_r78.seat_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", seat_r78.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !seat_r78.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r78.sex === "Mr" && !seat_r78.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !seat_r78.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r78.sex === "Ms" && !seat_r78.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r76].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 278)(2, "ion-input", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_15_Template_ion_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r85);
      const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r84, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r86 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r86]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r86);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r87.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r87.card_type);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 186)(1, "ion-item", 302)(2, "ion-label", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Card Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 186)(1, "ion-item", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 245)(2, "ion-item", 278)(3, "ion-input", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88);
      const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r84].value.passport_issued_date, i_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 245)(5, "ion-item", 278)(6, "ion-input", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88);
      const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r84].value.passport_issued_date, i_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 245)(8, "ion-item", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-input", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 294)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_2_div_49_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 298)(1, "div", 53)(2, "ion-row")(3, "ion-col", 186)(4, "div", 277)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 186)(12, "ion-item", 278)(13, "ion-input", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function PassengerDetailsPage_ng_container_2_div_49_div_7_Template_ion_input_input_13_listener($event) {
      const i_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r83).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r84, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_15_Template, 3, 0, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-col", 280)(17, "ion-segment", 300)(18, "ion-segment-button", 282)(19, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "ion-segment-button", 283)(22, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_25_Template, 6, 2, "ion-col", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_col_27_Template, 3, 0, "ion-col", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, PassengerDetailsPage_ng_container_2_div_49_div_7_ion_row_28_Template, 10, 2, "ion-row", 1)(29, PassengerDetailsPage_ng_container_2_div_49_div_7_div_29_Template, 3, 0, "div", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r89 = ctx.$implicit;
    const i_r84 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r84]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Passenger ", i_r84 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Seat ", seat_r89.seat_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !seat_r89.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r89.sex === "Mr" && !seat_r89.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !seat_r89.sexOptional ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r89.sex === "Ms" && !seat_r89.sexOptional ? "ourbus_gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]("Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r84].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "ion-item", 207)(2, "ion-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-checkbox", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_49_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r82);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_div_49_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r82);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Passenger details (For Return Journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_2_div_49_div_7_Template, 30, 14, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 240)(1, "ion-row")(2, "ion-col", 186)(3, "ion-item", 278)(4, "ion-input", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_50_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r90);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.address, $event) || (ctx_r1.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.address);
  }
}
function PassengerDetailsPage_ng_container_2_ion_item_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-input", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_2_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "ion-item", 308)(2, "ion-label", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-input", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.selectedCountry.dialCode);
  }
}
function PassengerDetailsPage_ng_container_2_div_65_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 312)(1, "ion-label", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-input", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_65_ion_item_1_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedCountry.flag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r1.selectedCountry.dialCode);
  }
}
function PassengerDetailsPage_ng_container_2_div_65_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 312)(1, "ion-label", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-input", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_65_ion_item_2_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_div_65_ion_item_2_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r92);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.dialCodeSelected, $event) || (ctx_r1.dialCodeSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.flagSelected, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dialCodeSelected);
  }
}
function PassengerDetailsPage_ng_container_2_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_65_ion_item_1_Template, 4, 2, "ion-item", 311)(2, PassengerDetailsPage_ng_container_2_div_65_ion_item_2_Template, 4, 2, "ion-item", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selectedCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.selectedCountry);
  }
}
function PassengerDetailsPage_ng_container_2_ion_row_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 316)(1, "ion-col", 317)(2, "ion-checkbox", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_ion_row_70_Template_ion_checkbox_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r93);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_row_70_Template_ion_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r93);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-col", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Share booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 264)(1, "ion-input", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_7_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_7_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r95);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_10_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r97.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r97.name, " ");
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 278)(1, "ion-select", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_10_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r96);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_10_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r96);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_10_ion_select_option_2_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 264)(1, "ion-input", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_13_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_13_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r98);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 240)(1, "div", 108)(2, "p", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Please enter your residential location details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-icon", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_ion_card_71_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r94);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-row")(6, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_7_Template, 2, 3, "ion-item", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-row")(9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_10_Template, 3, 6, "ion-item", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-row")(12, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, PassengerDetailsPage_ng_container_2_ion_card_71_ion_item_13_Template, 2, 5, "ion-item", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "ion-item", 331)(2, "ion-input", 332, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item", 331)(5, "ion-input", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r100);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 240)(1, "ion-item", 326)(2, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Enter GST Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-toggle", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_72_Template_ion_toggle_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_72_Template_ion_toggle_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_ion_card_72_div_5_Template, 6, 6, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_73_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 330)(1, "ion-item", 331)(2, "ion-input", 332, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_2_ion_card_73_div_5_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r102);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_73_div_5_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r102);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item", 331)(5, "ion-input", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_73_div_5_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r102);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_2_ion_card_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 240)(1, "ion-item", 326)(2, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Enter GST Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-toggle", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_2_ion_card_73_Template_ion_toggle_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r101);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_2_ion_card_73_Template_ion_toggle_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r101);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_2_ion_card_73_div_5_Template, 6, 6, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_2_div_81_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 335)(1, "ion-col", 124)(2, "span", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 337)(5, "span", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r103].toFixed(2), "");
  }
}
function PassengerDetailsPage_ng_container_2_div_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_81_ion_row_1_Template, 7, 3, "ion-row", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r103 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.fareBreakup_hash[key_r103] != 0 && key_r103 != "Payble Amount" && key_r103 != "Total Fare" && key_r103 != "e-Booking Discount");
  }
}
function PassengerDetailsPage_ng_container_2_div_83_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 339)(1, "ion-col", 124)(2, "span", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Amount Payable");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 337)(5, "span", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const key_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, "", ctx_r1.fareBreakup_hash[key_r104].toFixed(2), "");
  }
}
function PassengerDetailsPage_ng_container_2_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_2_div_83_ion_row_1_Template, 7, 2, "ion-row", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", key_r104 == "Payble Amount");
  }
}
function PassengerDetailsPage_ng_container_2_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "ion-row")(3, "ion-col", 342)(4, "p", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-col", 124)(7, "p", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_div_87_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r105);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " As per the Govt new GST Rule-46, Passengers are Mandated to provide their residential State, City and Pin Code details for the booking. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header", 238)(2, "ion-toolbar", 128)(3, "ion-row")(4, "ion-col", 162)(5, "ion-buttons")(6, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 239)(8, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Booking Summary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-content", 238)(11, "form", 8)(12, "ion-card", 240)(13, "div")(14, "ion-row")(15, "ion-col", 241)(16, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "ion-icon", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "ion-row", 244)(22, "ion-col", 245)(23, "div", 246)(24, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "p", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "ion-col", 249)(29, "p", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_2_span_31_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "ion-col", 245)(33, "div", 251)(34, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "p", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, PassengerDetailsPage_ng_container_2_div_38_Template, 1, 0, "div", 252)(39, PassengerDetailsPage_ng_container_2_ion_row_39_Template, 7, 2, "ion-row", 1)(40, PassengerDetailsPage_ng_container_2_ion_row_40_Template, 17, 6, "ion-row", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "ion-card", 240)(42, "ion-row")(43, "ion-col", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](44, "ion-icon", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "ion-col", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, PassengerDetailsPage_ng_container_2_span_46_Template, 2, 0, "span", 1)(47, PassengerDetailsPage_ng_container_2_span_47_Template, 2, 0, "span", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, PassengerDetailsPage_ng_container_2_div_48_Template, 30, 15, "div", 258)(49, PassengerDetailsPage_ng_container_2_div_49_Template, 8, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, PassengerDetailsPage_ng_container_2_ion_card_50_Template, 5, 1, "ion-card", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "ion-card", 240)(52, "div", 53)(53, "ion-row")(54, "ion-col", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "ion-icon", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "ion-col", 256)(57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, "Contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "ion-row")(60, "ion-col", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, PassengerDetailsPage_ng_container_2_ion_item_61_Template, 2, 0, "ion-item", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "ion-row")(63, "ion-col", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](64, PassengerDetailsPage_ng_container_2_div_64_Template, 6, 3, "div", 1)(65, PassengerDetailsPage_ng_container_2_div_65_Template, 3, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "ion-col", 263)(67, "ion-item", 264)(68, "ion-input", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_2_Template_ion_input_ionInput_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](70, PassengerDetailsPage_ng_container_2_ion_row_70_Template, 5, 3, "ion-row", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](71, PassengerDetailsPage_ng_container_2_ion_card_71_Template, 14, 3, "ion-card", 259)(72, PassengerDetailsPage_ng_container_2_ion_card_72_Template, 6, 4, "ion-card", 259)(73, PassengerDetailsPage_ng_container_2_ion_card_73_Template, 6, 4, "ion-card", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "ion-card", 267)(75, "ion-row", 268)(76, "ion-col", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](77, "ion-icon", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "ion-col", 270)(79, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](81, PassengerDetailsPage_ng_container_2_div_81_Template, 2, 1, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](82, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](83, PassengerDetailsPage_ng_container_2_div_83_Template, 2, 1, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "ion-footer", 273)(85, "ion-button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_2_Template_ion_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r74);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86, " Continue to Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](87, PassengerDetailsPage_ng_container_2_div_87_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.reservationData.boardingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationData.boardingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.mainTimeDiffrence, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.reservationData.next_day_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.reservationData.droppingStage.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.getFormatDate(ctx_r1.reservationData.droppingStage.travel_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Address"] && ctx_r1.locale.passenger_details_config["Address"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isReturn && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn && (ctx_r1.commonStorage.getItem("isServiceTaxApplicableReturn") || ctx_r1.commonStorage.getItem("isServiceTaxApplicable")));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.getObjectKeys(ctx_r1.fareBreakup_hash));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "(Round Trip)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_ion_item_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-input", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_ion_input_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_ion_input_20_Template_ion_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r107);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.selected_Country_code);
  }
}
function PassengerDetailsPage_ng_container_3_ion_select_21_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", code_r108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" +", code_r108, " ");
  }
}
function PassengerDetailsPage_ng_container_3_ion_select_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_ion_select_21_ion_select_option_1_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_3_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "SMS shall not be sent to an international number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_hr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "hr", 158);
  }
}
function PassengerDetailsPage_ng_container_3_ion_row_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 380)(1, "ion-col", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-col", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Send booking details and updates on Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-col", 381)(6, "ion-toggle", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_row_27_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r109);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_row_27_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r109);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_29_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r110);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Traveller details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 60)(1, "ion-col")(2, "ion-item", 376)(3, "ion-input", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_30_ion_row_33_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r113);
      const i_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r112, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r114 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r114]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r114);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r115.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r115.card_type);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-icon", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 201)(2, "ion-item", 398)(3, "ion-input", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template_ion_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r116);
      const i_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r112].value.passport_issued_date, i_r112));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-col", 201)(5, "ion-item", 398)(6, "ion-input", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r116);
      const i_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r112].value.passport_expiry_date, i_r112));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 201)(8, "ion-item", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "ion-input", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_3_div_30_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 403)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Enter valid ID details; otherwise, it will impact your journey or package.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_div_30_div_1_Template, 2, 0, "div", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, PassengerDetailsPage_ng_container_3_div_30_span_3_Template, 2, 0, "span", 1)(4, PassengerDetailsPage_ng_container_3_div_30_span_4_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_3_div_30_span_10_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 376)(14, "ion-input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_30_Template_ion_input_keyup_14_listener($event) {
      const i_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r111).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r112, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-row")(16, "ion-radio-group", 386)(17, "ion-row")(18, "ion-col", 245)(19, "ion-item", 359)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-col", 245)(23, "ion-item", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "ion-radio", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-label", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-col", 245)(28, "ion-item", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "ion-radio", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "ion-label", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "hr", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, PassengerDetailsPage_ng_container_3_div_30_ion_row_33_Template, 4, 0, "ion-row", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_3_div_30_ion_col_35_Template, 5, 2, "ion-col", 194)(36, PassengerDetailsPage_ng_container_3_div_30_ion_col_36_Template, 3, 0, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_3_div_30_ion_row_37_Template, 10, 2, "ion-row", 1)(38, PassengerDetailsPage_ng_container_3_div_30_div_38_Template, 3, 0, "div", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const seat_r117 = ctx.$implicit;
    const i_r112 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r112]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isLogin && i_r112 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r112 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r112 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r117.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", seat_r117.sex !== "" && seat_r117.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", seat_r117.sex !== "" && !seat_r117.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r117.sex === "Mr" && !seat_r117.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", seat_r117.sex !== "" && !seat_r117.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r117.sex === "Ms" && !seat_r117.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r112].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 404)(1, "ion-item", 359)(2, "ion-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-checkbox", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_31_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r118);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_31_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r118);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Primary Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Co-Passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 101)(1, "ion-col")(2, "ion-item", 398)(3, "ion-input", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_32_Template_ion_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r121);
      const i_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r120, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r122 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r122]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r122);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r123.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r123.card_type);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_2_Template, 3, 1, "ng-container", 1)(3, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_ng_container_3_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-icon", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "ion-item", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ion-input", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 201)(2, "div")(3, "ion-item", 398)(4, "ion-input", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template_ion_input_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r124);
      const i_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r120].value.passport_issued_date, i_r120));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-col", 201)(6, "div")(7, "ion-item", 398)(8, "ion-label", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-input", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template_ion_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r124);
      const i_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r120].value.passport_issued_date, i_r120));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-col", 201)(12, "ion-item", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "ion-input", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 403)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 363)(1, "div", 53)(2, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_5_Template, 2, 0, "span", 1)(6, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_span_6_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Seat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-row")(12, "ion-col")(13, "ion-item", 398)(14, "ion-input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_div_32_ion_card_1_Template_ion_input_keyup_14_listener($event) {
      const i_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r119).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r120, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "ion-row")(16, "ion-radio-group", 386)(17, "ion-row")(18, "ion-col", 245)(19, "ion-item", 359)(20, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-col", 262)(23, "ion-item", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "ion-radio", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-col", 407)(28, "ion-item", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "ion-radio", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "ion-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_32_Template, 4, 0, "ion-row", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_34_Template, 5, 2, "ion-col", 194)(35, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_col_35_Template, 3, 0, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_ion_row_36_Template, 14, 2, "ion-row", 1)(37, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_div_37_Template, 3, 0, "div", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r125 = ctx.$implicit;
    const i_r120 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r120]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r120 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r120 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r125.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", seat_r125.sex !== "" && !seat_r125.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r125.sex === "Mr" && !seat_r125.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", seat_r125.sex !== "" && !seat_r125.sexOptional);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r125.sex === "Ms" && !seat_r125.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] !== "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r120].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_3_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_div_32_ion_card_1_Template, 38, 13, "ion-card", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 412)(1, "ion-col")(2, "ion-item", 413)(3, "ion-input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_33_Template_ion_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r126);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.address, $event) || (ctx_r1.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.address);
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 418)(1, "ion-input", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_5_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_5_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_34_ion_select_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r129.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r129.name, " ");
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 418)(1, "ion-input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_11_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r130);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_11_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r130);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 414)(1, "div", 108)(2, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Please Enter your residential Location Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-icon", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_ion_card_34_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r127);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_5_Template, 2, 3, "ion-item", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-item", 416)(7, "ion-label", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "ion-select", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_card_34_Template_ion_select_ionChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r127);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_34_Template_ion_select_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r127);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PassengerDetailsPage_ng_container_3_ion_card_34_ion_select_option_10_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, PassengerDetailsPage_ng_container_3_ion_card_34_ion_item_11_Template, 2, 4, "ion-item", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](8, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_3_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 420)(1, "ion-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "I am booking for business travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-checkbox", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_3_ion_item_35_Template_ion_checkbox_ionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r131);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_item_35_Template_ion_checkbox_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r131);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "ion-item", 398)(2, "ion-input", 423, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_3_ion_card_36_div_1_Template_ion_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r132);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_36_div_1_Template_ion_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r132);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item", 398)(5, "ion-input", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_3_ion_card_36_div_1_Template_ion_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r132);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_3_ion_card_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 422);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_3_ion_card_36_div_1_Template, 6, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_3_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "(Excluding taxes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_3_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "ion-row")(3, "ion-col", 124)(4, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-col", 124)(7, "p", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_div_51_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r133);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header")(2, "ion-toolbar", 128)(3, "ion-buttons", 346)(4, "ion-back-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_Template_ion_back_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r106);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-title", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Passenger Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-title", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, PassengerDetailsPage_ng_container_3_span_9_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-content", 349)(11, "form", 8)(12, "ion-card", 350)(13, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Contact details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, PassengerDetailsPage_ng_container_3_ion_item_17_Template, 2, 0, "ion-item", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "ion-row", 354)(19, "ion-col", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, PassengerDetailsPage_ng_container_3_ion_input_20_Template, 1, 1, "ion-input", 356)(21, PassengerDetailsPage_ng_container_3_ion_select_21_Template, 2, 1, "ion-select", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "ion-col", 358)(23, "ion-item", 359)(24, "ion-input", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_3_Template_ion_input_ionInput_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r106);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, PassengerDetailsPage_ng_container_3_p_25_Template, 2, 0, "p", 361)(26, PassengerDetailsPage_ng_container_3_hr_26_Template, 1, 0, "hr", 140)(27, PassengerDetailsPage_ng_container_3_ion_row_27_Template, 7, 3, "ion-row", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "ion-card", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, PassengerDetailsPage_ng_container_3_div_29_Template, 5, 0, "div", 1)(30, PassengerDetailsPage_ng_container_3_div_30_Template, 39, 15, "div", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_3_ion_card_31_Template, 5, 1, "ion-card", 365)(32, PassengerDetailsPage_ng_container_3_div_32_Template, 2, 1, "div", 1)(33, PassengerDetailsPage_ng_container_3_ion_card_33_Template, 4, 1, "ion-card", 366)(34, PassengerDetailsPage_ng_container_3_ion_card_34_Template, 12, 9, "ion-card", 367)(35, PassengerDetailsPage_ng_container_3_ion_item_35_Template, 4, 3, "ion-item", 368)(36, PassengerDetailsPage_ng_container_3_ion_card_36_Template, 2, 1, "ion-card", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "ion-card", 370)(38, "ion-row")(39, "ion-col", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, PassengerDetailsPage_ng_container_3_div_41_Template, 2, 0, "div", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "ion-col", 245)(43, "span", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "div", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "ion-footer")(47, "div", 374)(48, "div", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_3_Template_div_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r106);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, "Proceed to pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, PassengerDetailsPage_ng_container_3_div_51_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.originCity.name), " - ", ctx_r1.commaSeparate(ctx_r1.globalData.SEARCH_DATA.destCity.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Address"] && ctx_r1.locale.passenger_details_config["Address"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.commonStorage && ctx_r1.commonStorage.localGet("serviceDetails").is_service_tax_applicable && ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.globalData.RESERVATION_DATA.serviceTaxAmount && ctx_r1.appData.isIndia && !ctx_r1.hideGstText);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r1.currencySym, " ", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
function PassengerDetailsPage_ng_container_4_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 442);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_18_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r135);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectCountry_code());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.selected_Country_code || "+91", " ");
  }
}
function PassengerDetailsPage_ng_container_4_ion_select_19_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const code_r136 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", code_r136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](code_r136);
  }
}
function PassengerDetailsPage_ng_container_4_ion_select_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select", 443);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ion_select_19_ion_select_option_1_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.AllowedCountryCodes);
  }
}
function PassengerDetailsPage_ng_container_4_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " SMS shall not be sent to an international number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "ion-input", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 447)(1, "ion-col", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-col", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Send booking details and updates on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 162)(8, "ion-toggle", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ion_row_25_Template_ion_toggle_ionChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r137);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onChangeWhatsappSwitch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ion_row_25_Template_ion_toggle_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r137);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.isWPSwitchOn, $event) || (ctx_r1.isWPSwitchOn = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isWPSwitchOn);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 166)(1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Traveller details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_26_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r138);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.addExistingPass());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Add existing passenger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Passenger ", i_r140 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Passenger ", i_r140 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Reserved for female");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_col_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 462)(1, "div", 463);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 207)(4, "ion-input", 464);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_col_31_Template_ion_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r141);
      const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r140, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r145.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r145.type, " ");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 186)(2, "ion-item", 187)(3, "ion-select", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r142);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const seat_r144 = ctx_r142.$implicit;
      const i_r140 = ctx_r142.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r140, 1, seat_r144));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_ion_select_option_4_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "ion-icon", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 467);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_ion_col_8_Template_ion_item_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r147);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      const seat_r144 = ctx_r142.$implicit;
      const i_r140 = ctx_r142.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r140, 1, seat_r144));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 468);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 465)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 191)(4, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-item", 445)(7, "ion-input", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r146);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const seat_r144 = ctx_r142.$implicit;
      const i_r140 = ctx_r142.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r140, 1, seat_r144));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_ion_col_8_Template, 5, 1, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredState[i_r140] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "input", i_r140, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredState[i_r140]);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r148 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r148]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r148);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r149 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r149.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r149.card_type);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 191)(1, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("size", ctx_r1.metaData.idCardTypes && ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide" ? "6" : "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "ID Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 472);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_1_Template, 6, 3, "ion-col", 469)(2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_ion_col_2_Template, 5, 0, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 201)(2, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-item", 445)(5, "ion-input", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template_ion_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r150);
      const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(1, ctx_r1.passengerForm[i_r140].value.passport_issued_date, i_r140));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-col", 201)(7, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "ion-item", 445)(10, "ion-input", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template_ion_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r150);
      const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDate(2, ctx_r1.passengerForm[i_r140].value.passport_expiry_date, i_r140));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-col", 201)(12, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Place of issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-item", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "ion-input", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 476)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_2_Template, 2, 1, "span", 168)(3, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_3_Template, 2, 1, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 451);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "img", 452);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_span_9_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 87)(12, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-item", 445)(15, "ion-input", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template_ion_input_keyup_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139);
      const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r140, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div")(17, "ion-row", 186)(18, "ion-col", 454)(19, "ion-radio-group", 99)(20, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 455)(23, "ion-item", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template_ion_item_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139);
      const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.passengerForm[i_r140].controls["sex"].setValue("Mr"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "ion-radio", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-label", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-item", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template_ion_item_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r139);
      const i_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.passengerForm[i_r140].controls["sex"].setValue("Ms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "ion-radio", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "ion-label", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_col_31_Template, 5, 0, "ion-col", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_32_Template, 6, 1, "ion-row", 1)(33, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_card_33_Template, 9, 4, "ion-card", 460)(34, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_34_Template, 3, 2, "ion-row", 1)(35, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_ion_row_35_Template, 16, 2, "ion-row", 1)(36, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_div_36_Template, 3, 0, "div", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_18_0;
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const seat_r144 = ctx_r142.$implicit;
    const i_r140 = ctx_r142.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerForm[i_r140]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r140 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r140 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r144.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", seat_r144.sex != "" && seat_r144.sex === "Ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r140, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r144.sex === "Mr" && !seat_r144.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r140, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r144.sex === "Ms" && !seat_r144.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx_r1.passengerForm.at(i_r140)) == null ? null : tmp_18_0.value == null ? null : tmp_18_0.value.isCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerForm[i_r140].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ion_card_27_div_1_Template, 37, 17, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.passengerForm.length === ctx_r1.onwardSeatDetails.length);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 477)(1, "ion-item", 207)(2, "ion-label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Copy Onward Details To Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-checkbox", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ion_card_28_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r151);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.copyData, $event) || (ctx_r1.copyData = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ion_card_28_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r151);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.copyDataToReturn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copyData);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Traveller details (For return journey)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Passenger ", i_r153 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Passenger ", i_r153 + 1, "");
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_ion_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-input", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_ion_input_4_Template_ion_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r154);
      const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onAgeChange($event, i_r153, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 462)(1, "div", 463);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_ion_input_4_Template, 1, 0, "ion-input", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r158 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r158.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r158.type);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 186)(2, "ion-item", 187)(3, "ion-select", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r155);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const seat_r157 = ctx_r155.$implicit;
      const i_r153 = ctx_r155.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onConcessionChange($event, i_r153, 2, seat_r157));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_ion_select_option_4_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "ion-icon", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.concessions_category);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_ion_col_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 467);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_ion_col_8_Template_ion_item_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r160);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      const seat_r157 = ctx_r155.$implicit;
      const i_r153 = ctx_r155.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails(null, i_r153, 2, seat_r157));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 190)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 191)(4, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Card Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-item", 445)(7, "ion-input", 482);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_Template_ion_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r159);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const seat_r157 = ctx_r155.$implicit;
      const i_r153 = ctx_r155.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cardDetails($event, i_r153, 2, seat_r157));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_ion_col_8_Template, 5, 1, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("size", ctx_r1.cardValidationRequiredStateReturn[i_r153] ? 6 : 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("id", "inputR", i_r153, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.cardValidationRequiredStateReturn[i_r153]);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r161 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.metaData.idCardTypes[key_r161]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r161);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.object.keys(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", key_r162.card_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](key_r162.card_type);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-select", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_ng_template_2_Template, 2, 2, "ng-template", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.metaData.idCardTypes);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 191)(1, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "ID Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_4_Template, 3, 1, "ng-container", 1)(5, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_ng_container_5_Template, 3, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("size", ctx_r1.metaData.idCardTypes && ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] != "Hide" ? "6" : "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isArray(ctx_r1.metaData.idCardTypes));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-col", 124)(1, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "ID Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "ion-input", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 201)(2, "div")(3, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-item", 445)(6, "ion-input", 485);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template_ion_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r163);
      const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(1, ctx_r1.passengerFormR[i_r153].value.passport_issued_date, i_r153));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-col", 201)(8, "div")(9, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Expiry Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "ion-item", 445)(12, "ion-input", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template_ion_input_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r163);
      const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.selectPassportDateR(2, ctx_r1.passengerFormR[i_r153].value.passport_issued_date, i_r153));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "ion-col", 201)(14, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Place of issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-item", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "ion-input", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("readonly", true);
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 476)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " Enter valid ID details; otherwise, it will impact your journey or package. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r152 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 166)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_2_Template, 2, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_4_Template, 2, 1, "span", 168)(5, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_span_5_Template, 2, 1, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 451);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "img", 452);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "ion-row")(11, "ion-col", 87)(12, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "ion-item", 445)(15, "ion-input", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template_ion_input_keyup_15_listener($event) {
      const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r152).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onInputChange($event, i_r153, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div")(17, "ion-row", 186)(18, "ion-col", 454)(19, "ion-radio-group", 99)(20, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 455)(23, "ion-item", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template_ion_item_click_23_listener() {
      const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r152).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.passengerForm[i_r153].controls["sex"].setValue("Mr"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "ion-radio", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ion-label", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "ion-item", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template_ion_item_click_27_listener() {
      const i_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r152).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.passengerForm[i_r153].controls["sex"].setValue("Ms"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "ion-radio", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "ion-label", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_31_Template, 5, 1, "ion-col", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_32_Template, 6, 1, "ion-row", 1)(33, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_card_33_Template, 9, 4, "ion-card", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_35_Template, 6, 3, "ion-col", 469)(36, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_col_36_Template, 5, 0, "ion-col", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_ion_row_37_Template, 18, 2, "ion-row", 1)(38, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_div_38_Template, 3, 0, "div", 479);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seat_r157 = ctx.$implicit;
    const i_r153 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.passengerFormR[i_r153]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r153 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r153 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r153 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](seat_r157.seat_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r153, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r157.sex === "Mr" && !seat_r157.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Male", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r1.isDisabled(i_r153, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", seat_r157.sex === "Ms" && !seat_r157.sexOptional ? "gender" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", "Female", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Age"] && ctx_r1.locale.passenger_details_config["Age"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.concessions_category && ctx_r1.concessions_category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.passengerFormR[i_r153].value.isCard == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id No"] && ctx_r1.locale.passenger_details_config["Id No"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.showCardTypes && ctx_r1.passengerFormR[i_r153].value.id_card_type == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.idCardTypes && (ctx_r1.metaData.showCardTypes || ctx_r1.locale && ctx_r1.locale.passenger_details_config["Id Type"] && ctx_r1.locale.passenger_details_config["Id Type"] != "Hide"));
  }
}
function PassengerDetailsPage_ng_container_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_div_29_ion_card_1_Template, 39, 18, "ion-card", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.returnSeatDetails);
  }
}
function PassengerDetailsPage_ng_container_4_ion_card_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 166)(1, "ion-row")(2, "ion-col", 87)(3, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-item", 445)(6, "ion-input", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ion_card_30_Template_ion_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r164);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.address, $event) || (ctx_r1.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.address);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Pin Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 493)(1, "ion-input", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_9_Template_ion_input_ionInput_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r166);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeStateId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_9_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r166);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateId, $event) || (ctx_r1.stateId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c1));
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_11_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-select-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r168.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r168.name, " ");
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 493)(1, "ion-select", 495);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_11_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r167);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_11_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r167);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.stateType, $event) || (ctx_r1.stateType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_11_ion_select_option_2_Template, 2, 2, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.stateGetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.stateType);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1))("interfaceOptions", ctx_r1.stateOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.state);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-item", 493)(1, "ion-input", 496);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_13_Template_ion_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r169);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeCityId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_13_Template_ion_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r169);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.cityId, $event) || (ctx_r1.cityId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r1.cityName ? ctx_r1.cityName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.cityId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 226)(1, "div", 108)(2, "div", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Residential Details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-icon", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r165);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div")(6, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Please enter your residential details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_div_8_Template, 2, 0, "div", 491)(9, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_9_Template, 2, 3, "ion-item", 492)(10, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_div_10_Template, 2, 0, "div", 491)(11, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_11_Template, 3, 6, "ion-item", 492)(12, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_div_12_Template, 2, 0, "div", 491)(13, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_ion_item_13_Template, 2, 4, "ion-item", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.pincode) && ctx_r1.gstInfoConfig.pincode == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.state) && ctx_r1.gstInfoConfig.state == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx_r1.gstInfoConfig == null ? null : ctx_r1.gstInfoConfig.city) && ctx_r1.gstInfoConfig.city == "show" || ctx_r1.gstInfoConfig == null);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "GST No");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "ion-item", 445)(4, "ion-input", 500, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_div_5_Template_ion_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r171);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onchangeGstId($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_div_5_Template_ion_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r171);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstId, $event) || (ctx_r1.gstId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Registered company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "ion-item", 501)(9, "ion-input", 502);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_div_5_Template_ion_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r171);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.gstName, $event) || (ctx_r1.gstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.gstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-card", 497)(1, "ion-item", 207)(2, "ion-label", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "I Am Booking For Business Travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "ion-checkbox", 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_Template_ion_checkbox_ionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r170);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.gstInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_Template_ion_checkbox_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r170);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r1.businessTravel, $event) || (ctx_r1.businessTravel = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_div_5_Template, 10, 6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.businessTravel ? "businessTravelclick" : "businessTravelunclick");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.businessTravel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.businessTravel);
  }
}
function PassengerDetailsPage_ng_container_4_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_1_Template, 14, 7, "ion-card", 225)(2, PassengerDetailsPage_ng_container_4_ng_container_31_ion_card_2_Template, 6, 5, "ion-card", 488);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable") && ctx_r1.showPincodeCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.commonService.isAbcApp() && ctx_r1.commonStorage.getItem("isServiceTaxApplicable"));
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_33_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate4"]("", ctx_r1.bookseatcount[0], " , ", ctx_r1.bookseatcount[1], ", ", ctx_r1.bookseatcount[2], " + ", ctx_r1.bookseatcount.length - 3, " More");
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_33_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.selectedSeatsNumbers);
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_33_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p", 514);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " (Excluding VAT) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function PassengerDetailsPage_ng_container_4_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "ion-row", 503)(1, "ion-col", 504)(2, "div", 505)(3, "ion-label", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PassengerDetailsPage_ng_container_4_ion_row_33_span_5_Template, 2, 4, "span", 507)(6, PassengerDetailsPage_ng_container_4_ion_row_33_span_6_Template, 2, 1, "span", 507);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h2", 508);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "p", 509);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_row_33_Template_p_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r172);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.callFarebreakup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " View Breakup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, PassengerDetailsPage_ng_container_4_ion_row_33_p_11_Template, 2, 0, "p", 510);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "ion-col", 511)(13, "ion-button", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_ion_row_33_Template_ion_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r172);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.submitPassengerDetails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx_r1.bookseatcount.length, " ", "Seat", " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.bookseatcount.length > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.bookseatcount.length <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", ctx_r1.currencySym, "", ctx_r1.payAmount(ctx_r1.globalData.RESERVATION_DATA.totalBookingAmount + (ctx_r1.globalData.RESERVATION_DATA_RETURN && ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount ? ctx_r1.globalData.RESERVATION_DATA_RETURN.totalBookingAmount : 0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.commonService.isAbcApp());
  }
}
function PassengerDetailsPage_ng_container_4_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 122)(1, "div", 123)(2, "ion-row")(3, "ion-col", 124)(4, "p", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Important Note!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ion-col", 124)(7, "p", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_div_34_Template_p_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r173);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.showWalletDets = !ctx_r1.showWalletDets);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " As per the Govt new GST Rule - 46 Passengers are Mandated to provide their residential State, City and Pin Code details for the Bookings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function PassengerDetailsPage_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "ion-header", 426)(2, "ion-toolbar", 427)(3, "ion-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Passenger Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "ion-buttons", 5)(6, "ion-back-button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PassengerDetailsPage_ng_container_4_Template_ion_back_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r134);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "ion-content", 428)(8, "form", 429)(9, "ion-card", 131)(10, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Contact Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, " Your ticket and bus details will be sent here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "ion-item", 431)(17, "div", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, PassengerDetailsPage_ng_container_4_div_18_Template, 2, 1, "div", 433)(19, PassengerDetailsPage_ng_container_4_ion_select_19_Template, 2, 1, "ion-select", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "ion-input", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ionInput", function PassengerDetailsPage_ng_container_4_Template_ion_input_ionInput_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r134);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.onPhoneChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, PassengerDetailsPage_ng_container_4_p_21_Template, 2, 0, "p", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, PassengerDetailsPage_ng_container_4_ion_item_24_Template, 2, 0, "ion-item", 437)(25, PassengerDetailsPage_ng_container_4_ion_row_25_Template, 9, 3, "ion-row", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](26, PassengerDetailsPage_ng_container_4_ion_card_26_Template, 5, 0, "ion-card", 439)(27, PassengerDetailsPage_ng_container_4_ion_card_27_Template, 2, 1, "ion-card", 142)(28, PassengerDetailsPage_ng_container_4_ion_card_28_Template, 5, 1, "ion-card", 440)(29, PassengerDetailsPage_ng_container_4_div_29_Template, 2, 1, "div", 1)(30, PassengerDetailsPage_ng_container_4_ion_card_30_Template, 7, 1, "ion-card", 439)(31, PassengerDetailsPage_ng_container_4_ng_container_31_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "ion-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, PassengerDetailsPage_ng_container_4_ion_row_33_Template, 15, 7, "ion-row", 441);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, PassengerDetailsPage_ng_container_4_div_34_Template, 11, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r1.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.metaData.show_countries_isd_codes_selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selected_Country_code != "+91");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Email"] && ctx_r1.locale.passenger_details_config["Email"] != "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData && ctx_r1.metaData.isWhatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.onwardSeatDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.isReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.locale && ctx_r1.locale.passenger_details_config["Address"] && ctx_r1.locale.passenger_details_config["Address"] !== "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !(ctx_r1.metaData == null ? null : ctx_r1.metaData.gst_tsrtc_enable));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.metaData.msiteFolder == "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.showWalletDets);
  }
}
class PassengerDetailsPage {
  constructor(globalData, navCtrl, commonStorage,
  //public viewCtrl: ViewController,
  elem, modalCtrl, loading, formBuilder, util, theme, authenticate, dateService, platform, ex, commonService, apiFactory, route, modalController, router, appData, firebaseAnalyticsService, fb, toastController) {
    var _this$metaData, _this$gstInfoConfig, _this$gstInfoConfig2, _this$gstInfoConfig3;
    this.globalData = globalData;
    this.navCtrl = navCtrl;
    this.commonStorage = commonStorage;
    this.elem = elem;
    this.modalCtrl = modalCtrl;
    this.loading = loading;
    this.formBuilder = formBuilder;
    this.util = util;
    this.theme = theme;
    this.authenticate = authenticate;
    this.dateService = dateService;
    this.platform = platform;
    this.ex = ex;
    this.commonService = commonService;
    this.apiFactory = apiFactory;
    this.route = route;
    this.modalController = modalController;
    this.router = router;
    this.appData = appData;
    this.firebaseAnalyticsService = firebaseAnalyticsService;
    this.fb = fb;
    this.toastController = toastController;
    this.gstId = '';
    this.stateId = '';
    this.cityId = '';
    this.stateType = '';
    this.gstName = '';
    this.passengerForm = [];
    this.businessTravel = false;
    this.isReserved = [];
    this.showFormError = false;
    this.showContinue = true;
    this.onwardSeatDetails = [];
    this.returnSeatDetails = [];
    this.isReturn = false;
    this.isBima = false;
    this.passengerFormR = [];
    this.copyData = false;
    this.childFareAmtLess = 0;
    this.isBPDP = false;
    this.object = Object;
    this.selectedPassengerList = [];
    this.isLogin = false;
    this.flag = 1;
    this.isSnackAvailable = false;
    this.wakeUpCall = false;
    this.showWalletDets = false;
    this.cityName = '';
    this.stateGetName = '';
    this.stateGetName1 = '';
    this.getGstInfo = {};
    this.isWPSwitchOn = true;
    this.selected_Country_code = '+91';
    this.subdomain = '';
    this.getdate_go = {};
    this.getDate_come = {};
    this.datafill = false;
    this.isWPBooking = false;
    this.isEditable = true;
    this.selectedCountry = '';
    this.flagSelected = '';
    this.dialCodeSelected = '';
    this.isState = true;
    this.gstvalid = true;
    this.isIos = false;
    this.generalPublic = 'GENERAL PUBLIC';
    this.journaList = 'JOURNALIST';
    this.rtdRtcEmployee = 'RTD RTC EMPLOYEE';
    this.ageBlurSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.cardValidationRequired = false;
    this.passengerStructure = false;
    this.cardValidationRequiredState = [];
    this.cardValidationRequiredStateReturn = [];
    this.concession_details = [];
    this.isProfileUpdateNeeded = false;
    this.stateOptions = {
      header: "Select State"
    };
    this.showPincodeCard = true;
    this.mobileNumberValue = "";
    // Added to support template bindings in footer
    this.selectedSeatsNumbers = "";
    this.bookseatcount = [];
    this.lastValidatedMobile = '';
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_9__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.metaData = commonStorage.localGet('metaData');
    this.hideGstText = ((_this$metaData = this.metaData) === null || _this$metaData === void 0 ? void 0 : _this$metaData.hideGstText) || false;
    this.getGstInfo = this.metaData.gst_info;
    this.gstInfoConfig = this.metaData.gst_info_config;
    if (this.gstInfoConfig == null || ((_this$gstInfoConfig = this.gstInfoConfig) === null || _this$gstInfoConfig === void 0 ? void 0 : _this$gstInfoConfig.state) == "show" || ((_this$gstInfoConfig2 = this.gstInfoConfig) === null || _this$gstInfoConfig2 === void 0 ? void 0 : _this$gstInfoConfig2.city) == "show" || ((_this$gstInfoConfig3 = this.gstInfoConfig) === null || _this$gstInfoConfig3 === void 0 ? void 0 : _this$gstInfoConfig3.pincode) == "show") {
      this.showPincodeCard = true;
    } else {
      this.showPincodeCard = false;
    }
    this.isServiceTaxApplicable = this.commonStorage.getItem('isServiceTaxApplicable');
    const datafill = this.commonStorage.localGet('autofillData') ? this.commonStorage.localGet('autofillData') : false;
    const seatnum_detail = this.commonStorage.localGet('ticketRecentData');
    this.fillSeatData = this.commonStorage.localGet('ticketRecentData');
    if (datafill) {
      this.passDetail = seatnum_detail && seatnum_detail.result.passengerDetails ? seatnum_detail.result.passengerDetails : [];
      this.datafill = datafill;
    } else {
      this.passDetail = [];
      this.datafill = false;
    }
    console.log("this.commonStorage.localGet('timeDifferenceHour')", this.commonStorage.localGet('timeDifferenceHour'));
    console.log("this.commonStorage.localGet('timeDifferenceMinute')", this.commonStorage.localGet('timeDifferenceMinute'));
    this.mainTimeDiffrence = this.commonStorage.localGet('timeDifferenceHour') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinute') + ' m';
  }
  validateAddress() {
    const config = this.locale.passenger_details_config["Address"];
    const addr = (this.address || '').trim();
    if (config === "Hide") return true;
    if (config === "Mandatory" && !addr) {
      this.util.showToast("Address is required");
      return false;
    }
    if (config === "Optional" && !addr) return true;
    if (addr.length < 3 || addr.length > 200 || !/^[a-zA-Z0-9 ,.:()\/-]*$/.test(addr)) {
      this.util.showToast("Invalid Address");
      return false;
    }
    return true;
  }
  goBack() {
    // this.router.navigate(['/seat-layout']);
    let isreturnTrip;
    this.route.queryParams.subscribe(params => {
      isreturnTrip = params["is_return_trip"];
    });
    if (isreturnTrip) {
      var _this$metaData2;
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      if ((_this$metaData2 = this.metaData) !== null && _this$metaData2 !== void 0 && _this$metaData2.allowBPDPFare) {
        this.navCtrl.navigateForward('/seat-layout', navigationExtras);
      } else {
        this.navCtrl.navigateForward('/stage-details', navigationExtras);
      }
    } else {
      var _this$metaData3;
      if ((_this$metaData3 = this.metaData) !== null && _this$metaData3 !== void 0 && _this$metaData3.allowBPDPFare) {
        this.router.navigate(['/seat-layout']);
      } else {
        this.router.navigate(['/stage-details']);
      }
    }
  }
  gstInfo() {
    if (this.businessTravel) {
      setTimeout(() => {
        if (this.ionInputGst) {
          this.ionInputGst.setFocus();
        }
      }, 100);
    }
    if (this.metaData.msiteFolder != 'ourbustheme') {
      this.globalData.IS_GST = this.businessTravel;
    } else {
      this.commonStorage.localSet("businessTravelToggole", this.businessTravel);
    }
  }
  ngOnInit() {
    var _this$commonStorage$g, _this$commonStorage$g2, _this$commonStorage$g3, _this$commonStorage$g4;
    // need to declare form
    this.contactForm = this.fb.group({
      country_code: [''],
      mobile_number: [''],
      email: ['']
    });
    this.firebaseAnalyticsService.logCustomEvent('passenger_details_page', {
      page: 'Passenger Details Page'
    });
    this.metaData = this.commonStorage.localGet('metaData');
    if (this.commonStorage.localGet("gstIdOurbus") && this.commonStorage.localGet("gstNameOurbus")) {
      this.gstId = this.commonStorage.localGet("gstIdOurbus");
      this.gstName = this.commonStorage.localGet("gstNameOurbus");
    }
    this.countryData = _countries_countries_json__WEBPACK_IMPORTED_MODULE_7__;
    this.selectedCountry = this.countryData.find(country => country.dialCode === "+91");
    this.appData.newTheme = this.util.getNewTheme();
    // this.util.getCountries().subscribe(data => {
    //   this.countries = data;
    // });
    this.concessions_category = (_this$commonStorage$g = this.commonStorage.getItem('serviceDetails')) !== null && _this$commonStorage$g !== void 0 && _this$commonStorage$g.concessions_category ? (_this$commonStorage$g2 = this.commonStorage.getItem('serviceDetails')) === null || _this$commonStorage$g2 === void 0 ? void 0 : _this$commonStorage$g2.concessions_category : '';
    this.businessTravel = this.globalData.IS_GST;
    if (this.commonService.isAbcApp()) {
      this.businessTravel = false;
    }
    this.route.queryParams.subscribe(params => {
      this.isReturn = params["is_return_trip"];
      this.isBPDP = params["isBPDP"];
      this.subdomain = this.metaData && this.metaData.operatorInternalUrl ? this.metaData.operatorInternalUrl.split('.')[0] : '';
      this.defaultCall();
    });
    if (this.isReturn) {
      this.mainTimeDiffrenceReturn = this.commonStorage.localGet('timeDifferenceHourReturn') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinuteReturn') + ' m';
      if (localStorage.getItem('currentUser')) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    } else {
      this.mainTimeDiffrence = this.commonStorage.localGet('timeDifferenceHour') + ' h' + ' ' + this.commonStorage.localGet('timeDifferenceMinute') + ' m';
    }
    this.gstState();
    this.concessions_category = (_this$commonStorage$g3 = this.commonStorage.getItem('serviceDetails')) !== null && _this$commonStorage$g3 !== void 0 && _this$commonStorage$g3.concessions_category ? (_this$commonStorage$g4 = this.commonStorage.getItem('serviceDetails')) === null || _this$commonStorage$g4 === void 0 ? void 0 : _this$commonStorage$g4.concessions_category : '';
    this.util.getCountries().subscribe({
      next: data => {
        if (Array.isArray(data)) {
          console.log('Processed Country Data:', data);
          this.countries = data; // Store processed data
        } else {
          console.error('Unexpected response format:', data);
        }
      },
      error: err => {
        console.error('Error fetching country data:', err);
      }
    });
    this.ageBlurSubscription = this.ageBlurSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(500)).subscribe(({
      event,
      i,
      formType
    }) => {
      this.handleAgeBlur(event, i, formType);
    });
    // this.initializePage();
  }
  initializePage() {
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // await this.createPassengerDataStructure()
  // this.passengerStructure = true;
  selectCountry_code() {
    var _this = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.metaData.msiteFolder == 'ourbustheme') {
        const reformattedCountries = _this.countryData.map(country => ({
          name: country.name,
          cca2: country.code,
          idd: country.dialCode,
          flags: country.flag
        }));
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_5__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": reformattedCountries,
            "isOurbus": 'true'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selectedCountry = null;
          _this.flagSelected = data.flags;
          _this.dialCodeSelected = data.idd;
        }
      } else {
        const modal = yield _this.modalController.create({
          component: _cities_modal_cities_modal_page__WEBPACK_IMPORTED_MODULE_5__.CitiesModalPage,
          componentProps: {
            "list": 9,
            "destinationList": _this.countries,
            "isOurbus": 'false'
          }
        });
        yield modal.present();
        const {
          data
        } = yield modal.onDidDismiss();
        if (data != '') {
          _this.selected_Country_code = data.idd;
        }
      }
    })();
  }
  ionViewWillEnter() {
    // this.commonService.gTrack('passengerPage', 'passenger page is being displayed')
    if (this.metaData.isWhatsapp) {
      this.onChangeWhatsappSwitch();
    }
    this.isWPBooking = this.commonStorage.localGet('isWPBooking');
    if (this.isWPBooking) {
      let mobile = this.commonStorage.localGet('wpMobileNo');
      this.contactForm.controls['mobile_number'].setValue(mobile);
    }
    this.isSnackAvailable = this.commonStorage.localGet('isSnackAvailable');
    this.commonStorage.localSet('snack_details', null);
  }
  gotoPaymentDetails() {
    this.globalData.GST_ID = this.gstId;
    this.globalData.GST_NAME = this.gstName;
    this.commonStorage.localSet("gstId", this.globalData.GST_ID);
    this.commonStorage.localSet("gstName", this.globalData.GST_NAME);
    if (this.isReturn) {
      let navigationExtras = {
        queryParams: {
          is_return_trip: true
        }
      };
      this.navCtrl.navigateForward('payment-details', navigationExtras);
    } else {
      this.navCtrl.navigateForward('payment-details');
    }
  }
  defaultCall() {
    try {
      this.commonService.setGloblaData();
      this.onwardSeatDetails = [];
      this.returnSeatDetails = [];
      this.passengerForm = [];
      this.passengerFormR = [];
      this.metaData = this.commonStorage.localGet('metaData');
      this.currencySym = this.metaData && this.metaData.currencySym ? this.metaData.currencySym : "₹";
      this.locale = this.commonStorage.localGet('locale');
      if (this.authenticate.isLoggedIn()) {
        var _this$personalInfo$ad, _this$personalInfo;
        this.personalInfo = this.authenticate.user();
        this.name = this.personalInfo ? this.personalInfo.name : '';
        this.mobileNo = this.personalInfo ? this.personalInfo.mobileNo : '';
        this.address = (_this$personalInfo$ad = (_this$personalInfo = this.personalInfo) === null || _this$personalInfo === void 0 ? void 0 : _this$personalInfo.address) !== null && _this$personalInfo$ad !== void 0 ? _this$personalInfo$ad : '';
        var splitData = this.personalInfo.email.split('@')[1];
        if (this.metaData.msiteFolder == 'ourbustheme') {
          if (splitData != 'ourbus-tmp.in') {
            this.email = this.personalInfo ? this.personalInfo.email : '';
          } else {
            this.isProfileUpdateNeeded = true;
            this.email = '';
          }
        } else {
          this.email = this.personalInfo ? this.personalInfo.email : '';
        }
        this.age = this.personalInfo ? this.personalInfo.dob ? this.dateService.getAge(this.personalInfo.dob, 'yyyy-mm-dd').toString() : '' : '';
      } else if (this.commonStorage.localGet('passengerDetails')) {
        var _this$personalInfo$ad2, _this$personalInfo2;
        this.personalInfo = this.commonStorage.localGet('passengerDetails').contact_detail;
        this.name = this.personalInfo ? this.personalInfo.emergency_name : '';
        this.mobileNo = this.personalInfo ? this.personalInfo.mobile_number : '';
        this.address = (_this$personalInfo$ad2 = (_this$personalInfo2 = this.personalInfo) === null || _this$personalInfo2 === void 0 ? void 0 : _this$personalInfo2.address) !== null && _this$personalInfo$ad2 !== void 0 ? _this$personalInfo$ad2 : '';
        var splitData = this.personalInfo.email.split('@')[1];
        if (this.metaData.msiteFolder == 'ourbustheme') {
          if (splitData != 'ourbus-tmp.in') {
            this.email = this.personalInfo ? this.personalInfo.email : '';
          } else {
            this.isProfileUpdateNeeded = true;
            this.email = '';
          }
        } else {
          this.email = this.personalInfo ? this.personalInfo.email : '';
        }
      }
      this.destinationStageDetails = this.commonStorage.localGet('destinationStageDetails');
      this.originStageDetails = this.commonStorage.localGet('originStageDetails');
      this.reservationData = this.commonStorage.localGet("reservationData");
      console.log("reservationData", this.reservationData);
      if (this.isReturn) {
        this.reservationDataReturn = this.commonStorage.localGet("reservationDataReturn");
        this.originStageDetailsReturn = this.commonStorage.localGet('originStageDetailsReturn');
        this.destinationStageDetailsReturn = this.commonStorage.localGet('destinationStageDetailsReturn');
        this.selectedSeatsToBookReturn = this.commonStorage.localGet("reservationDataReturn").selectedSeatsToBook;
      }
      this.selectedSeatsToBook = this.reservationData.selectedSeatsToBook;
      this.origin = this.commonStorage.localGet("travelOrigin");
      this.destination = this.commonStorage.localGet("travelDestination");
      this.travelDate = this.commonStorage.localGet("travelDate");
      this.phoneNumCount = this.commonStorage.localGet('metaData').phoneNumCount;
      this.AllowedCountryCodes = this.commonStorage.localGet('metaData').AllowedCountryCodes;
      if (this.commonStorage.getItem('metaData').show_countries_isd_codes_selection) {
        if (this.AllowedCountryCodes[0] == '91') {
          this.selected_Country_code = '+91';
        } else {
          this.selected_Country_code = '+' + this.AllowedCountryCodes[0];
        }
      }
      this.errors = false;
      this.isChildFare = this.commonStorage.localGet('isChildFare');
      this.createPassengerDataStructure();
      this.travelDateHeader = this.dateService.headerDate(this.travelDate.formattedDate);
      this.selectedRoute = this.commonStorage.getItem('selectedRoute');
    } catch (e) {}
    this.farebreakUpcall();
  }
  getFormatDate(dateGet) {
    const [day, month, year] = dateGet.split("/");
    const travelDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return travelDate.toLocaleDateString('en-US', {
      weekday: 'short',
      // Fri
      month: 'short',
      // Nov
      day: '2-digit' // 08
    });
  }
  createPassengerDataStructure() {
    this.contactValidation();
    this.passengerStructure = true;
    try {
      var _this$globalData$RESE, _this$globalData, _this$globalData$RESE2, _this$globalData2;
      let contactDetails = {
        emergency_name: 'xxxx',
        mobile_number: this.personalInfo ? this.personalInfo.mobileNo : '',
        email: this.personalInfo ? this.personalInfo.email : '',
        address: this.address ? this.address : ''
      };
      let seatDetails = [];
      if (this.commonStorage.localGet('passengerDetails')) {
        for (var j = 0; j < this.commonStorage.localGet('passengerDetails').seat_details.length; j++) {
          if (!this.commonStorage.localGet('passengerDetails').seat_details[j].is_round_trip_seat) {
            this.selectedSeatsToBook[j].name = this.commonStorage.localGet('passengerDetails').seat_details[j].name;
            this.selectedSeatsToBook[j].sex = this.commonStorage.localGet('passengerDetails').seat_details[j].sex;
            this.selectedSeatsToBook[j].age = this.commonStorage.localGet('passengerDetails').seat_details[j].age ? this.commonStorage.localGet('passengerDetails').seat_details[j].age : '';
            this.selectedSeatsToBook[j].name_by_id = this.commonStorage.localGet('passengerDetails').seat_details[j].name_by_id;
            this.selectedSeatsToBook[j].id_number = this.commonStorage.localGet('passengerDetails').seat_details[j].id_number;
            this.selectedSeatsToBook[j].concessions_category = this.commonStorage.localGet('passengerDetails').seat_details[j].concessions_category ? this.commonStorage.localGet('passengerDetails').seat_details[j].concessions_category : '';
            this.selectedSeatsToBook[j].id_card_type = this.commonStorage.localGet('passengerDetails').seat_details[j].id_card_type ? this.commonStorage.localGet('passengerDetails').seat_details[j].id_card_type : '';
            this.selectedSeatsToBook[j].id_card_number = this.commonStorage.localGet('passengerDetails').seat_details[j].id_card_number ? this.commonStorage.localGet('passengerDetails').seat_details[j].id_card_number : '';
          }
        }
      }
      console.log("this.globalData.RESERVATION_DATA.selectedSeatsToBook", this.globalData.RESERVATION_DATA.selectedSeatsToBook);
      console.log("this.onwardSeatDetails.length", this.onwardSeatDetails.length);
      let i = 0;
      // need to check the error
      if (this.onwardSeatDetails.length < ((_this$globalData$RESE = this.globalData.RESERVATION_DATA.selectedSeatsToBook) === null || _this$globalData$RESE === void 0 ? void 0 : _this$globalData$RESE.length)) {
        console.log(this.selectedSeatsToBook, 'this.selectedSeatsToBook');
        for (let seat of this.selectedSeatsToBook) {
          let isReserved = false;
          let gender = '';
          let sexOptional = true;
          // if(this.subdomain.includes('cbus') || this.subdomain.includes('lxmi')){
          if (this.metaData.msiteFolder == "cbustheme") {
            if (seat.isMaleOrFemale == 'male') {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.isMaleOrFemale == 'female') {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            } else {
              if (seat.sex == 'Ms') {
                gender = 'Ms';
              } else {
                gender = 'Mr';
              }
            }
          } else {
            gender = seat.sex ? seat.sex : '';
            sexOptional = true;
            if (seat.is_gents_seat) {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.is_ladies_seat) {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            } else {
              if (seat.sex == 'Ms') {
                gender = 'Ms';
              } else {
                gender = 'Mr';
              }
            }
          }
          seatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            is_round_trip_seat: false,
            id_card_type: "",
            id_card_number: "",
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat === null || seat === void 0 ? void 0 : seat.id_number,
            name_by_id: seat === null || seat === void 0 ? void 0 : seat.name_by_id
          });
          this.onwardSeatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            sexOptional: sexOptional,
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          console.log("onwardSeatDetails", this.onwardSeatDetails, seatDetails);
          if (this.personalInfo && i === 0) {
            this.validations({
              name: this.name,
              sex: gender,
              seat_number: seat.number,
              fare: seat.fare,
              age: seat.age ? seat.age : ''
              // age: this.age
            });
          } else {
            this.validations({
              name: seat.name ? seat.name : '',
              sex: gender,
              seat_number: seat.number,
              fare: seat.fare,
              age: seat.age ? seat.age : ''
            });
          }
          this.isReserved.push(isReserved);
          i++;
        }
      }
      let returnPassDtl = [];
      if (this.commonStorage.localGet('passengerDetails')) {
        for (var j = 0; j < this.commonStorage.localGet('passengerDetails').seat_details.length; j++) {
          if (this.commonStorage.localGet('passengerDetails').seat_details[j].is_round_trip_seat) {
            returnPassDtl.push(this.commonStorage.localGet('passengerDetails').seat_details[j]);
          }
        }
      }
      if (this.selectedSeatsToBookReturn) {
        for (var k = 0; k < returnPassDtl.length; k++) {
          this.selectedSeatsToBookReturn[k].name = returnPassDtl[k].name ? returnPassDtl[k].name : '';
          this.selectedSeatsToBookReturn[k].sex = returnPassDtl[k].sex ? returnPassDtl[k].sex : '';
          this.selectedSeatsToBookReturn[k].age = returnPassDtl[k].age ? returnPassDtl[k].age : '';
          this.selectedSeatsToBookReturn[k].id_card_type = returnPassDtl[k].id_card_type ? returnPassDtl[k].id_card_type : '';
          this.selectedSeatsToBookReturn[k].id_card_number = returnPassDtl[k].id_card_number ? returnPassDtl[k].id_card_number : '';
          if (this.concessions_category) {
            this.selectedSeatsToBookReturn[k].id_number = returnPassDtl[k].id_number ? returnPassDtl[k].id_number : '';
            this.selectedSeatsToBookReturn[k].name_by_id = returnPassDtl[k].name_by_id ? returnPassDtl[k].name_by_id : '';
            this.selectedSeatsToBookReturn[k].concessions_category = returnPassDtl[k].concessions_category ? returnPassDtl[k].concessions_category : '';
          }
        }
      }
      // need to check the error
      if (this.isReturn && (_this$globalData = this.globalData) !== null && _this$globalData !== void 0 && (_this$globalData = _this$globalData.DEPARTURE_DATE_RETURN) !== null && _this$globalData !== void 0 && _this$globalData.formattedDate && this.returnSeatDetails.length < ((_this$globalData$RESE2 = (_this$globalData2 = this.globalData) === null || _this$globalData2 === void 0 || (_this$globalData2 = _this$globalData2.RESERVATION_DATA_RETURN) === null || _this$globalData2 === void 0 || (_this$globalData2 = _this$globalData2.selectedSeatsToBook) === null || _this$globalData2 === void 0 ? void 0 : _this$globalData2.length) !== null && _this$globalData$RESE2 !== void 0 ? _this$globalData$RESE2 : 0)) {
        for (let seat of this.selectedSeatsToBookReturn) {
          let isReserved = false;
          let gender = '';
          let sexOptional = true;
          // if(this.subdomain.includes('cbus')){
          if (this.metaData.msiteFolder == "cbustheme") {
            if (seat.isMaleOrFemale == 'male') {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.isMaleOrFemale == 'female') {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            }
          } else {
            gender = seat.sex ? seat.sex : '';
            sexOptional = true;
            if (seat.is_gents_seat) {
              isReserved = true;
              gender = 'Mr';
              sexOptional = false;
            } else if (seat.is_ladies_seat) {
              isReserved = true;
              gender = 'Ms';
              sexOptional = false;
            }
          }
          seatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            is_round_trip_seat: true,
            id_card_type: null,
            id_card_number: null,
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          this.returnSeatDetails.push({
            is_primary: i === 0 ? true : false,
            seat_number: seat.number,
            fare: seat.fare,
            sex: gender,
            name: seat.name ? seat.name : '',
            age: seat.age ? seat.age : '',
            sexOptional: sexOptional,
            concessions_category: seat === null || seat === void 0 ? void 0 : seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          this.validationsR({
            name: seat.name ? seat.name : '',
            sex: gender,
            seat_number: seat.number,
            fare: seat.fare,
            age: seat.age ? seat.age : '',
            concessions_category: seat.concessions_category,
            id_number: seat.id_number,
            name_by_id: seat.name_by_id
          });
          this.isReserved.push(isReserved);
          i++;
        }
      }
      let couponDetails;
      this.passengerDetails = {
        seat_details: seatDetails,
        contact_detail: contactDetails,
        coupon_details: couponDetails
        // gst_info: gstInfo
      };
      // this.contactValidation();
      i++;
      this.passengerStructure = false;
      // Update seat summary for footer display
      this.updateSeatSummary();
    } catch (e) {
      this.ex.call("PassengerDetail", "createPassengerDataStructure()", e);
    }
  }
  // Prepare display-friendly seat summary used in the footer
  updateSeatSummary() {
    const onward = Array.isArray(this.onwardSeatDetails) ? this.onwardSeatDetails.map(s => s.seat_number) : [];
    const ret = Array.isArray(this.returnSeatDetails) ? this.returnSeatDetails.map(s => s.seat_number) : [];
    const allSeats = this.isReturn ? onward.concat(ret) : onward;
    this.selectedSeatsNumbers = allSeats.join(', ');
    const h = this.selectedSeatsNumbers ? this.selectedSeatsNumbers.substr(0) : '';
    this.bookseatcount = h.toString().split(',').map(s => s.trim()).filter(s => s);
  }
  copyDataToReturn() {
    if (this.copyData) {
      this.copyDataToReturnMethod();
    } else {
      this.deleteDataFromReturnMethod();
    }
  }
  copyDataToReturnMethod() {
    for (let i = 0; i < this.passengerForm.length && i < this.passengerFormR.length; i++) {
      this.passengerFormR[i].controls['name'].setValue(this.passengerForm[i].controls.name.value);
      this.passengerFormR[i].controls['age'].setValue(this.passengerForm[i].controls.age.value);
      if (this.metaData.msiteFolder == "ourbustheme") {
        if (this.passengerFormR[i].controls['sex'].value !== 'Ms') {
          this.passengerFormR[i].controls['sex'].setValue(this.passengerForm[i].controls.sex.value);
        }
      } else {
        this.passengerFormR[i].controls['sex'].setValue(this.passengerForm[i].controls.sex.value);
      }
      this.passengerFormR[i].controls['id_card_type'].setValue(this.passengerForm[i].controls.id_card_type.value);
      this.passengerFormR[i].controls['id_card_number'].setValue(this.passengerForm[i].controls.id_card_number.value);
      this.passengerFormR[i].controls['passport_issued_date'].setValue(this.passengerForm[i].controls.passport_issued_date.value);
      this.passengerFormR[i].controls['passport_expiry_date'].setValue(this.passengerForm[i].controls.passport_expiry_date.value);
      this.passengerFormR[i].controls['place_of_issue'].setValue(this.passengerForm[i].controls.place_of_issue.value);
    }
  }
  deleteDataFromReturnMethod() {
    for (let i = 0; i < this.passengerForm.length && i < this.passengerFormR.length; i++) {
      this.passengerFormR[i].controls['name'].setValue("");
      if (this.metaData.msiteFolder == "ourbustheme") {
        if (this.passengerFormR[i].controls['sex'].value !== 'Ms') {
          this.passengerFormR[i].controls['sex'].setValue("");
        }
      } else {
        this.passengerFormR[i].controls['sex'].setValue("");
      }
      this.passengerFormR[i].controls['age'].setValue("");
      this.passengerFormR[i].controls['id_card_type'].setValue("");
      this.passengerFormR[i].controls['id_card_number'].setValue("");
      this.passengerFormR[i].controls['passport_issued_date'].setValue("");
      this.passengerFormR[i].controls['passport_expiry_date'].setValue("");
      this.passengerFormR[i].controls['place_of_issue'].setValue("");
    }
  }
  updatePassengerData() {
    console.log("onwardSeatDetails", this.onwardSeatDetails);
    if (this.passengerDetails.seat_details.length < 0) {
      //     this.defaultCall();
    }
    this.childFareAmtLess = 0;
    if (this.passengerForm) {
      for (let i = 0; i < this.passengerForm.length; i++) {
        this.passengerDetails.seat_details[i].name = this.passengerForm[i].value.name;
        this.passengerDetails.seat_details[i].sex = this.passengerForm[i].value.sex;
        this.passengerDetails.seat_details[i].seat_number = this.passengerForm[i].value.seat_number;
        this.passengerDetails.seat_details[i].age = this.passengerForm[i].value.age + "";
        if (this.concessions_category) {
          this.passengerDetails.seat_details[i].id_number = this.passengerForm[i].value.id_number;
          this.passengerDetails.seat_details[i].name_by_id = this.passengerForm[i].value.name_by_id;
          this.passengerDetails.seat_details[i].concessions_category = this.passengerForm[i].value.concessions_category;
        }
        //     if (this.metaData.showCardTypes && this.metaData.idCardTypes) {
        this.passengerDetails.seat_details[i].id_card_type = this.passengerForm[i].value.id_card_type ? this.passengerForm[i].value.id_card_type + "" : null;
        this.passengerDetails.seat_details[i].id_card_number = this.passengerForm[i].value.id_card_number ? this.passengerForm[i].value.id_card_number + "" : null;
        this.passengerDetails.seat_details[i].passport_issued_date = this.passengerForm[i].value.passport_issued_date + "";
        this.passengerDetails.seat_details[i].passport_expiry_date = this.passengerForm[i].value.passport_expiry_date + "";
        this.passengerDetails.seat_details[i].place_of_issue = this.passengerForm[i].value.place_of_issue + "";
        //   }
        this.onwardSeatDetails[i].name = this.passengerForm[i].value.name;
        this.onwardSeatDetails[i].seat_number = this.passengerForm[i].value.seat_number;
        this.onwardSeatDetails[i].age = this.passengerForm[i].value.age ? this.passengerForm[i].value.age : '';
        if (this.metaData.msiteFolder != 'cbustheme' || this.metaData.msiteFolder == null || this.metaData.msiteFolder == '') {
          this.onwardSeatDetails[i].sex = this.passengerForm[i].value.sex;
        } else if (this.metaData.msiteFolder == 'cbustheme') {
          this.passengerDetails.seat_details[i].sex = this.onwardSeatDetails[i].sex;
          this.onwardSeatDetails[i].sex = this.passengerForm[i].value.sex;
        }
        if (this.concessions_category) {
          this.onwardSeatDetails[i].id_number = this.passengerForm[i].value.id_number;
          this.onwardSeatDetails[i].name_by_id = this.passengerForm[i].value.name_by_id;
          this.onwardSeatDetails[i].concessions_category = this.passengerForm[i].value.concessions_category;
        }
        if (this.isChildFare && this.passengerDetails.seat_details[i].sex.toLowerCase() == 'jr') {
          this.childFareAmtLess += this.checkJrFare(this.passengerDetails.seat_details[i].seat_number);
        }
      }
    }
    if (this.isReturn) {
      for (let i = this.passengerForm.length; i < this.passengerForm.length + this.passengerFormR.length; i++) {
        this.passengerDetails.seat_details[i].name = this.passengerFormR[i - this.passengerForm.length].value.name;
        this.passengerDetails.seat_details[i].sex = this.passengerFormR[i - this.passengerForm.length].value.sex;
        this.passengerDetails.seat_details[i].seat_number = this.passengerFormR[i - this.passengerForm.length].value.seat_number;
        this.passengerDetails.seat_details[i].age = this.passengerFormR[i - this.passengerForm.length].value.age + "";
        this.passengerDetails.seat_details[i].id_card_type = this.passengerFormR[i - this.passengerForm.length].value.id_card_type + "";
        this.passengerDetails.seat_details[i].id_card_number = this.passengerFormR[i - this.passengerForm.length].value.id_card_number + "";
        this.passengerDetails.seat_details[i].passport_issued_date = this.passengerFormR[i - this.passengerForm.length].value.passport_issued_date + "";
        this.passengerDetails.seat_details[i].passport_expiry_date = this.passengerFormR[i - this.passengerForm.length].value.passport_expiry_date + "";
        this.passengerDetails.seat_details[i].place_of_issue = this.passengerFormR[i - this.passengerForm.length].value.place_of_issue + "";
        this.returnSeatDetails[i - this.passengerForm.length].name = this.passengerFormR[i - this.passengerForm.length].value.name;
        this.returnSeatDetails[i - this.passengerForm.length].seat_number = this.passengerFormR[i - this.passengerForm.length].value.seat_number;
        this.returnSeatDetails[i - this.passengerForm.length].age = this.passengerFormR[i - this.passengerForm.length].value.age;
        this.returnSeatDetails[i - this.passengerForm.length].sex = this.passengerFormR[i - this.passengerForm.length].value.sex;
        this.returnSeatDetails[i - this.passengerForm.length].id_card_type = this.passengerFormR[i - this.passengerForm.length].value.id_card_type + "";
        this.returnSeatDetails[i - this.passengerForm.length].id_card_number = this.passengerFormR[i - this.passengerForm.length].value.id_card_number + "";
        this.returnSeatDetails[i - this.passengerForm.length].passport_issued_date = this.passengerFormR[i - this.passengerForm.length].value.passport_issued_date + "";
        this.returnSeatDetails[i - this.passengerForm.length].passport_expiry_date = this.passengerFormR[i - this.passengerForm.length].value.passport_expiry_date + "";
        this.returnSeatDetails[i - this.passengerForm.length].place_of_issue = this.passengerFormR[i - this.passengerForm.length].value.place_of_issue + "";
        if (this.isChildFare && this.passengerDetails.seat_details[i].sex.toLowerCase() == 'jr') {
          this.childFareAmtLess += this.checkJrFare(this.passengerDetails.seat_details[i].seat_number);
        }
        if (this.concessions_category) {
          this.returnSeatDetails[i - this.passengerForm.length].id_number = this.passengerFormR[i - this.passengerForm.length].value.id_number;
          this.returnSeatDetails[i - this.passengerForm.length].name_by_id = this.passengerFormR[i - this.passengerForm.length].value.name_by_id;
          this.returnSeatDetails[i - this.passengerForm.length].concessions_category = this.passengerFormR[i - this.passengerForm.length].value.concessions_category;
          this.passengerDetails.seat_details[i].id_number = this.passengerFormR[i - this.passengerForm.length].value.id_number;
          this.passengerDetails.seat_details[i].name_by_id = this.passengerFormR[i - this.passengerForm.length].value.name_by_id;
          this.passengerDetails.seat_details[i].concessions_category = this.passengerFormR[i - this.passengerForm.length].value.concessions_category;
        }
      }
    }
    if (this.passengerDetails) {
      this.passengerDetails.contact_detail.email = this.contactForm.value.email;
      this.passengerDetails.contact_detail.emergency_name = this.passengerForm[0].value.name;
      this.passengerDetails.contact_detail.mobile_number = this.contactForm.value.mobile_number + "";
      this.passengerDetails.contact_detail.country_code = this.contactForm.value.country_code + "";
      this.passengerDetails.contact_detail.address = this.address + "";
      this.commonStorage.localSet("onwardSeatDetails", this.onwardSeatDetails);
      this.commonStorage.localSet("returnSeatDetails", this.returnSeatDetails);
      this.commonStorage.localSet("childFareAmtLess", this.childFareAmtLess);
    }
  }
  checkJrFare(seatNumber) {
    let seatDetails = this.commonStorage.getItem("seatDetails");
    let seat = seatDetails.find(it => {
      if (it.number == seatNumber) {
        return true;
      } else {
        return false;
      }
    });
    return +seat.child_fare;
  }
  openAutoSignupDialog() {
    var _this2 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _this2$metaData, _this2$passengerForm$;
      const modal = yield _this2.modalController.create({
        component: _auto_signup_dialog_auto_signup_dialog_page__WEBPACK_IMPORTED_MODULE_12__.AutoSignupDialogPage,
        componentProps: {
          loginType: (_this2$metaData = _this2.metaData) === null || _this2$metaData === void 0 ? void 0 : _this2$metaData.loginType,
          name: _this2.passengerForm && _this2.passengerForm[0] ? (_this2$passengerForm$ = _this2.passengerForm[0].controls) === null || _this2$passengerForm$ === void 0 || (_this2$passengerForm$ = _this2$passengerForm$.name) === null || _this2$passengerForm$ === void 0 ? void 0 : _this2$passengerForm$.value : _this2.name,
          phone: _this2.contactForm && _this2.contactForm.controls['mobile_number'] ? _this2.contactForm.controls['mobile_number'].value : _this2.mobileNumberValue,
          email: _this2.contactForm && _this2.contactForm.controls['email'] ? _this2.contactForm.controls['email'].value : _this2.email
        },
        cssClass: 'auto-signup-modal-css',
        backdropDismiss: false
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if ((data === null || data === void 0 ? void 0 : data.action) === 'proceed' || (data === null || data === void 0 ? void 0 : data.action) === 'skip') {
        _this2.submitPassengerDetails(data === null || data === void 0 ? void 0 : data.action);
      } else {
        return;
      }
    })();
  }
  submitPassengerDetails(dataFrom = '') {
    var _this$concessions_cat, _this$gstInfoConfig4, _this$gstInfoConfig5;
    if (!this.validateAddress()) {
      return;
    }
    if (((_this$concessions_cat = this.concessions_category) === null || _this$concessions_cat === void 0 ? void 0 : _this$concessions_cat.length) > 0) {
      const currentPassengerForms = this.isReturn ? this.passengerFormR : this.passengerForm;
      if (currentPassengerForms) {
        var _this$concessions_cat2;
        if (this.metaData.msiteFolder == null && ((_this$concessions_cat2 = this.concessions_category) === null || _this$concessions_cat2 === void 0 ? void 0 : _this$concessions_cat2.length) > 0) {
          if (!this.isReturn) {
            let generalCount = 0;
            let tsrtcRtdCount = 0;
            let journCount = 0;
            if (this.passengerForm) {
              for (let item of this.passengerForm) {
                let selectedCategory = this.concessions_category.find(category => category.id == item.value.concessions_category);
                if (selectedCategory) {
                  switch (selectedCategory.type) {
                    case this.generalPublic:
                      generalCount++;
                      break;
                    case this.rtdRtcEmployee:
                      tsrtcRtdCount++;
                      break;
                    case this.journaList:
                      journCount++;
                      break;
                  }
                }
              }
            }
            // Checking max seat limits dynamically
            for (let category of this.concessions_category) {
              if (category.type == this.generalPublic && generalCount > category.max_seats) {
                this.util.showToast(`Max Allowed Person For ${category.type} is ${category.max_seats}`);
                return;
              }
              if (category.type == this.rtdRtcEmployee && tsrtcRtdCount > category.max_seats) {
                this.util.showToast(`Max Allowed Person For ${category.type} is ${category.max_seats}`);
                return;
              }
              if (category.type == this.journaList && journCount > category.max_seats) {
                this.util.showToast(`Max Allowed Person For ${category.type} is ${category.max_seats}`);
                return;
              }
            }
          }
        }
      }
    }
    this.globalData.GST_ID = this.gstId;
    this.globalData.GST_NAME = this.gstName;
    this.commonStorage.localSet("gstId", this.globalData.GST_ID);
    this.commonStorage.localSet("gstName", this.globalData.GST_NAME);
    this.commonStorage.localSet('gstCityName', this.cityName);
    this.commonStorage.localSet('gstStateName', this.stateGetName);
    if (this.metaData.msiteFolder != 'ourbustheme') {
      this.commonStorage.localSet('pinCode', this.stateId);
    } else {
      this.commonStorage.localRemove('pinCode');
    }
    if (this.metaData.msiteFolder == 'ourbustheme') {
      if (this.getGstInfo.pincode == 'mandatory') {
        if (!this.stateId || this.stateId.length !== 6) {
          this.util.showToast('Please enter valid pin code');
          return;
        } else if (!this.stateGetName && !this.stateType) {
          this.util.showToast('Please enter valid pin code');
          return;
        } else if (!this.cityName && !this.cityId) {
          this.util.showToast('Please enter valid pin code');
          return;
        }
      } else {
        if (this.stateId.length > 0) {
          if (!this.stateId || this.stateId.length !== 6) {
            this.util.showToast('Please enter valid pin code');
            return;
          } else if (!this.stateGetName && !this.stateType) {
            this.util.showToast('Please enter valid pin code');
            return;
          } else if (!this.cityName && !this.cityId) {
            this.util.showToast('Please enter valid pin code');
            return;
          }
        } else {
          this.stateGetName = '';
          this.stateType = '';
          this.cityName = '';
          this.cityId = '';
        }
      }
      if (this.businessTravel == true && this.gstId.length == 15) {
        if (!this.gstvalid) {
          this.util.showToast('Please enter valid GST ID');
          return;
        } else {
          if (this.metaData.msiteFolder == 'ourbustheme') {
            this.commonStorage.localSet("gstIdOurbus", this.gstId);
            this.commonStorage.localSet("gstNameOurbus", this.gstName);
          } else {
            this.commonStorage.localRemove("gstIdOurbus");
            this.commonStorage.localRemove("gstNameOurbus");
          }
        }
      }
    }
    if (this.businessTravel == true && this.gstId.length < 15) {
      this.util.showToast('Please enter valid GST ID');
    } else if (this.businessTravel == true && this.gstName.length < 1) {
      this.util.showToast('Please enter valid Comapny Name');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.pincode == 'mandatory' && this.isServiceTaxApplicable == true && (!this.stateId || this.stateId.length !== 6) && (this.gstInfoConfig == null || ((_this$gstInfoConfig4 = this.gstInfoConfig) === null || _this$gstInfoConfig4 === void 0 ? void 0 : _this$gstInfoConfig4.pincode) == "show")) {
      this.util.showToast('Please enter valid pin code');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.state == 'mandatory' && !this.stateGetName && !this.stateType && this.isServiceTaxApplicable == true && (this.gstInfoConfig == null || this.gstInfoConfig.state == "show")) {
      this.util.showToast('Please enter valid state');
    } else if (this.metaData.msiteFolder != 'ourbustheme' && this.getGstInfo.city == 'mandatory' && this.isServiceTaxApplicable == true && !this.cityName && !this.cityId && (this.gstInfoConfig == null || ((_this$gstInfoConfig5 = this.gstInfoConfig) === null || _this$gstInfoConfig5 === void 0 ? void 0 : _this$gstInfoConfig5.city) == "show")) {
      this.util.showToast('Please enter valid city');
    } else {
      if (this.isValid()) {
        var _this$metaData4;
        if ((_this$metaData4 = this.metaData) !== null && _this$metaData4 !== void 0 && _this$metaData4.loginType && (this.metaData.loginType == "Auto" || this.metaData.loginType == "Forced") && dataFrom == '' && !this.authenticate.isLoggedIn()) {
          this.openAutoSignupDialog();
          return;
        }
        this.commonStorage.localSet('passengerDetails', this.passengerDetails);
        const seatDetail_data = this.commonStorage.localGet('passenger_personal_data') ? this.commonStorage.localGet('passenger_personal_data') : [];
        if (this.stateId != '') {
          this.passengerDetails.contact_detail;
          this.passengerDetails.contact_detail = Object.assign(this.passengerDetails.contact_detail, {
            "pinCode": this.stateId
          });
        }
        if (seatDetail_data.length != 0) {
          if (this.passengerDetails.seat_details.length <= seatDetail_data.length) {
            for (let i = 0; i < this.passengerDetails.seat_details.length; i++) {
              seatDetail_data[i] = this.passengerDetails.seat_details[i];
              if (this.metaData.msiteFolder == 'ourbustheme') {
                if (this.passengerDetails.seat_details[i].age == '0') {
                  this.util.showToast('Please enter valid age');
                  return;
                }
              }
              if (this.metaData.msiteFolder == 'cbustheme') {
                if (this.passengerDetails.seat_details[i].age == '0') {
                  this.util.showToast('Please enter valid age');
                  return;
                }
              }
            }
            this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
            this.commonStorage.localSet('passenger_personal_data', seatDetail_data);
          } else {
            this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
            this.commonStorage.localSet('passenger_personal_data', this.passengerDetails.seat_details);
          }
        } else {
          this.commonStorage.localSet('passenger_personal_contact', this.passengerDetails.contact_detail);
          this.commonStorage.localSet('passenger_personal_data', this.passengerDetails.seat_details);
        }
        // this.globalData.RESERVATION_DATA = this.reservationData;
        // this.globalData.RESERVATION_DATA_RETURN = this.reservationDataReturn
        // // console.log('submit z', this.globalData.RESERVATION_DATA)
        // this.commonStorage.localSet("selected_Country_code", this.selected_Country_code)
        // const passengerFormData = this.passengerForm.map((form: FormGroup) => form.value);
        // const passengerFormRData = this.passengerFormR.map((form: FormGroup) => form.value);
        // this.commonStorage.localSet('passengerForm', passengerFormData);
        // this.commonStorage.localSet('passengerFormR', passengerFormRData);
        this.globalData.RESERVATION_DATA = this.reservationData;
        this.globalData.RESERVATION_DATA_RETURN = this.reservationDataReturn;
        this.commonStorage.localSet("selected_Country_code", this.selected_Country_code);
        const passengerFormData = this.passengerForm.map(form => form.value);
        const passengerFormRData = this.passengerFormR.map(form => form.value);
        this.commonStorage.localSet('passengerForm', passengerFormData);
        this.commonStorage.localSet('passengerFormR', passengerFormRData);
        if (this.isReturn) {
          console.log("passed true from pass det");
          let navigationExtras = {
            queryParams: {
              is_return_trip: true,
              is_profile_update_needed: this.isProfileUpdateNeeded
            }
          };
          this.navCtrl.navigateForward('payment-details', navigationExtras);
        } else {
          console.log("passed false from pass det");
          let navigationExtras = {
            queryParams: {
              is_profile_update_needed: this.isProfileUpdateNeeded
            }
          };
          this.navCtrl.navigateForward('payment-details', navigationExtras);
        }
      } else {
        this.errors = true;
      }
    }
  }
  onchangeGstId(ev) {
    const input = ev.target;
    const value = input.value;
    let name = '';
    name = value;
    name = value.replace(/[₹()]/g, '').replace(/[^A-Za-z0-9 ]/g, '');
    if (this.gstId.length > 15) {
      this.gstId = this.gstId.substr(0, 15);
    }
    let stateId = '';
    if (this.metaData.msiteFolder != 'ourbustheme') {
      stateId = this.stateId;
    } else {
      stateId = '';
    }
    if (this.gstId.length == 15) {
      this.apiFactory.getStateByPin(stateId, this.gstId).subscribe(res => {
        if (res.code == 200) {
          this.gstvalid = true;
          if (this.metaData.msiteFolder != 'ourbustheme') {
            this.stateGetName = res.result.state;
            if (res.result.city != '') {
              this.cityName = res.result.city;
            }
            this.cityName = res.result.city;
            if (this.isServiceTaxApplicable == true) {
              this.passengerDetails.gst_info = {
                "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
                "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
                "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
              };
            }
          }
        } else {
          // alert('kk')
          this.gstvalid = false;
          this.util.showToast(res.message);
        }
      }, err => {
        this.util.showToast(err);
      });
    }
  }
  validations(seat) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let sexValue = seat.sex === "" ? "Mr" : seat.sex;
      this.passengerForm.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        sex: [sexValue, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    } else {
      var _this$concessions_cat3;
      this.passengerForm.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: [''],
        concessions_category: [String((_this$concessions_cat3 = this.concessions_category) === null || _this$concessions_cat3 === void 0 || (_this$concessions_cat3 = _this$concessions_cat3[0]) === null || _this$concessions_cat3 === void 0 ? void 0 : _this$concessions_cat3.id)],
        concession_fare: [seat.fare],
        name_by_id: [''],
        id_number: [''],
        isCard: [false]
      }));
    }
    console.log("passengerForm", this.passengerForm);
  }
  validationsR(seat) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      let sexValue = seat.sex === "" ? "Mr" : seat.sex;
      this.passengerFormR.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        sex: [sexValue, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: ['']
      }));
    } else {
      var _this$concessions_cat4;
      this.passengerFormR.push(this.formBuilder.group({
        name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        age: [seat.age, this.locale.passenger_details_config['Age'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : null],
        id_card_type: [null, this.locale.passenger_details_config['Id Type'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        id_card_number: [null, this.locale.passenger_details_config['Id No'] == 'Mandatory' ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null],
        passport_issued_date: [''],
        passport_expiry_date: [''],
        place_of_issue: [''],
        concessions_category: [String((_this$concessions_cat4 = this.concessions_category) === null || _this$concessions_cat4 === void 0 || (_this$concessions_cat4 = _this$concessions_cat4[0]) === null || _this$concessions_cat4 === void 0 ? void 0 : _this$concessions_cat4.id)],
        concession_fare: [seat === null || seat === void 0 ? void 0 : seat.fare],
        name_by_id: [''],
        id_number: [''],
        isCard: [false]
      }));
    }
  }
  idCardChange(i) {
    if (this.metaData.showCardTypes && this.passengerForm[i].value.id_card_type == 3 && this.locale.passenger_details_config['Id No'] == 'Mandatory') {
      this.passengerForm[i].controls['passport_issued_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.passengerForm[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerForm[i].controls['passport_expiry_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.passengerForm[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerForm[i].controls['place_of_issue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.passengerForm[i].controls['place_of_issue'].updateValueAndValidity();
    } else {
      this.passengerForm[i].controls['passport_issued_date'].clearValidators();
      this.passengerForm[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerForm[i].controls['passport_expiry_date'].clearValidators();
      this.passengerForm[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerForm[i].controls['place_of_issue'].clearValidators();
      this.passengerForm[i].controls['place_of_issue'].updateValueAndValidity();
    }
  }
  idCardChangeR(i) {
    if (this.metaData.showCardTypes && this.passengerFormR[i].value.id_card_type == 3 && this.locale.passenger_details_config['Id No'] == 'Mandatory') {
      this.passengerFormR[i].controls['passport_issued_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.passengerFormR[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['passport_expiry_date'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.passengerFormR[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['place_of_issue'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
      this.passengerFormR[i].controls['place_of_issue'].updateValueAndValidity();
    } else {
      this.passengerFormR[i].controls['passport_issued_date'].clearValidators();
      this.passengerFormR[i].controls['passport_issued_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['passport_expiry_date'].clearValidators();
      this.passengerFormR[i].controls['passport_expiry_date'].updateValueAndValidity();
      this.passengerFormR[i].controls['place_of_issue'].clearValidators();
      this.passengerFormR[i].controls['place_of_issue'].updateValueAndValidity();
    }
  }
  contactValidation() {
    let minPhoneCount = this.phoneNumCount === "" ? 0 : this.phoneNumCount;
    let maxPhoneCount = this.phoneNumCount === "" ? 18 : this.phoneNumCount;
    if (this.metaData.show_countries_isd_codes_selection) {
      this.contactForm = this.formBuilder.group({
        country_code: [this.selected_Country_code ? this.selected_Country_code : this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(maxPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(minPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        email: [this.email && this.locale.passenger_details_config["Email"] !== "Hide" ? this.email : "", this.locale.passenger_details_config["Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_8__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : null]
      });
    } else {
      this.contactForm = this.formBuilder.group({
        country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[1] ? this.AllowedCountryCodes[1] : this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(maxPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(minPhoneCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        email: [this.email && this.locale.passenger_details_config["Email"] !== "Hide" ? this.email : "", this.locale.passenger_details_config["Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_8__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]) : null]
      });
      setTimeout(() => {
        this.checkAutofilledMobileBlacklist();
      }, 1000);
    }
    if (this.datafill) {
      setTimeout(() => {
        this.isProfileUpdateNeeded = false;
        this.contactForm.controls["email"].setValue(this.fillSeatData.result.passengerOtherDetails.email);
        this.address = this.fillSeatData.result.passengerOtherDetails.address;
        const phone = this.fillSeatData.result.passengerOtherDetails.phone;
        if (this.metaData.msiteFolder != 'ourbustheme') {
          this.stateId = this.fillSeatData.result.passengerOtherDetails.pinCode;
        } else {
          this.stateId = '';
        }
        if (phone.includes('-')) {
          const parts = phone.split('-');
          this.contactForm.controls['mobile_number'].setValue(parts[1]);
        } else {
          this.contactForm.controls['mobile_number'].setValue(phone);
        }
        for (let i = 0; i < this.passengerForm.length; i++) {
          this.passengerForm[i].controls['name'].setValue(this.passDetail[i].name);
          this.passengerForm[i].controls['sex'].setValue(this.passDetail[i].title);
          this.passengerForm[i].controls['age'].setValue(this.passDetail[i].age ? this.passDetail[i].age : '');
          if (this.concessions_category) {
            this.passengerForm[i].controls['concessions_category'].setValue(this.passDetail[i].concessions_category);
            this.passengerForm[i].controls['id_number'].setValue(this.passDetail[i].id_number);
            this.passengerForm[i].controls['name_by_id'].setValue(this.passDetail[i].name_by_id);
          }
        }
      }, 1000);
    } else {
      const contact_data = this.commonStorage.localGet('passenger_personal_contact') ? this.commonStorage.localGet('passenger_personal_contact') : {};
      if (contact_data && Object.keys(contact_data).length != 0) {
        this.isProfileUpdateNeeded = false;
        this.contactForm.controls['email'].setValue(contact_data.email);
        this.address = contact_data.address;
        if (contact_data.country_code && contact_data.country_code != '') {
          this.contactForm.controls['country_code'].setValue(contact_data.country_code);
        }
        setTimeout(() => {
          if (this.metaData.msiteFolder != 'ourbustheme') {
            this.stateId = contact_data.pinCode;
            if (this.stateId != '') {
              this.onchangeStateId('');
            }
          }
        }, 500);
        this.contactForm.controls['mobile_number'].setValue(contact_data.mobile_number);
      } else {
        if (this.authenticate.isLoggedIn()) {
          if (this.passengerForm.length != 0) {
            const title = this.personalInfo ? this.personalInfo.title : '';
            if (this.metaData.msiteFolder != 'ourbustheme') {
              this.passengerForm[0].controls['sex'].setValue(title == 'Mr' ? 'Mr' : title == '' ? '' : 'Ms');
            }
            this.passengerForm[0].controls['age'].setValue(this.personalInfo ? this.personalInfo.age : '');
          }
        }
      }
      const data = this.commonStorage.localGet('passenger_personal_data') ? this.commonStorage.localGet('passenger_personal_data') : [];
      if (data.length != 0) {
        for (let i = 0; i < this.passengerForm.length; i++) {
          this.passengerForm[i].controls['name'].setValue(data[i].name);
          this.passengerForm[i].controls['sex'].setValue(data[i].sex);
          this.passengerForm[i].controls['age'].setValue(data[i].age ? data[i].age : '');
          if (this.concessions_category) {
            var _this$concessions_cat5;
            this.passengerForm[i].controls['concessions_category'].setValue(String((_this$concessions_cat5 = this.concessions_category) === null || _this$concessions_cat5 === void 0 || (_this$concessions_cat5 = _this$concessions_cat5[0]) === null || _this$concessions_cat5 === void 0 ? void 0 : _this$concessions_cat5.id));
            this.passengerForm[i].controls['id_number'].setValue(data[i].id_number);
            this.passengerForm[i].controls['name_by_id'].setValue(data[i].name_by_id);
          }
        }
      }
    }
  }
  isValid() {
    if (this.passengerForm) {
      for (let valid of this.passengerForm) {
        if (valid.value.name == '') {
          this.util.showToast("Enter name in seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.value.sex == '') {
          this.util.showToast("Please select gender in seat number " + valid.value.seat_number);
          return false;
        }
        // if (valid.controls.age.status == "INVALID") {
        //   this.util.showToast("Enter valid age in seat number " + valid.value.seat_number);
        //   return false;
        // }
        if (valid.value.sex.toLowerCase() == 'jr' && valid.value.age > 11) {
          this.util.showToast("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          this.showError("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.locale.passenger_details_config['Age'] == 'Mandatory' && !valid.value.age) {
          this.util.showToast("Enter age in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.locale.passenger_details_config['Id Type'] == 'Mandatory' && this.metaData.idCardTypes) {
          if (valid.controls.id_card_type.status == "INVALID") {
            this.util.showToast("Select card type for seat number " + valid.value.seat_number);
            return false;
          }
        }
        if (this.locale.passenger_details_config['Id No'] == 'Mandatory' && this.metaData.showCardTypes) {
          if (valid.controls.id_card_number.status == "INVALID") {
            this.util.showToast("Enter Id Card no. for seat number " + valid.value.seat_number);
            return false;
          }
          if (valid.value.id_card_type == 3 && this.metaData.showCardTypes) {
            if (!valid.value.passport_issued_date) {
              this.util.showToast("Id Card issue date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.passport_expiry_date && this.metaData.showCardTypes) {
              this.util.showToast("Id Card expiry date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.place_of_issue && this.metaData.showCardTypes) {
              this.util.showToast("Id Card Place of issue missing for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        if (this.concessions_category && this.concessions_category.length > 0) {
          let selectedCategory = this.concessions_category.find(item => item.id == valid.value.concessions_category);
          if (selectedCategory && selectedCategory.requires_card_validation) {
            if (!valid.value.id_number || valid.value.id_number.trim() === '' || !valid.value.name_by_id || valid.value.name_by_id.trim() === '') {
              this.util.showToast("Enter a valid card number for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
      }
    }
    if (this.isReturn) {
      for (let valid of this.passengerFormR) {
        if (valid.value.name == '') {
          this.util.showToast("Enter name in seat number " + valid.value.seat_number);
          return false;
        }
        if (valid.value.sex == '') {
          this.util.showToast("Please select gender in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.locale.passenger_details_config['Age'] == 'Mandatory' && valid.value.age == "") {
          this.util.showToast("Enter valid age in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.concessions_category && this.concessions_category.length > 0) {
          let selectedCategory = this.concessions_category.find(item => item.id == valid.value.concessions_category);
          if (selectedCategory && selectedCategory.requires_card_validation) {
            if (!valid.value.id_number || valid.value.id_number.trim() === '' && (!valid.value.name_by_id || valid.value.name_by_id.trim() === '')) {
              this.util.showToast("Enter a valid card number for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        if (valid.value.sex.toLowerCase() == 'jr' && valid.value.age > 11) {
          this.util.showToast("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          this.showError("Child age should be less or equal to 11 years in seat number " + valid.value.seat_number);
          return false;
        }
        if (this.locale.passenger_details_config['Id Type'] == 'Mandatory' && this.metaData.idCardTypes) {
          if (valid.controls.id_card_type.status == "INVALID") {
            this.util.showToast("Select card type for seat number " + valid.value.seat_number);
            return false;
          }
        }
        if (this.locale.passenger_details_config['Id No'] == 'Mandatory' && this.metaData.showCardTypes) {
          if (valid.controls.id_card_number.status == "INVALID") {
            this.util.showToast("Enter Id Card no. for seat number " + valid.value.seat_number);
            return false;
          }
          if (valid.value.id_card_type == 3 && this.metaData.showCardTypes) {
            if (!valid.value.passport_issued_date) {
              this.util.showToast("Id Card issue date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.passport_expiry_date && this.metaData.showCardTypes) {
              this.util.showToast("Id Card expiry date missing for seat number " + valid.value.seat_number);
              return false;
            }
            if (!valid.value.place_of_issue && this.metaData.showCardTypes) {
              this.util.showToast("Id Card Place of issue missing for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        //tsrtc code  start
        if (this.concessions_category && this.concessions_category.length > 0) {
          let selectedCategory = this.concessions_category.find(item => item.id == valid.value.concessions_category);
          if (selectedCategory && selectedCategory.requires_card_validation) {
            if (!valid.value.id_number || valid.value.id_number.trim() === '' || !valid.value.name_by_id || valid.value.name_by_id.trim() === '') {
              this.util.showToast("Enter a valid card number for seat number " + valid.value.seat_number);
              return false;
            }
          }
        }
        ////end
      }
    }
    let isnum = /^[0-9]$/.test(this.contactForm.controls['mobile_number'].value);
    if (this.contactForm.status == "INVALID") {
      if (this.contactForm.controls['mobile_number'].invalid && this.contactForm.controls['email'].invalid) {
        this.showError("Invalid Email / Mobile number");
        this.util.showToast("Invalid Email / Mobile number");
      } else if (this.contactForm.controls['email'].invalid) {
        this.showError("Invalid Email");
        this.util.showToast("Invalid Email");
      } else if (this.contactForm.controls['mobile_number'].invalid) {
        this.showError("Invalid Mobile number");
        this.util.showToast("Invalid Mobile number");
      } else {
        this.showError("Some Field(s) are missing in Contact details");
        this.util.showToast("Some Field(s) are missing in Contact details");
      }
      let elem = document.querySelector('ion-input.ng-invalid input');
      if (elem) {
        elem.focus();
      }
      return false;
    }
    this.updatePassengerData();
    return true;
  }
  onlyDigits(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const d = s.charCodeAt(i);
      if (d < 48 || d > 57) return false;
    }
    return true;
  }
  validations1(seat) {
    this.passengerForm.push(this.formBuilder.group({
      name: [seat.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      sex: [seat.sex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      seat_number: [seat.seat_number, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      age: [seat.age, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
      id_card_type: [null],
      id_card_number: [null],
      passport_issued_date: [''],
      passport_expiry_date: [''],
      place_of_issue: ['']
    }));
  }
  contactValidation1() {
    if (this.metaData.show_countries_isd_codes_selection) {
      this.contactForm = this.formBuilder.group({
        country_code: [this.selected_Country_code, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_8__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        address: [this.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[a-zA-Z0-9 ,.\\-/]*')])],
        alternate_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_8__.ValidatorService.emailValidator, this.locale && this.locale.passenger_details_config && this.locale.passenger_details_config["Alternate Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null])]
      });
    } else {
      this.contactForm = this.formBuilder.group({
        country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        alt_country_code: [this.AllowedCountryCodes[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        mobile_number: [this.mobileNo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(this.phoneNumCount), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        email: [this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_8__.ValidatorService.emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])],
        address: [this.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(200), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[a-zA-Z0-9 ,.\\-/]*')])],
        alternate_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_services_validator_service__WEBPACK_IMPORTED_MODULE_8__.ValidatorService.emailValidator, this.locale && this.locale.passenger_details_config && this.locale.passenger_details_config["Alternate Email"] == "Mandatory" ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required : null])]
      });
    }
  }
  showError(msg) {
    this.errors = true;
    this.showFormError = true;
    this.formErrorMessage = msg;
  }
  onInputChange(ev, i, type) {
    const input = ev.target;
    let value = input.value;
    let name = '';
    name = value;
    name = name.replace(/[^A-Za-z\s]/g, '');
    if (type === 1) {
      this.passengerForm[i].controls['name'].setValue(name);
    } else {
      this.passengerFormR[i].controls['name'].setValue(name);
    }
    this.showFormError = false;
    this.formErrorMessage = null;
  }
  onPhoneChange(ev) {
    var _ref, _ref2, _ev$detail$value, _ev$detail;
    this.showFormError = false;
    this.formErrorMessage = null;
    const host = ev === null || ev === void 0 ? void 0 : ev.target;
    const isIonInput = host && host.tagName === 'ION-INPUT';
    const nativeInput = isIonInput ? host.querySelector('input') : host;
    const raw = String((_ref = (_ref2 = (_ev$detail$value = ev === null || ev === void 0 || (_ev$detail = ev.detail) === null || _ev$detail === void 0 ? void 0 : _ev$detail.value) !== null && _ev$detail$value !== void 0 ? _ev$detail$value : host === null || host === void 0 ? void 0 : host.value) !== null && _ref2 !== void 0 ? _ref2 : nativeInput === null || nativeInput === void 0 ? void 0 : nativeInput.value) !== null && _ref !== void 0 ? _ref : '');
    const maxPhoneCount = Number(this.phoneNumCount) > 0 ? Number(this.phoneNumCount) : 18;
    let value = raw.replace(/[^0-9]/g, '');
    if (value.length > maxPhoneCount) {
      value = value.substring(0, maxPhoneCount);
    }
    if (value && Number(value) === 0) {
      value = '';
    }
    // Push the sanitised value back into the DOM. Angular skips writeValue when
    // the sanitised value equals the current model value, which would otherwise
    // leave the rejected character visible in the field on iOS WKWebView and
    // on mobile browsers.
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    if (isIonInput && host.value !== value) {
      host.value = value;
    }
    this.contactForm.controls['mobile_number'].setValue(value);
    this.mobileNumberValue = value;
  }
  getPassengerDetals() {
    this.commonStorage.localSet('passengerGstInfo', null);
    let mob = this.contactForm.value.mobile_number.toString();
    this.apiFactory.getPassengerDetails(mob).subscribe(res => {
      if (res.code == 200) {
        this.passengerForm[0].controls.sex.setValue(res.passenger_title);
        this.passengerForm[0].controls.name.setValue(res.passenger_name);
        this.passengerForm[0].controls.age.setValue(res.passenger_age);
        this.contactForm.controls['email'].setValue(res.email);
        this.address = res.address;
        if (res.cust_comp_gst_code) {
          this.commonStorage.localSet('passengerGstInfo', res);
        }
      }
    }, err => {});
  }
  onAgeChange(ev, i, type) {
    if (this.metaData.msiteFolder == 'ourbustheme') {
      this.showFormError = false;
      this.formErrorMessage = null;
      const input = ev.target;
      let value = input.value;
      value = value.replace(/[^0-9]/g, '');
      const trimmedValue = parseInt(value, 10).toString();
      if (trimmedValue == '0') {
        input.value = '';
        if (type === 1) {
          this.passengerForm[i].controls['age'].setValue(input.value);
        } else {
          this.passengerFormR[i].controls['age'].setValue(input.value);
        }
        return;
      }
      if (value.length > 3) {
        value = value.substring(0, 3);
      }
      if (type === 1) {
        this.passengerForm[i].controls['age'].setValue(value);
      } else {
        this.passengerFormR[i].controls['age'].setValue(value);
      }
      let age = value;
      // let age: string = '';
      if (type === 1) {
        age = this.passengerForm[i].value.age != null ? this.passengerForm[i].value.age.toString() : '';
      } else {
        age = this.passengerFormR[i].value.age != null ? this.passengerFormR[i].value.age.toString() : '';
      }
      const ageValue = parseInt(age, 10);
      if (ageValue > 150) {
        if (type == 1) {
          this.passengerForm[i].controls['age'].setValue(150);
        } else {
          this.passengerFormR[i].controls['age'].setValue(150);
        }
      }
    } else {
      this.showFormError = false;
      this.formErrorMessage = null;
      let age = '';
      if (type == 1) {
        age = this.passengerForm[i].value.age != null ? this.passengerForm[i].value.age.toString() : '';
      } else {
        age = this.passengerFormR[i].value.age != null ? this.passengerFormR[i].value.age.toString() : '';
      }
      age = age.replace(/[^0-9]/g, '');
      const parsedAge = age === '' ? null : parseInt(age);
      if (type == 1) {
        this.passengerForm[i].controls['age'].setValue(parsedAge);
      } else {
        this.passengerFormR[i].controls['age'].setValue(parsedAge);
      }
      if (age.length > 2) {
        if (type == 1) {
          this.passengerForm[i].controls['age'].setValue(age.slice(0, 2));
        } else {
          this.passengerFormR[i].controls['age'].setValue(age.slice(0, 2));
        }
      }
    }
  }
  selectPassportDate(type, date, i) {
    var _this3 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dt;
      if (date) {
        dt = _this3.dateService.getDateObjFromDateStr(date);
      } else {
        dt = _this3.dateService.getToday();
      }
      let modal = yield _this3.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_3__.CalendarModalPage,
        componentProps: {
          departureDate: dt,
          showPastDate: type == 1 ? true : false,
          title: type == 1 ? "Select Issue Date" : "Select Expiry Date",
          deactivateFutureDate: type == 1 ? true : false
          // type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        let dateStr = data.formattedDate;
        if (type == 1) {
          _this3.passengerForm[i].controls.passport_issued_date.setValue(dateStr);
        } else {
          _this3.passengerForm[i].controls.passport_expiry_date.setValue(dateStr);
        }
      }
      ;
    })();
  }
  selectPassportDateR(type, date, i) {
    var _this4 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let dt;
      if (date) {
        dt = _this4.dateService.getDateObjFromDateStr(date);
      } else {
        dt = _this4.dateService.getToday();
      }
      let modal = yield _this4.modalController.create({
        component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_3__.CalendarModalPage,
        componentProps: {
          departureDate: dt,
          showPastDate: type == 1 ? true : false,
          title: type == 1 ? "Select Issue Date" : "Select Expiry Date",
          deactivateFutureDate: type == 1 ? true : false,
          type: type
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        let dateStr = data.formattedDate;
        if (type == 1) {
          _this4.passengerFormR[i].controls.passport_issued_date.setValue(dateStr);
        } else {
          _this4.passengerFormR[i].controls.passport_expiry_date.setValue(dateStr);
        }
      }
    })();
  }
  resetForm() {
    for (let i = 0; i < this.passengerForm.length; i++) {
      var _this$concessions_cat6;
      this.passengerForm[i].controls['name'].setValue("");
      this.passengerForm[i].controls['sex'].setValue("");
      this.passengerForm[i].controls['age'].setValue("");
      this.passengerForm[i].controls['id_card_type'].setValue(null);
      this.passengerForm[i].controls['id_card_number'].setValue(null);
      this.passengerForm[i].controls['passport_issued_date'].setValue("");
      this.passengerForm[i].controls['passport_expiry_date'].setValue("");
      this.passengerForm[i].controls['place_of_issue'].setValue("");
      this.passengerForm[i].controls['concessions_category'].setValue(String((_this$concessions_cat6 = this.concessions_category) === null || _this$concessions_cat6 === void 0 || (_this$concessions_cat6 = _this$concessions_cat6[0]) === null || _this$concessions_cat6 === void 0 ? void 0 : _this$concessions_cat6.id));
      this.passengerForm[i].controls['name_by_id'].setValue("");
      this.passengerForm[i].controls['id_number'].setValue("");
    }
  }
  addExistingPass() {
    var _this5 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.resetForm();
      const modal = yield _this5.modalController.create({
        component: _add_existing_passenger_add_existing_passenger_component__WEBPACK_IMPORTED_MODULE_2__.AddExistingPassengerComponent,
        componentProps: {
          travellerLength: _this5.onwardSeatDetails.length,
          passengerList: _this5.selectedPassengerList
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data != undefined) {
        _this5.selectedPassengerList = data;
        for (var i = 0; i < _this5.selectedPassengerList.length; i++) {
          if (_this5.selectedPassengerList[i].age) _this5.passengerForm[i].controls['age'].setValue(_this5.selectedPassengerList[i].age.substr(0, 2));
          if (_this5.selectedPassengerList[i].name) _this5.passengerForm[i].controls['name'].setValue(_this5.selectedPassengerList[i].name);
          if (_this5.selectedPassengerList[i].title) _this5.passengerForm[i].controls['sex'].setValue(_this5.selectedPassengerList[i].title);
        }
      }
    })();
  }
  snackPreferences() {
    var _this6 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let modal = yield _this6.modalController.create({
        component: _snack_preference_snack_preference_page__WEBPACK_IMPORTED_MODULE_4__.SnackPreferencePage,
        componentProps: {
          returnResId: _this6.isReturn ? _this6.commonStorage.getItem("returnResId") : null,
          onwardResId: _this6.commonStorage.getItem("onwardResId"),
          isReturn: _this6.isReturn
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
      if (data) {
        _this6.snack = data;
        _this6.commonStorage.localSet('snack_details', _this6.snack);
        _this6.submitPassengerDetails();
      }
    })();
  }
  payAmount(amount) {
    const safeAmount = amount !== null && amount !== void 0 ? amount : 0;
    return safeAmount.toFixed(2);
  }
  commaSeparate(data) {
    if (data) {
      let city = data.split(',');
      return city[city.length - 1];
    } else {
      return '';
    }
  }
  onChangeWakeupCall() {
    this.commonStorage.localSet('wakeUpCall', this.wakeUpCall);
  }
  gstState() {
    this.apiFactory.gstState().subscribe(res => {
      if (res.code === 200) {
        this.state = res.states.map(state => ({
          ...state,
          name: state.name.toUpperCase()
        }));
      } else {
        this.util.showToast(res.message);
      }
    }, err => {});
  }
  onchangeStateId(ev) {
    if (this.stateId.length > 6) {
      this.stateId = this.stateId.substr(0, 6);
    }
    if (this.stateId.length < 6) {
      this.stateGetName = '';
      this.stateType = '';
      this.cityName = '';
      this.cityId = '';
    }
    if (this.stateId.length == 6) {
      let gst = '';
      if (this.metaData.msiteFolder != 'ourbustheme') {
        gst = this.gstId;
      } else {
        gst = '';
      }
      this.apiFactory.getStateByPin(this.stateId, gst).subscribe(res => {
        if (res.code == 200) {
          if (res.result.city != '') {
            this.cityName = res.result.city;
          }
          this.cityId = res.result.city;
          this.stateType = res.result.state.toUpperCase();
          if (res.result.state) {
            this.isEditable = false;
          } else {
            this.isEditable = true;
          }
          if (this.isServiceTaxApplicable == true) {
            this.passengerDetails.gst_info = {
              "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
              "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
              "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
            };
          }
        } else {
          this.stateGetName = '';
          this.stateType = '';
          this.cityName = '';
          this.cityId = '';
          this.util.showToast(res.message);
        }
      }, err => {});
    }
    if (this.stateId.length < 6) {
      this.isEditable = true;
      this.isState = true;
    }
  }
  onchangeCityId(ev) {
    if (this.cityId == '') {
      this.cityName = '';
    } else {
      if (this.isServiceTaxApplicable == true) {
        this.passengerDetails.gst_info = {
          "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
          "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
          "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
        };
      }
    }
  }
  onchangeId(ev) {
    if (this.isServiceTaxApplicable == true) {
      this.passengerDetails.gst_info = {
        "pin_code": this.gstInfoConfig == null || this.gstInfoConfig.pincode == 'show' ? this.stateId : null,
        "state": this.gstInfoConfig == null || this.gstInfoConfig.state == 'show' && this.stateGetName ? this.stateGetName : this.gstInfoConfig.state == 'show' && this.stateType ? this.stateType : null,
        "city": this.gstInfoConfig == null || this.gstInfoConfig.city == 'show' && this.cityName ? this.cityName : this.gstInfoConfig.city == 'show' && this.cityId ? this.cityId : null
      };
    }
  }
  onChangeWhatsappSwitch() {
    this.commonStorage.localSet('isWPSwitchOn', this.isWPSwitchOn);
  }
  callFarebreakup() {
    var _this7 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalController.create({
        component: _price_breakup_price_breakup_component__WEBPACK_IMPORTED_MODULE_6__.PriceBreakupComponent,
        componentProps: {
          filData: _this7.globalData,
          isReturn: _this7.isReturn,
          idProof: false,
          phoneBooking: false,
          payFromWallet: false,
          checkCancelProtect: true,
          idProofCnt: 0,
          appliedOfferCoupon: '',
          promoCoupon: '',
          appliedcoupon1: false,
          appliedcoupon2: false,
          appliedCouponname: '',
          smartMilesDiscount: 0,
          smartMileCoupon: '',
          pnrDiscountAplied: false,
          quotePnrForm: {},
          privCardNumber: '',
          onwardSeatDetails: _this7.onwardSeatDetails,
          returnSeatDetails: _this7.returnSeatDetails,
          isFromCoachLayout: false
        },
        cssClass: '',
        breakpoints: [0, 0.3, 0.5, 0.8],
        initialBreakpoint: 0.3
      });
      yield modal.present();
    })();
  }
  farebreakUpcall() {
    var _this$commonStorage$g5;
    let pathForBooking = '';
    pathForBooking = "res_id=" + this.globalData.RESERVATION_DATA.reserveId;
    if (this.util.isWebApp()) {
      pathForBooking += "&native_app_type=6";
    } else {
      if (this.util.isIos()) {
        pathForBooking += "&native_app_type=9";
      } else {
        pathForBooking += "&native_app_type=10";
      }
    }
    if (this.isReturn) {
      for (let item of this.passengerForm) {
        this.concession_details.push({
          "seat": item.value.seat_number,
          "concession_card": item.value.id_number,
          "type": item.value.concessions_category,
          "age": item.value.age,
          "is_round_trip": false
        });
      }
      for (let item of this.passengerFormR) {
        this.concession_details.push({
          "seat": item.value.seat_number,
          "concession_card": item.value.id_number,
          "type": item.value.concessions_category,
          "age": item.value.age,
          "is_round_trip": true
        });
      }
    } else {
      for (let item of this.passengerForm) {
        this.concession_details.push({
          "seat": item.value.seat_number,
          "concession_card": item.value.id_number,
          "type": item.value.concessions_category,
          "age": item.value.age,
          "is_round_trip": false
        });
      }
    }
    pathForBooking += "&origin=" + this.globalData.SEARCH_DATA.originCity.id;
    pathForBooking += "&destination=" + this.globalData.SEARCH_DATA.destCity.id;
    pathForBooking += "&boarding_at=" + (this.reservationData.boardingStage ? this.reservationData.boardingStage.id : '');
    pathForBooking += "&drop_off=" + (this.reservationData.droppingStage ? this.reservationData.droppingStage.id : '');
    pathForBooking += "&no_of_seats=" + this.onwardSeatDetails.length;
    pathForBooking += "&is_mobile_app=true";
    if (this.isReturn) {
      pathForBooking += "&is_round_trip=true";
      pathForBooking += "&return_res_id=" + this.reservationDataReturn.reserveId;
    } else {
      pathForBooking += "&is_round_trip=false";
    }
    if (this.isBima) {
      pathForBooking += "&is_bima=true";
    }
    if (this.metaData.showCancelProtect) {
      pathForBooking += "&is_cancel_protect=" + true;
    }
    let seatNumbers = [];
    for (let s of this.onwardSeatDetails) {
      seatNumbers.push(s.seat_number);
    }
    let seatNumbersReturn = [];
    for (let s of this.returnSeatDetails) {
      seatNumbersReturn.push(s.seat_number);
    }
    let promoCoupon;
    promoCoupon = '';
    let data = {
      "seat_numbers": seatNumbers,
      "no_of_seats": this.onwardSeatDetails.length,
      "return_seat_numbers": seatNumbersReturn,
      "use_smart_miles": false,
      "passenger_titles": {},
      "boarding_at": this.reservationData.boardingStage.id,
      "drop_off": this.reservationData.droppingStage.id,
      "return_boarding_at": this.isReturn ? this.reservationDataReturn.boardingStage.id : '',
      "return_dropoff": this.isReturn ? this.reservationDataReturn.droppingStage ? this.reservationDataReturn.droppingStage.id : '' : '',
      "offer_coupon": '',
      "promo_coupon": promoCoupon,
      "previous_pnr_details": {},
      "coupon_details": this.passengerDetails && this.passengerDetails.coupon_details ? this.passengerDetails.coupon_details : [],
      // "use_e_discount": this.commonStorage.getItem('deals').e_ticket_discount ? true : false,
      "use_e_discount": ((_this$commonStorage$g5 = this.commonStorage.getItem('deals')) === null || _this$commonStorage$g5 === void 0 || (_this$commonStorage$g5 = _this$commonStorage$g5.e_ticket_discount) === null || _this$commonStorage$g5 === void 0 ? void 0 : _this$commonStorage$g5.length) > 0 ? true : false,
      "priv_card_number": '',
      "is_cancel_protect": true,
      "concession_details": this.concessions_category ? this.concession_details : []
    };
    this.apiFactory.fareBreakUp(data, pathForBooking).subscribe(res => {
      this.fareBreakup_hash = res.fare_break_up_hash;
      this.fareBreakUpDetails = res;
      this.concessionFareDetails = res.concession_fare_details;
      if (this.concessionFareDetails) {
        for (let seat of this.concessionFareDetails) {
          if (seat.is_round_trip == true) {
            for (let i = 0; i < this.passengerFormR.length; i++) {
              if (this.passengerFormR[i].get('seat_number').value === seat.seat) {
                this.passengerFormR[i].get('concession_fare').setValue(seat.fare);
              }
              // this.passengerForm[i].get('concession_fare').setValue(seat.fare);
            }
          } else if (seat.is_round_trip == false)
            // if(this.passengerForm?.length > 0){
            for (let i = 0; i < this.passengerForm.length; i++) {
              if (this.passengerForm[i].get('seat_number').value === seat.seat) {
                this.passengerForm[i].get('concession_fare').setValue(seat.fare);
              }
            }
          // }
        }
      }
    }, err => {
      //this.loaderService.hideLoadingDefault();
    });
  }
  getObjectKeys(obj) {
    return obj ? Object.keys(obj) : [];
  }
  formatDuration(duration) {
    return duration.replace(":", "h ") + "m";
  }
  ///----------------------tsrtc code added----------------------------------------------------------
  ageValidationToast(message) {
    var _this8 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this8.toastController.create({
        message: message,
        duration: 3000,
        position: 'bottom'
        // color: 'danger'
      });
      yield toast.present();
    })();
  }
  onCocessionChangeAgeValidation(event, i, formType) {
    var _formGroup$i;
    const formGroup = formType === 1 ? this.passengerForm : this.passengerFormR;
    const ageControl = formGroup[i].get('age');
    const ageValue = ageControl === null || ageControl === void 0 ? void 0 : ageControl.value;
    const categoryControl = formGroup[i].get('concessions_category');
    const isCardControl = formGroup[i].get('isCard');
    let selectedPassenger = (_formGroup$i = formGroup[i]) === null || _formGroup$i === void 0 ? void 0 : _formGroup$i.value;
    let selectedCategory = this.concessions_category.find(data => data.id == (selectedPassenger === null || selectedPassenger === void 0 ? void 0 : selectedPassenger.concessions_category));
    let categoryWithoutValidation = this.concessions_category.find(category => !category.requires_card_validation);
    if (!ageValue || isNaN(ageValue)) {
      ageControl === null || ageControl === void 0 || ageControl.setErrors({
        required: true
      });
      this.ageValidationToast(`Age must be ${this.metaData.min_age_for_retired_emp} or above for ${selectedCategory.type}.`);
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return false;
    }
    if ((selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.type) === this.rtdRtcEmployee && ageValue < this.metaData.min_age_for_retired_emp) {
      this.ageValidationToast(`Age must be ${this.metaData.min_age_for_retired_emp} or above for ${selectedCategory.type}.`);
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return false;
    }
    if ((selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.type) === this.journaList && ageValue < this.metaData.max_child_age_limit) {
      this.ageValidationToast(`Age must be ${this.metaData.max_child_age_limit} or above for ${selectedCategory.type}.`);
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return false;
    }
    return true;
  }
  getCardValidationRequired(i) {
    var _this$passengerForm$i;
    return ((_this$passengerForm$i = this.passengerForm[i]) === null || _this$passengerForm$i === void 0 || (_this$passengerForm$i = _this$passengerForm$i.value) === null || _this$passengerForm$i === void 0 ? void 0 : _this$passengerForm$i.cardValidationRequired) || false;
  }
  onConcessionChange(ev, i, type, seat) {
    if (!this.onCocessionChangeAgeValidation(ev, i, type)) {
      return;
    }
    let concession = this.concessions_category;
    let selectedCategory = type === 1 ? concession.find(data => data.id == this.passengerForm[i].value.concessions_category) : concession.find(data => data.id == this.passengerFormR[i].value.concessions_category);
    let isCardValidationRequired = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.requires_card_validation;
    let isCaptureCardDetails = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.capture_card_details;
    if (type === 1) {
      this.cardValidationRequiredState[i] = isCardValidationRequired;
    } else {
      this.cardValidationRequiredStateReturn[i] = isCardValidationRequired;
    }
    let shouldShowCard = isCaptureCardDetails || !isCardValidationRequired && isCaptureCardDetails;
    this.updateFormControls(ev, i, type, shouldShowCard, seat);
    this.farebreakUpcall();
  }
  updateFormControls(ev, i, type, shouldShowCard, seat) {
    const form = type === 1 ? this.passengerForm : this.passengerFormR;
    const cardValidationState = type === 1 ? this.cardValidationRequiredState : this.cardValidationRequiredStateReturn;
    form[i].value.concessions_category = ev.detail.value;
    if (shouldShowCard) {
      form[i].controls['isCard'].setValue(true);
      setTimeout(() => {
        let ele = document.getElementById(`input${type === 1 ? i : 'R' + i}`);
        if (ele) ele.setFocus();
      }, 800);
      form[i].controls['name_by_id'].setValue('');
      form[i].controls['concession_fare'].setValue('');
      form[i].controls['id_number'].setValue('');
    } else {
      form[i].controls['concession_fare'].setValue(seat.fare);
      form[i].controls['id_number'].setValue('');
      form[i].controls['name_by_id'].setValue('');
      form[i].controls['isCard'].setValue(false);
    }
  }
  cardDetails(ev, i, type, seat) {
    let concession = this.concessions_category;
    let selectedCategory = type == 1 ? concession.find(data => data.id == this.passengerForm[i].value.concessions_category) : concession.find(data => data.id == this.passengerFormR[i].value.concessions_category);
    let isCardValidationRequired = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.requires_card_validation;
    let isCaptureCardDetails = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.capture_card_details;
    if (!isCardValidationRequired || !isCaptureCardDetails) {
      return;
    }
    let data = {
      "concession_type_id": type == 1 ? this.passengerForm[i].value.concessions_category : this.passengerFormR[i].value.concessions_category,
      "concession_card": type == 1 ? this.passengerForm[i].value.id_number : this.passengerFormR[i].value.id_number,
      "seat_number": seat.seat_number,
      "passenger_age": "",
      "base_fare": seat.fare,
      "reservation_id": this.commonStorage.getItem('serviceDetails').reservation_id,
      "flexi_fare": this.commonStorage.getItem('serviceDetails').flexi_fare ? this.commonStorage.getItem('serviceDetails').flexi_fare : 0,
      "child_concession_percent": selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.concession_percentage,
      "auth_token": ""
    };
    if (ev && ev.keyCode == 13) {
      this.callValidatePassengerAPI(data, type, i);
    } else if (!ev) {
      this.callValidatePassengerAPI(data, type, i);
    }
  }
  callValidatePassengerAPI(data, type, i) {
    this.apiFactory.validatePassenger(data).subscribe(response => {
      if (response.code == 200) {
        let form = type == 1 ? this.passengerForm[i] : this.passengerFormR[i];
        form.controls['sex'].setValue(response.gender === 'FEMALE' ? 'Ms' : response.gender === 'MALE' ? 'Mr' : '');
        form.controls['name'].setValue(response.passenger_name);
        form.controls['name_by_id'].setValue(response.passenger_name);
        form.controls['concession_fare'].setValue(response.concession_fare);
        this.concession_details = [];
        this.farebreakUpcall();
      } else {
        this.util.showToast(response.message);
      }
    });
  }
  onAgeBlurr(event, i) {
    const ageValue = event.target.value ? event.target.value.toString().trim() : '';
    const categoryControl = this.passengerForm[i].get('concessions_category');
    const isCradControl = this.passengerForm[i].get('isCard');
    let categoryWithoutValidation = this.concessions_category.find(category => !category.requires_card_validation);
    if (!ageValue || isNaN(Number(ageValue))) {
      var _this$passengerForm$i2;
      this.ageValidationToast('Age is required.');
      (_this$passengerForm$i2 = this.passengerForm[i].get('age')) === null || _this$passengerForm$i2 === void 0 || _this$passengerForm$i2.setErrors({
        required: true
      });
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(String(this.concessions_category[0].id));
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCradControl.setValue(false);
      return;
    }
    let selectedConcessionCategory = this.passengerForm[i].get('concessions_category').value;
    this.farebreakUpcall();
    // this.onCocessionChangeAgeValidation(selectedConcessionCategory, i, type);
  }
  onAgeBlur(event, i, formType) {
    this.ageBlurSubject.next({
      event,
      i,
      formType
    });
  }
  handleAgeBlur(event, i, formType) {
    const formGroup = formType === 1 ? this.passengerForm : this.passengerFormR;
    const ageValue = event.target.value ? event.target.value.toString().trim() : '';
    const categoryControl = formGroup[i].get('concessions_category');
    const isCardControl = formGroup[i].get('isCard');
    let categoryWithoutValidation = this.concessions_category.find(category => !category.requires_card_validation);
    if (!ageValue || isNaN(Number(ageValue))) {
      var _formGroup$i$get;
      (_formGroup$i$get = formGroup[i].get('age')) === null || _formGroup$i$get === void 0 || _formGroup$i$get.setErrors({
        required: true
      });
      categoryControl === null || categoryControl === void 0 || categoryControl.setValue(categoryWithoutValidation ? String(categoryWithoutValidation.id) : '');
      isCardControl === null || isCardControl === void 0 || isCardControl.setValue(false);
      return;
    }
    let selectedConcessionCategory = categoryControl === null || categoryControl === void 0 ? void 0 : categoryControl.value;
    this.onCocessionChangeAgeValidation(selectedConcessionCategory, i, formType);
    this.farebreakUpcall();
  }
  ngOnDestroy() {
    if (this.ageBlurSubscription) {
      this.ageBlurSubscription.unsubscribe();
    }
  }
  isDisabled(i, formType) {
    if (!this.cardValidationRequired) {
      var _formGroup$i2, _selectedCategory$req;
      if (this.concessions_category == '' || this.concessions_category == undefined || this.concessions_category == null) {
        this.concessions_category = [];
        return false; // <- Explicitly return a boolean
      }
      const formGroup = formType === 1 ? this.passengerForm : this.passengerFormR;
      let selectedPassenger = (_formGroup$i2 = formGroup[i]) === null || _formGroup$i2 === void 0 ? void 0 : _formGroup$i2.value;
      let selectedCategory = this.concessions_category.find(data => data.id == (selectedPassenger === null || selectedPassenger === void 0 ? void 0 : selectedPassenger.concessions_category));
      let isCardValidationRequired = (_selectedCategory$req = selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.requires_card_validation) !== null && _selectedCategory$req !== void 0 ? _selectedCategory$req : false;
      let isNameEntered = (selectedPassenger === null || selectedPassenger === void 0 ? void 0 : selectedPassenger.name_by_id) !== '';
      return isCardValidationRequired && isNameEntered;
    }
    return false; // <- Fallback return if cardValidationRequired is true
  }
  isArray(value) {
    return Array.isArray(value);
  }
  validateBlacklistForBooking(mobile) {
    this.apiFactory.checkMobileRestrictionForBooking(mobile).subscribe(res => {
      if (res.code === 403) {
        var _res$result;
        const restrictionMessage = ((_res$result = res.result) === null || _res$result === void 0 ? void 0 : _res$result.message) || '';
        this.showBlacklistDialog(restrictionMessage);
      }
    }, err => {
      this.util.showToast(err);
    });
  }
  showBlacklistDialog(message) {
    var _this9 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this9.modalCtrl.create({
        component: _blacklisted_dialog_blacklisted_dialog_component__WEBPACK_IMPORTED_MODULE_13__.BlacklistedDialogComponent,
        componentProps: {
          message: message
        },
        cssClass: 'block-reservation-lock-small',
        backdropDismiss: false
      });
      yield modal.present();
      yield modal.onDidDismiss();
      _this9.router.navigate(['/seat-layout']);
    })();
  }
  checkAutofilledMobileBlacklist() {
    const mobile = this.contactForm.controls['mobile_number'].value;
    const digitsOnly = mobile ? mobile.toString().replace(/[^0-9]/g, '') : '';
    if (digitsOnly.length === 10) {
      this.apiFactory.checkMobileRestrictionForBooking(digitsOnly).subscribe(res => {
        if (res.code === 403) {
          this.contactForm.controls['mobile_number'].setValue('');
        }
      }, err => {});
    }
  }
}
_PassengerDetailsPage = PassengerDetailsPage;
_PassengerDetailsPage.ɵfac = function PassengerDetailsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PassengerDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_global_data_service__WEBPACK_IMPORTED_MODULE_15__.GlobalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_18__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_19__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_20__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_21__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_22__.DateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_exception__WEBPACK_IMPORTED_MODULE_23__.ExceptionProvider), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_24__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_25__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_27__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_firebase_analytics_service__WEBPACK_IMPORTED_MODULE_28__.FirebaseAnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ToastController));
};
_PassengerDetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: _PassengerDetailsPage,
  selectors: [["app-passenger-details"]],
  viewQuery: function PassengerDetailsPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.ionInputGst = _t.first);
    }
  },
  standalone: false,
  decls: 5,
  vars: 5,
  consts: [["ionInputGst", ""], [4, "ngIf"], [1, "ion-no-border", "theme1"], ["mode", "md", 2, "--border-width", "0px", 3, "ngClass"], [1, "themeone-head", 2, "margin-right", "40px"], ["slot", "start"], [2, "color", "var(--textFieldPlaceholderColor)", 3, "click"], [1, "theme1-bg-content", "theme1"], ["novalidate", "", 2, "margin-bottom", "75px"], [1, "cbus_card-1", 2, "border-bottom", "5px solid #EFEFEF", 3, "formGroup"], [1, "themeone-hd-txt-2"], [1, "themeone-ion-item", "cbus-country-code-icon", 2, "--padding-start", "0px", "border-bottom", "none", "margin-right", "-2.2%", "margin-top", "12px"], [2, "width", "100%"], ["size", "3"], ["class", "txt-input", "formControlName", "country_code", "placeholder", "Code", 3, "value", "click", 4, "ngIf"], ["color", "red", "mode", "md", "formControlName", "country_code", "style", "border-bottom: 1px solid #F1F2F4;--padding-start: 0px;width: 70px ;max-width: 95%;height: 100%;", "class", "countryCode", 4, "ngIf"], ["size", "8", 2, "padding-right", "0px"], ["label", "Mobile Number", "labelPlacement", "floating", "formControlName", "mobile_number", "inputmode", "numeric", "type", "tel", 2, "min-height", "50px", "border-bottom", "1px solid #F1F2F4", "color", "#333333", 3, "ionInput"], ["class", "themeone-ion-item", 4, "ngIf"], [1, "themeone-check-item", 2, "display", "none"], [3, "ngClass"], [1, "themeone-chklabel", 2, "font-size", "14px", "color", "#191966"], ["style", "padding-top:16px;", 4, "ngIf"], ["class", "cbus_card-1", "style", "    border-bottom: 5px solid #EFEFEF;", 4, "ngFor", "ngForOf"], ["class", "cbus_card-1", "style", "    border-bottom: 5px solid #EFEFEF;", 4, "ngIf"], ["class", "cbus-address-card-1", 4, "ngIf"], ["class", "cbus_card-1", "style", "margin:0px;border-bottom: 5px solid #EFEFEF;", 3, "ngClass", 4, "ngIf"], ["ion-button", "", 3, "ngClass"], [2, "padding", "16px 19px", "width", "-webkit-fill-available", "width", "-moz-available"], ["size", "7.5"], [1, "themeone-totalvalue"], [2, "margin-top", "4px"], [1, "themeone-viewbreakup", 2, "font-weight", "600", 3, "click"], ["class", "themeone-viewbreakup", "style", "color: #FFFFFF;", 4, "ngIf"], ["size", "4.5", 2, "text-align", "end", 3, "click"], [2, "margin", "auto", "font-weight", "600", "border-radius", "5px", 3, "ngClass"], ["class", "whole center", 4, "ngIf"], ["formControlName", "country_code", "placeholder", "Code", 1, "txt-input", 3, "click", "value"], ["color", "red", "mode", "md", "formControlName", "country_code", 1, "countryCode", 2, "border-bottom", "1px solid #F1F2F4", "--padding-start", "0px", "width", "70px", "max-width", "95%", "height", "100%"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "themeone-ion-item"], ["formControlName", "email", "type", "email", "label", "Email Id", "labelPlacement", "floating", 2, "color", "#333333"], [2, "padding-top", "16px"], ["size", "1.5", 2, "padding", "5px 0px 5px 0px"], ["src", "./assets/icon/theme1_wpicon.svg", "alt", "", 1, "img-icn"], ["size", "8", 2, "padding-left", "0px", "font-size", "14px", "color", "#333333", "font-weight", "bold"], ["size", "2.5", 2, "align-self", "center", 3, "ngClass"], ["class", "themeonetoggle", "style", "float: right;", "checked", "true", "mode", "ios", 3, "ngModelOptions", "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["color", "dark", "style", "float: right;", "checked", "true", "mode", "md", 3, "ngModelOptions", "ngModel", "ionChange", "ngModelChange", 4, "ngIf"], ["checked", "true", "mode", "ios", 1, "themeonetoggle", 2, "float", "right", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], ["color", "dark", "checked", "true", "mode", "md", 2, "float", "right", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "cbus_card-1", 2, "border-bottom", "5px solid #EFEFEF"], [3, "formGroup"], ["style", "padding-bottom: 10px;", 3, "ngClass", 4, "ngIf"], [1, "themeone-passenger-txt"], ["class", "cbus_pos", "style", "display: inline-flex;", 4, "ngIf"], [2, "padding", "0px", "padding-bottom", "10px"], ["formControlName", "name", "type", "text", "label", "First Name and Last Name", "labelPlacement", "floating", 2, "color", "#333333", 3, "keyup"], ["style", "margin-top: -10px;", 4, "ngIf"], [2, "margin-top", "-10px"], ["col-12", "", "style", "padding: 0px;", 4, "ngIf"], [2, "padding-bottom", "10px", 3, "ngClass"], [1, "cbus_pos", 2, "display", "inline-flex"], ["src", "./assets/icon/cbuspassSeat.svg", 2, "height", "22px", "width", "20px"], [1, "themeone-seatcolor"], ["style", "     margin-left: 15px;height: 22px;\n              width: 20px; border-radius: 20px;", "src", "./assets/icon/passFemale.svg", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n              width: 20px; border-radius: 20px;", "src", "./assets/icon/passMale.svg", 4, "ngIf"], ["src", "./assets/icon/passFemale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px", "border-radius", "20px"], ["src", "./assets/icon/passMale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px", "border-radius", "20px"], ["formControlName", "sex", 3, "value"], ["lines", "none", 2, "margin-left", "-20px"], ["lines", "none", 2, "margin-left", "-25px"], ["mode", "md", "item-left", "", "value", "Mr", 2, "--color-checked", "var(--bottomBarColor)", 3, "disabled"], [2, "padding-left", "10px", 3, "ngClass"], ["mode", "md", "item-left", "", "value", "Ms", 2, "--color-checked", "var(--bottomBarColor)", 3, "disabled"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 2, "color", "#333333", 3, "keyup"], ["col-12", "", 2, "padding", "0px"], [1, "themeone-ion-item", "cbus-cardtype-icon"], ["label", "Card Type", "labelPlacement", "floating", "color", "red", "mode", "md", "formControlName", "id_card_type", "placeholder", "Select Card", 1, "txt-lbl"], ["ngFor", "", 3, "ngForOf"], ["color", "red", "mode", "md", "formControlName", "id_card_type", "placeholder", "Select Card"], ["placeholder", "Card Number", "formControlName", "id_card_number", "type", "text"], ["col-6", "", 2, "padding", "0px", "padding-right", "5px"], ["placeholder", "Issue Date", "formControlName", "passport_issued_date", "type", "text", 3, "click", "readonly"], ["col-6", "", 2, "padding", "0px", "padding-left", "5px"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], [2, "padding", "0px"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", 2, "height", "35px", "width", "100%"], ["lines", "none", 2, "--background", "#fff", "--padding-start", "0px"], [1, "txt-lbl"], ["slot", "start", "name", "coupons", 3, "ngModelChange", "ionChange", "ngClass", "ngModel"], ["style", "    border-bottom: 5px solid #EFEFEF;", "class", "cbus_card-1", 4, "ngFor", "ngForOf"], ["formControlName", "name", "type", "text", "label", "First Name and Last Name", "labelPlacement", "floating", 3, "keyup"], ["style", "margin-top: -20px;", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n                width: 20px;", "src", "./assets/icon/passFemale.svg", 4, "ngIf"], ["style", "     margin-left: 15px;height: 22px;\n                width: 20px;", "src", "./assets/icon/passMale.svg", 4, "ngIf"], ["src", "./assets/icon/passFemale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px"], ["src", "./assets/icon/passMale.svg", 2, "margin-left", "15px", "height", "22px", "width", "20px"], ["formControlName", "sex"], ["lines", "none", 2, "margin-left", "-10px"], [2, "margin-top", "-20px"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup"], ["placeholder", "Card No.", "formControlName", "id_card_number", "type", "text"], [1, "cbus-address-card-1"], [1, "themeone-ion-item", 2, "margin-top", "0px"], ["label", "Address", "labelPlacement", "floating", "placeholder", "Enter Address", "name", "address", "type", "text", 1, "txt-lbl", 3, "ngModelChange", "ngModel"], [1, "cbus_card-1", 2, "margin", "0px", "border-bottom", "5px solid #EFEFEF", 3, "ngClass"], [1, "gstDiv"], [2, "font-weight", "bold", "color", "var(--bookingDetailsBgColor)"], ["name", "information-circle-outline", 2, "font-size", "20px", "margin-left", "5px", "color", "var(--bookingDetailsBgColor)", 3, "click"], ["placeholder", "Pin Code", "inputmode", "numeric", "type", "tel", "maxlength", "6", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["mode", "md", "placeholder", "State", "color", "red", 2, "--padding-start", "8px", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["name", "caret-down-outline", "slot", "end", 2, "width", "15px"], ["placeholder", "City", "type", "text", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], [1, "themeone-check-item", 2, "--background", "#fff"], ["slot", "start", 3, "ionChange", "ngModelChange", "ngClass", "ngModel", "ngModelOptions"], [1, "themeone-chklabel", 2, "font-size", "14px", 3, "ngStyle"], ["type", "text", "placeholder", "GST No.", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Registered Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "themeone-hd-txt-2", 2, "margin-top", "15px"], [1, "themeone-viewbreakup", 2, "color", "#FFFFFF"], [1, "whole", "center"], [1, "legend-box", 2, "position", "absolute", "bottom", "0", "width", "100% !important"], ["size", "6"], [2, "margin-top", "0px"], [2, "text-align", "end", "margin-top", "0px", 3, "click", "ngStyle"], [1, "gstMsg"], ["mode", "md", 1, "bg-cl"], [1, "head"], [1, "bg-content"], [1, "card-1", 3, "formGroup"], [1, "Contact-details"], [1, "hd-txt-2"], [1, "txt-input", 2, "margin-left", "20px", "align-items", "center"], ["size", "2.8"], ["style", "position: relative; display: flex; align-items: center;", 4, "ngIf"], ["size", "9", "offset", "0.2"], ["formControlName", "mobile_number", "placeholder", "Enter mobile number", "inputmode", "numeric", "type", "tel", 1, "txt-lbl", 3, "ionInput"], ["style", "font-size: 13px;\n      margin: 10px 0px 10px 22px;\n      color: var(--primary);", 4, "ngIf"], ["style", "width: 100%;font-size: 0px; opacity: 0.3;background: #a2a2a2;", 4, "ngIf"], ["class", "card-1 mr-tp-16", "style", "margin-bottom: -32px;", 4, "ngIf"], ["class", "card-1 mr-tp-16", 4, "ngFor", "ngForOf"], ["class", "card-1 mr-tp-16 mr-bt-16", 4, "ngIf"], ["class", "address-card-1", 4, "ngIf"], ["ion-button", "", 1, "bottom"], [1, "seats"], [1, "seat-lbl"], [2, "margin-top", "5px"], ["class", "seat-val", 4, "ngIf"], [1, "default-theme-viewBreakup", 2, "margin-left", "5px", "margin-top", "-2px", 3, "click"], [1, "pay", 3, "click"], [2, "text-align", "center"], ["formControlName", "email", "placeholder", "Enter email address", "type", "email", 1, "txt-lbl"], [2, "position", "relative", "display", "flex", "align-items", "center"], ["color", "red", "mode", "md", "interface", "popover", "formControlName", "country_code", 2, "flex", "1", "padding-right", "25px"], ["name", "chevron-down-outline", 1, "selectIcon", "arrowIconStyle"], [2, "font-size", "13px", "margin", "10px 0px 10px 22px", "color", "var(--primary)"], [2, "width", "100%", "font-size", "0px", "opacity", "0.3", "background", "#a2a2a2"], ["size-sm", ""], ["src", "./assets/icon/whatsapp.svg", "alt", "", 1, "img-icn"], ["size", "8"], ["size", "2"], ["checked", "true", 1, "default-toggle", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "card-1", "mr-tp-16", 2, "margin-bottom", "-32px"], [1, "pos", "addexisting", 3, "click"], [1, "card-1", "mr-tp-16"], [3, "formGroup", 4, "ngIf"], ["class", "Contact-details", 4, "ngIf"], ["class", "traveller_type", 4, "ngIf"], [1, "pos"], [1, "seatscolor"], [2, "text-align", "end"], [1, "traveller_details"], ["label", "Name", "labelPlacement", "floating", "placeholder", "Enter Name", "formControlName", "name", "type", "text", 3, "keyup"], [2, "padding-left", "8px"], ["mode", "md", "item-left", "", "value", "Mr", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], ["mode", "md", "item-left", "", "value", "Ms", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], ["style", "margin: 5px; box-shadow: none; border: 1px solid #bab2b2;", 4, "ngIf"], ["col-12", "", 4, "ngIf"], ["style", "color: red;\n                font-size: 10px;\n                font-weight: 700;\n                text-align: center;", 4, "ngIf"], [1, "traveller_type"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "min", "1", "max", "99", 3, "ionInput", "ionBlur", 4, "ngIf"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "max", "99", "pattern", "[0-9]*", "min", "1", 3, "keyup", 4, "ngIf"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "min", "1", "max", "99", 3, "ionInput", "ionBlur"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "max", "99", "pattern", "[0-9]*", "min", "1", 3, "keyup"], ["size", "12"], ["lines", "none", 1, "concession-select-item"], ["mode", "md", "cssClass", "custom-popover", "interface", "popover", "formControlName", "concessions_category", 1, "force-left-padding", 2, "color", "black", "--highlight-color-focused", "transparent", 3, "ionChange"], ["name", "chevron-down-outline", "slot", "end", 1, "selectIcon"], [2, "margin", "5px", "box-shadow", "none", "border", "1px solid #bab2b2"], [3, "size"], ["position", "stacked", 1, "txt-lbl"], ["placeholder", "Enter Card Number", "formControlName", "id_number", 3, "keyup", "id"], ["size", "6", 4, "ngIf"], [3, "click"], ["placeholder", "Card Name", "formControlName", "name_by_id", 3, "readonly"], ["col-12", ""], ["mode", "ios"], ["color", "red", "mode", "md", "interface", "popover", "formControlName", "id_card_type", "placeholder", "Select Card"], ["label", "ID card No.", "labelPlacement", "floating", "formControlName", "id_card_number", "placeholder", "Card No.", "type", "text"], ["col-4", ""], ["label", "Issue Date", "labelPlacement", "floating", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 3, "click", "readonly"], ["label", "Expiry Date", "labelPlacement", "floating", "type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["label", "Place of issue", "labelPlacement", "floating", "type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", 2, "height", "35px", "width", "100%"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "text-align", "center"], [1, "card-1", "mr-tp-16", "mr-bt-16"], ["lines", "none"], ["slot", "start", "color", "red", "name", "coupons", 2, "margin", "-11px 15px -12px -13px", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "margin: 5px;box-shadow: none;border: 1px solid #bab2b2;", 4, "ngIf"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          text-align: center;", 4, "ngIf"], ["class", "txt-lbl", "position", "floating", 4, "ngIf"], ["formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup", "ionBlur", 4, "ngIf"], ["formControlName", "age", "label", "Age", "labelPlacement", "floating", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup", 4, "ngIf"], ["position", "floating", 1, "txt-lbl"], ["formControlName", "age", "placeholder", "Age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 3, "keyup", "ionBlur"], ["mode", "md", "interface", "popover", "formControlName", "concessions_category", 2, "border", "1px solid #bab2b2", "border-radius", "8px", "color", "black", 3, "ionChange"], ["name", "chevron-down-outline", 1, "selectIcon"], ["value", "", "placeholder", "Enter Card Number", "formControlName", "id_number", 3, "keyup", "id"], ["value", "", "placeholder", "Card Name", "formControlName", "name_by_id", 3, "readonly"], ["label", "ID Card No.", "labelPlacement", "floating", "type", "text", "required", "", "formControlName", "id_card_number", "placeholder", "Card No.", 2, "height", "35px"], ["label", "Issue Date", "labelPlacement", "floating", "type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "label", "Place of issue", "labelPlacement", "floating", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "input", 2, "height", "35px", "width", "100%"], [1, "address-card-1"], ["class", "card-1  mr-bt-16", 3, "ngClass", 4, "ngIf"], [1, "card-1", "mr-bt-16", 3, "ngClass"], ["name", "information-circle-outline", 2, "font-size", "20px", "margin-left", "5px", 3, "click"], ["mode", "md", 4, "ngIf"], ["mode", "md"], ["inputmode", "numeric", "type", "tel", "maxlength", "6", "label", "Pin Code", "labelPlacement", "floating", 1, "txt-lbl", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["color", "red", "label", "State", "labelPlacement", "floating", 1, "txt-lbl", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["type", "text", "label", "City", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], ["slot", "start", "color", "red", 2, "margin", "-11px 15px -12px -13px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter GST number", "label", "GST ID", "labelPlacement", "floating", 1, "txt-lbl", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter Reg. Name", "label", "Reg. Name", "labelPlacement", "floating", 1, "txt-lbl", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "seat-val"], [2, "text-align", "end", "color", "var(--sectionHeaderTextColor)", "margin-top", "0px", 3, "click"], [1, "ourbustheme"], ["size", "8", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [2, "padding", "8px", "margin", "16px 8px"], [2, "display", "flex", "align-items", "center"], [1, "ourbus_ori_dest"], ["src", "././assets/icon/ourbus_ArrowRight.svg", 2, "margin", "0px 8px"], [1, "time-info"], ["size", "4"], [1, "time"], [1, "time-text"], [1, "date"], ["size", "4", 1, "duration"], [1, "ourbus_duration_time"], [1, "time", 2, "text-align", "end"], ["style", "border-bottom: 1px solid #EFEFEF;margin: 8px 0px;", 4, "ngIf"], ["class", "time-info", 4, "ngIf"], ["size", "1"], ["src", "././assets/icon/ourbus_profile.svg", 2, "width", "24px", "height", "24px"], ["size", "11", 1, "ourbus_pass_head"], ["style", "font-size: 14px;", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["style", "padding: 8px;margin: 16px 8px;", 4, "ngIf"], ["src", "././assets/icon/ourbus_PhoneCall.svg", 2, "width", "24px", "height", "24px"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", "style", "margin: 8px 0px;--min-height: 62px;", 4, "ngIf"], ["size", "3.5"], ["size", "8.5"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "62px"], ["fill", "outline", "formControlName", "mobile_number", "placeholder", "Enter phone number", "inputmode", "numeric", "type", "tel", "maxlength", "10", "label", "Phone Number", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "ionInput"], ["style", "margin: 0px 8px;", 4, "ngIf"], [2, "margin", "16px 8px"], [1, "ourbus_rowBg"], ["src", "././assets/icon/ourbus_tag.svg", 2, "width", "24px", "height", "24px"], ["size", "11"], [1, "ourbus_order_details"], [2, "border", "1px solid #D9D9D9", "margin", "0px"], [2, "padding", "5px 15px 20px 15px", ";background", "white"], ["expand", "block", "slot", "fixed", 1, "btnEdit", 2, "--background", "var(--iconsAndButtonsColor)", "--color", "var(--primaryText)", "font-size", "18px", "font-weight", "500", "height", "50px", 3, "click"], [2, "border-bottom", "1px solid #EFEFEF", "margin", "8px 0px"], [2, "font-size", "14px"], [1, "ourbus_passList"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "60px"], ["fill", "outline", "placeholder", "Enter your name", "label", "Name", "labelPlacement", "floating", "formControlName", "name", "type", "text", "inputmode", "text", "maxlength", "50", 1, "ourbus_labelSet", 2, "font-weight", "500", 3, "input"], ["size", "6", 2, "margin", "8px 0px"], ["mode", "ios", "formControlName", "sex", 2, "padding", "4px", 3, "ngModelChange", "ngModel"], ["value", "Mr", 1, "ourbus_segment", 3, "disabled"], ["value", "Ms", 3, "disabled"], ["size", "12", 4, "ngIf"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          margin-left: 8px;", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", "ourbus_inputText", 2, "margin", "8px 0px", "--min-height", "60px"], ["fill", "outline", "formControlName", "age", "placeholder", "Age", "pattern", "[0-9]*", "inputmode", "numeric", "type", "tel", "maxlength", "3", "label", "Age", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "input"], ["fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "60px"], ["position", "floating", 1, "ourbus_labelSet"], ["fill", "outline", "formControlName", "id_card_number", "placeholder", "Card No.", "type", "text", "label", "ID card No.", "labelPlacement", "floating", 1, "ourbus_labelSet"], ["fill", "outline", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", "label", "Issue Date", "labelPlacement", "floating", 1, "txt-lbl", 3, "click", "readonly"], ["fill", "outline", "type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["fill", "outline", "type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place of issue", "label", "Place of issue", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "margin-left", "8px"], ["mode", "md", "slot", "start", "name", "coupons", 1, "oubus_checkbox", 2, "--checkbox-background-checked", "var(--border-color-checked)", 3, "ngModelChange", "ionChange", "ngModel"], [1, "ourbus_pass_head", 2, "font-size", "14px"], ["style", "margin-top: 10px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "10px"], ["fill", "outline", "label", "Name", "labelPlacement", "floating", "placeholder", "Enter your name", "formControlName", "name", "type", "text", "inputmode", "text", "maxlength", "50", 1, "ourbus_labelSet", 2, "font-weight", "500", 3, "input"], ["mode", "ios", "formControlName", "sex", 2, "padding", "4px"], ["style", "color: red;\n            font-size: 10px;\n            font-weight: 700;\n            margin-left: 8px;", 4, "ngIf"], ["lines", "none", "fill", "outline", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px", "--min-height", "60px"], ["fill", "outline", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", "label", "Issue Date", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "click", "readonly"], ["fill", "outline", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 1, "ourbus_labelSet", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["fill", "outline", "type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", "label", "Place od issue", "labelPlacement", "floating", 1, "ourbus_labelSet", 2, "height", "35px", "width", "100%"], ["fill", "outline", "name", "address", "placeholder", "Enter your address", "type", "text", "label", "Address", "labelPlacement", "floating", "maxlength", "150", 1, "ourbus_labelSet", 3, "ngModelChange", "ngModel"], ["fill", "outline", "formControlName", "email", "placeholder", "Enter your email", "label", "Email", "labelPlacement", "floating", "type", "email", "maxlength", "50", 1, "ourbus_labelSet"], ["lines", "none", "mode", "md", 1, "selectedFlag"], [2, "margin", "-34px 0px 0px 0px", "font-size", "20px"], [1, "ourbus_inputText", 2, "height", "58px", "margin-left", "8px", 3, "readonly"], ["lines", "none", "mode", "md", "class", "selectedFlag_New", 4, "ngIf"], ["lines", "none", "mode", "md", 1, "selectedFlag_New"], [2, "font-size", "20px", "margin-right", "10px"], ["formControlName", "country_code", "placeholder", "Code", 3, "click", "ngModel"], ["formControlName", "country_code", "placeholder", "Code", 3, "click", "ngModelChange", "ngModel"], [2, "margin", "0px 8px"], ["size", "1", 2, "margin-top", "auto", "margin-bottom", "auto"], ["mode", "md", 1, "ourbusCheckbux", 2, "--checkbox-background-checked", "var(--border-color-checked)", 3, "click", "ngModelChange", "ngModel", "ngModelOptions"], ["size", "11", 1, "ourbusWhtsappText"], [1, "ourbus_pass_head", 2, "font-weight", "bold", "color", "var(--bookingDetailsBgColor)"], ["name", "information-circle", 1, "ourbus_info_icon", 3, "click"], ["lines", "none", "mode", "md", "class", "ourbus_custom_input", "style", "margin: 8px 0px;--min-height: 60px;", 4, "ngIf"], ["fill", "outline", "inputmode", "numeric", "type", "tel", "maxlength", "6", "label", "Pin Code", "labelPlacement", "floating", 1, "ourbus_labelSet", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["fill", "outline", "label", "State", "labelPlacement", "floating", "color", "red", "mode", "md", "interface", "popover", 1, "ourbus_labelSet", "labelState", 2, "white-space", "normal", 3, "ionChange", "ngModelChange", "disabled", "value", "ngModel", "ngModelOptions"], ["fill", "outline", "type", "text", "label", "City", "labelPlacement", "floating", 1, "ourbus_labelSet", "labelState", 3, "keyup", "ngModelChange", "disabled", "value", "ngModel", "ngModelOptions"], ["lines", "none", "lines", "none", 1, "no-padding", "ourbus_item", 2, "padding-inline-start", "0px"], [1, "ourbus_pass_head", 2, "color", "#2D2D2D"], ["slot", "end", "mode", "ios", 1, "ourbus_toggle", 3, "ngModelChange", "ionChange", "ngModel", "ngModelOptions"], ["class", "gst_card", 4, "ngIf"], [1, "gst_card"], ["lines", "none", "mode", "md", 1, "ourbus_custom_input", 2, "margin", "8px 0px"], ["fill", "outline", "type", "text", "placeholder", "Enter GST number", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["fill", "outline", "type", "text", "placeholder", "Enter Registration Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["style", "margin: 8px;", 4, "ngIf"], [2, "margin", "8px"], [1, "ourbus_farebreakup_curr"], ["size", "6", 2, "text-align", "end"], ["style", "padding: 8px;", 4, "ngIf"], [2, "padding", "8px"], [1, "ourbus_amount_payble"], [1, "ourbus_amount_paybl_amount"], ["size", "6", 2, "padding", "5px 0px"], [2, "margin-top", "0px", "margin-bottom", "6px", "font-family", "Test S\u00F6hne !important"], [2, "text-align", "end", "margin-bottom", "6px", "color", "var(--sectionHeaderTextColor)", "margin-top", "0px", 3, "click"], [1, "gstMsg", 2, "font-family", "Test S\u00F6hne !important", "margin-bottom", "7px"], ["slot", "start", 2, "margin-top", "-11px"], [1, "SeaBird_pass"], [1, "SeaBird_sub"], [1, "seaBirdbg-content"], [1, "seaBird-card-1", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white", "padding-left", "0px", "padding-right", "0px", 3, "formGroup"], [1, "Contact-details", 2, "padding-left", "16px", "padding-right", "16px"], [1, "hd-txt-2", 2, "padding-left", "16px", "padding-right", "16px"], ["class", "seabird-border-bottom", "style", " --background: white;", 4, "ngIf"], [1, "txt-input", 2, "padding-bottom", "10px", "padding-left", "16px", "padding-right", "16px"], ["size", "2.8", 1, "seabird-phone", 2, "border-bottom", "1px solid #a2a2a2", "display", "flex", "flex-direction", "column-reverse", "align-items", "center"], ["class", "txt-input", "formControlName", "country_code", 3, "value", "click", 4, "ngIf"], ["class", "SeaBird_code", "formControlName", "country_code", 4, "ngIf"], ["size", "9", "offset", "0.2", 1, "seabird-phone", 2, "border-bottom", "1px solid #a2a2a2"], ["lines", "none", 2, "--background", "white"], ["formControlName", "mobile_number", "label", "Enter phone number", "labelPlacement", "floating", "inputmode", "numeric", "type", "tel", 1, "txt-input", "txt-lbl", 3, "ionInput"], ["style", "font-size: 13px;\n        margin: 10px 0px 10px 22px;\n        color: var(--primary);", 4, "ngIf"], ["style", "padding-left: 16px;padding-right: 16px;", 4, "ngIf"], [1, "seaBird-card-1", "mr-tp-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white", "padding-left", "0px", "padding-right", "0px"], ["class", "seabird-co-passenger", 3, "formGroup", 4, "ngFor", "ngForOf"], ["class", "seaBird-card-1 mr-tp-16 mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;background: white;", 4, "ngIf"], ["class", "seaBird-card-1 mr-tp-16 mr-bt-16 seabird-address-border", "style", "--background: white;", 4, "ngIf"], ["class", "seaBird-card-1  mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;background: white;", 3, "ngClass", 4, "ngIf"], ["lines", "none", "style", "--background: none; margin: 0px 12px;", 4, "ngIf"], ["class", "seaBird-card-1  mr-bt-16", "style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;padding: 0px 12px;background: white;", 4, "ngIf"], [1, "seaBird-card-1", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "padding", "8px 12px", "background", "white"], ["size", "8", 2, "color", "black", "font-size", "14px", "font-weight", "bold"], ["style", "font-size: 10px;font-weight: 400;color: #999999;", 4, "ngIf"], [1, "seabirdAmount"], ["ion-button", ""], [1, "seabirdPay", 2, "display", "flex", "justify-content", "center", "align-items", "center", "flex-direction", "column", "padding", "10px 0px", 3, "click"], [1, "seabird-border-bottom", 2, "--background", "white"], ["formControlName", "email", "type", "email", "label", "Enter email address", "labelPlacement", "floating", 1, "txt-lbl"], ["formControlName", "country_code", 1, "txt-input", 3, "click", "value"], ["formControlName", "country_code", 1, "SeaBird_code"], [2, "padding-left", "16px", "padding-right", "16px"], ["size", "1.5"], ["size", "9"], ["mode", "md", "checked", "true", 1, "seabird-toggle", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "seabird-co-passenger", 3, "formGroup"], ["class", "Contact-details", "style", "padding-left: 16px;padding-right: 16px;", 4, "ngIf"], ["formControlName", "sex", 2, "width", "100%"], ["lines", "none", 2, "--background", "white", "width", "fit-content"], ["mode", "md", "value", "Mr", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], [2, "padding-left", "8px", 3, "ngClass"], ["lines", "none", 2, "--background", "white", "width", "fit-content", "margin-left", "-11px"], ["mode", "md", "value", "Ms", 2, "--color-checked", "var(--iconsAndButtonsColor)", "--color", "var(--iconsAndButtonsColor)", 3, "disabled"], [1, "styled-hr"], ["style", "color: red; font-size: 12px; font-weight: 700;padding-left: 16px;padding-right: 16px;", 4, "ngIf"], ["label", "Age", "labelPlacement", "floating", "formControlName", "age", "placeholder", "Age", "type", "number", 3, "keyup"], ["mode", "ios", 2, "--background", "white", "--min-height", "56px"], ["name", "caret-down-outline", "slot", "end", 2, "font-size", "12px", "color", "grey"], ["color", "red", "interface", "popover", "mode", "md", "formControlName", "id_card_type", "placeholder", "Select Card"], [2, "--background", "white"], ["formControlName", "id_card_number", "label", "Card Number", "labelPlacement", "floating", "type", "text"], ["label", "Issue Date", "labelPlacement", "floating", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 1, "txt-lbl", 3, "click", "readonly"], ["label", "Expiry Date", "labelPlacement", "floating", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "type", "text", 1, "txt-lbl", 3, "click", "readonly"], ["formControlName", "place_of_issue", "label", "Place of Issue", "labelPlacement", "floating", "placeholder", "Place of issue", "type", "text", 1, "txt-lbl"], [2, "color", "red", "font-size", "12px", "font-weight", "700", "padding-left", "16px", "padding-right", "16px"], [1, "seaBird-card-1", "mr-tp-16", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white"], ["slot", "start", "name", "coupons", "mode", "md", 2, "margin", "-11px 15px -12px -13px", "--background-checked", "#2B28ce", "--border-color-checked", "#2b28ce", 3, "ngModelChange", "ionChange", "ngModel"], ["style", "margin: 14px 9px;border: 1px solid #626262;border-radius: 10px;background: white;padding-left: 0px;padding-right:0px;", "class", "seaBird-card-1 mr-tp-16", 4, "ngFor", "ngForOf"], ["size", "4.5"], ["style", "color: red;font-size: 12px;font-weight: 700; padding-left: 16px;padding-right: 16px;\n            ", 4, "ngIf"], ["type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", "label", "Issue Date", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", "label", "Expiry Date", "labelPlacement", "floating", 1, "txt-lbl", 2, "height", "35px", "width", "100%", 3, "click", "readonly"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", "label", "Place of Issue", "labelPlacement", "floating", 1, "input", "txt-lbl", 2, "height", "35px", "width", "100%"], [1, "seaBird-card-1", "mr-tp-16", "mr-bt-16", "seabird-address-border", 2, "--background", "white"], [1, "seabird-border-bottom", 2, "margin-top", "0px", "--background", "white"], [1, "seaBird-card-1", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "background", "white", 3, "ngClass"], ["mode", "md", "style", "--background: white;", 4, "ngIf"], ["mode", "md", 1, "seabird-border-bottom", 2, "--background", "white"], ["color", "red", "mode", "md", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["mode", "md", 2, "--background", "white"], ["inputmode", "numeric", "type", "tel", "label", "Pin Code", "labelPlacement", "floating", "maxlength", "6", 1, "txt-lbl", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["lines", "none", 2, "--background", "none", "margin", "0px 12px"], ["mode", "md", "slot", "start", 1, "SeaBird_check", 2, "margin", "-11px 15px -12px -5px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], [1, "seaBird-card-1", "mr-bt-16", 2, "margin", "14px 9px", "border", "1px solid #626262", "border-radius", "10px", "padding", "0px 12px", "background", "white"], ["type", "text", "placeholder", "Enter GST number", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter Registration Name", 3, "ngModelChange", "ngModel", "ngModelOptions"], [2, "font-size", "10px", "font-weight", "400", "color", "#999999"], [1, "ion-no-border", "shyamoli_theme_header"], ["mode", "md", 2, "--border-width", "0px"], [1, "shyamolitheme-bg-content"], ["novalidate", ""], [1, "subheading"], ["lines", "none", 1, "mobile-item"], [1, "mobile-input-container"], ["class", "country-code-box", 3, "click", 4, "ngIf"], ["formControlName", "country_code", "mode", "md", "interface", "popover", "class", "country-code-select", "style", "text-align: center;", 4, "ngIf"], ["formControlName", "mobile_number", "placeholder", "Enter your mobile number", "inputmode", "numeric", "type", "tel", 1, "mobile-input", 3, "ionInput"], ["class", "intl-warning", 4, "ngIf"], ["lines", "none", "class", "email-item", 4, "ngIf"], ["class", "whatsapp-row", 4, "ngIf"], ["class", "card-1 mr-tp-16", 4, "ngIf"], ["class", "card-1 mr-tp-16 mr-bt-16", "style", "padding: 0px 10px;", 4, "ngIf"], ["class", "ion-padding shyamoli-footer-row", "style", "background: var(--iconsAndButtonsColor); border-top: 1px solid var(--iconsAndButtonsColor);border-top-left-radius: 20px;\n    border-top-right-radius: 20px; padding: 10px 20px 10px 20px;", 4, "ngIf"], [1, "country-code-box", 3, "click"], ["formControlName", "country_code", "mode", "md", "interface", "popover", 1, "country-code-select", 2, "text-align", "center"], [1, "intl-warning"], ["lines", "none", 1, "email-item"], ["formControlName", "email", "placeholder", "Enter your email", "type", "email", 1, "email-input"], [1, "whatsapp-row"], ["size", "9", 2, "color", "#333333", "font-size", "14px"], [2, "color", "#3BAD69"], ["mode", "ios", "checked", "true", 1, "default-toggle", 3, "ionChange", "ngModelChange", "ngModelOptions", "ngModel"], [1, "shyamoli-pos"], ["src", "./assets/icon/shyamoli-seat.svg", "alt", "Seat", 2, "height", "18px", "width", "18px", "vertical-align", "middle", "margin-right", "4px"], ["placeholder", "Enter your full name", "formControlName", "name", "type", "text", 1, "email-input", 3, "keyup"], ["size", "6.5", 2, "padding", "0px"], [2, "display", "inline-flex", "height", "50px"], ["mode", "md", "lines", "none", 2, "margin-right", "10px", "--padding-start", "0px", "display", "-webkit-box", "--inner-padding-end", "8px !important", 3, "click"], ["mode", "md", 2, "padding-left", "8px", "font-size", "16px", 3, "ngClass"], ["lines", "none", "mode", "md", 2, "--padding-start", "0px", "display", "-webkit-box", "--inner-padding-end", "8px !important", 3, "click"], ["size", "5.5", "style", "padding: 0px;", 4, "ngIf"], ["style", "margin: 15px 0px; box-shadow: none; border: 1px solid #bab2b2;", 4, "ngIf"], ["style", "color: red;\n                font-size: 10px;\n                font-weight: 700;\n                text-align: center;padding-top:5px;", 4, "ngIf"], ["size", "5.5", 2, "padding", "0px"], [1, "subheading", 2, "padding-left", "16px"], ["formControlName", "age", "placeholder", "Enter age", "type", "number", "inputmode", "numeric", "max", "2", "pattern", "[0-9]*", "min", "1", 1, "email-input", 3, "keyup"], [2, "margin", "15px 0px", "box-shadow", "none", "border", "1px solid #bab2b2"], ["placeholder", "Enter Card Number", "formControlName", "id_number", 1, "email-input", 3, "keyup", "id"], ["lines", "none", 1, "email-item", 3, "click"], ["placeholder", "Card Name", "formControlName", "name_by_id", 1, "email-input", 3, "readonly"], [3, "size", 4, "ngIf"], ["mode", "ios", "lines", "none", 1, "email-item"], ["color", "red", "mode", "md", "interface", "popover", "formControlName", "id_card_type", "placeholder", "ID Type", 1, "email-input"], ["formControlName", "id_card_number", "placeholder", "Enter ID number", "type", "text", 1, "email-input"], ["formControlName", "passport_issued_date", "placeholder", "Issue Date", "type", "text", 1, "email-input", 3, "click", "readonly"], ["type", "text", "formControlName", "passport_expiry_date", "placeholder", "Expiry Date", 1, "email-input", 2, "width", "100%", 3, "click", "readonly"], ["type", "text", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "email-input", 2, "width", "100%"], [2, "color", "red", "font-size", "10px", "font-weight", "700", "text-align", "center", "padding-top", "5px"], [1, "card-1", "mr-tp-16", "mr-bt-16", 2, "padding", "0px 10px"], ["lines", "none", "mode", "md", 2, "margin-right", "10px", "--padding-start", "0px", "display", "-webkit-box", "--inner-padding-end", "8px !important", 3, "click"], ["style", "color: red;\n          font-size: 10px;\n          font-weight: 700;\n          text-align: center;padding-top:5px;", 4, "ngIf"], ["formControlName", "age", "placeholder", "Enter age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", "class", "email-input", 3, "keyup", 4, "ngIf"], ["formControlName", "age", "placeholder", "Enter age", "type", "number", "inputmode", "numeric", "maxlength", "2", "pattern", "[0-9]*", 1, "email-input", 3, "keyup"], ["value", "", "placeholder", "Enter Card Number", "formControlName", "id_number", 1, "email-input", 3, "keyup", "id"], ["value", "", "placeholder", "Card Name", "formControlName", "name_by_id", 1, "email-input", 3, "readonly"], ["type", "text", "required", "", "formControlName", "id_card_number", "placeholder", "Enter ID number", 1, "email-input"], ["type", "text", "formControlName", "passport_issued_date", "placeholder", "Issue Date", 1, "email-input", 2, "width", "100%", 3, "click", "readonly"], ["type", "text", "label", "Place of issue", "labelPlacement", "floating", "required", "", "formControlName", "place_of_issue", "placeholder", "Place", 1, "email-input", 2, "width", "100%"], ["placeholder", "Enter Address", "name", "address", "type", "text", 1, "email-input", 3, "ngModelChange", "ngModel"], ["class", "card-1  mr-bt-16", "style", "padding: 0px 10px;", 3, "ngClass", 4, "ngIf"], [1, "Contact-details", 2, "margin-bottom", "0px", "width", "100%"], ["slot", "end", "name", "information-circle-outline", 2, "font-size", "20px", "margin-left", "5px", 3, "click"], ["class", "subheading", 4, "ngIf"], ["mode", "md", "lines", "none", "class", "email-item", 4, "ngIf"], ["mode", "md", "lines", "none", 1, "email-item"], ["inputmode", "numeric", "type", "tel", "maxlength", "6", "placeholder", "Enter pin code", 1, "email-input", 3, "ionInput", "ngModelChange", "ngModel", "ngModelOptions"], ["color", "red", "placeholder", "Enter state", 1, "email-input", 3, "ionChange", "ngModelChange", "value", "ngModel", "ngModelOptions", "interfaceOptions"], ["type", "text", "placeholder", "Enter city", 1, "email-input", 3, "keyup", "ngModelChange", "value", "ngModel", "ngModelOptions"], [1, "card-1", "mr-bt-16", 2, "padding", "0px 10px", 3, "ngClass"], [1, "Contact-details", 2, "margin", "0px"], ["slot", "start", "color", "red", "mode", "md", 2, "margin", "-11px 15px -12px -13px", 3, "ionChange", "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Enter GST number", 1, "email-input", 3, "keyup", "ngModelChange", "ngModel", "ngModelOptions"], ["lines", "none", 1, "email-item", 2, "padding-bottom", "10px"], ["type", "text", "placeholder", "Enter company name", 1, "email-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "ion-padding", "shyamoli-footer-row", 2, "background", "var(--iconsAndButtonsColor)", "border-top", "1px solid var(--iconsAndButtonsColor)", "border-top-left-radius", "20px", "border-top-right-radius", "20px", "padding", "10px 20px 10px 20px"], ["size", "6", 2, "display", "flex", "flex-direction", "column", "justify-content", "center"], [1, "themeone-seats1"], [1, "themeone-seat-lbl"], ["class", "themeone-seat-val", 4, "ngIf"], [2, "color", "#ffffff", "font-weight", "700", "margin-bottom", "0px", "margin-top", "0px", "font-size", "16px !important"], ["id", "breakup-modal", 2, "margin-top", "4px", "color", "#000000", "cursor", "pointer", "font-size", "12px !important", "font-weight", "600 !important", "margin-bottom", "4px !important", 3, "click"], ["style", "margin-top: 4px;color: #ffffff; cursor: pointer;font-size: 12px !important;font-weight: 600 !important;margin-bottom: 4px !important;", 4, "ngIf"], ["size", "6", 2, "display", "flex", "justify-content", "center", "align-items", "center"], [1, "shyamoli-pay-btn", 2, "--background", "#fdfdfd", "--color", "#000000", "font-weight", "700", "border-radius", "8px", "width", "100%", "font-size", "16px", "width", "130px", "margin-left", "40px", 3, "click"], [1, "themeone-seat-val"], [2, "margin-top", "4px", "color", "#ffffff", "cursor", "pointer", "font-size", "12px !important", "font-weight", "600 !important", "margin-bottom", "4px !important"]],
  template: function PassengerDetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, PassengerDetailsPage_ng_container_0_Template, 45, 19, "ng-container", 1)(1, PassengerDetailsPage_ng_container_1_Template, 44, 20, "ng-container", 1)(2, PassengerDetailsPage_ng_container_2_Template, 88, 27, "ng-container", 1)(3, PassengerDetailsPage_ng_container_3_Template, 52, 22, "ng-container", 1)(4, PassengerDetailsPage_ng_container_4_Template, 35, 14, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "cbustheme" || ctx.metaData.msiteFolder == "networktheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == null || ctx.metaData.msiteFolder == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "ourbustheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "seabirdTheme");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.metaData.msiteFolder == "shyamolitheme");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonMinValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonMaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: ["@charset \"UTF-8\";\n.head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.theme1-bg-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.bg-content[_ngcontent-%COMP%] {\n  --background: #e4e5e6;\n}\n\n.seaBirdbg-content[_ngcontent-%COMP%] {\n  --background: #F1F7FA;\n}\n.seaBirdbg-content[_ngcontent-%COMP%]   .ion-invalid[_ngcontent-%COMP%] {\n  --highlight-background: transparent !important;\n  background-color: transparent !important;\n}\n.seaBirdbg-content[_ngcontent-%COMP%]   .item-interactive.ion-valid[_ngcontent-%COMP%] {\n  --highlight-background: #a2a2a2;\n}\n\n.card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.seaBird-card-1[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n}\n\n.cbus_card-1[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  background: #fff;\n}\n\n.txt-c1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: right;\n  color: #3e3e52;\n}\n\n.pos[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n}\n\n.cbus_pos[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 19px;\n  align-items: center;\n}\n\n.mr-md[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.mr-tp-2[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n\n.mr-tp-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.Contact-details[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n  margin-bottom: 6px;\n}\n\n.Contact-details-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: var(--primaryText);\n  margin-bottom: 6px;\n}\n\n.seatscolor[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n}\n\n.addexisting[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  margin-top: 3px;\n  color: var(--sectionHeaderTextColor);\n}\n\n.hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #7e7e8c;\n}\n\n.img-icn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n}\n\n.routes-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  position: fixed;\n  bottom: 0px;\n  margin: 0px;\n  z-index: 99999;\n}\n\n.routes-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 12px;\n  align-items: center;\n  justify-content: center;\n  height: 45px;\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button1[_ngcontent-%COMP%] {\n  --background:var(--iconsAndButtonsColor);\n}\n\n.routes-footer[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%] {\n  --background:#3e3e52;\n}\n\n.pay-txt-1[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bolder;\n}\n\n.pay-txt-2[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mr-bt-34[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n}\n\n.mr-bt-16[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n.mr-15[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.chk-pos[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33%;\n}\n\n.txt-lbl[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  font-weight: normal;\n  color: #3e3e52 !important;\n}\n\n.txt-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.seg-btn[_ngcontent-%COMP%] {\n  width: 196px;\n  margin: 16px 0 0;\n  border-radius: 4px;\n  background-color: #eaeaea;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  height: 24px;\n  border: 1px solid #eaeaea;\n  border-radius: 4px;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #9b9b9b;\n  min-height: 0px;\n  text-transform: capitalize;\n}\n.seg-btn[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  color: var(--primaryText);\n  background-color: var(--iconsAndButtonsColor);\n  font-weight: bolder;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n}\n\n.businessTravelclick[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 54px;\n  z-index: 10;\n  bottom: 0;\n  background: #ffffff;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  box-shadow: 5px 10px 10px 10px #888888;\n}\n.bottom[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%] {\n  width: 65%;\n  display: flex;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-lbl[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  color: var(--iconsAndButtonsColor);\n  padding-left: 10px;\n}\n.bottom[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .seat-val[_ngcontent-%COMP%] {\n  margin: 0 0 0 10px;\n  font-size: 11px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .seabirdExl[_ngcontent-%COMP%] {\n  margin: 0 0 0 12px;\n  font-size: 13px;\n  font-weight: bolder;\n  color: #4a4a4a;\n}\n.bottom[_ngcontent-%COMP%]   .pay[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 100%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--viewBgColor);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.seabirdAmount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  display: block;\n  color: var(--bottomBarColor);\n  text-align: end;\n  padding-left: 10px;\n}\n\n.seabirdPay[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 7%;\n  border: 1px solid var(--iconsAndButtonsColor);\n  background-color: var(--iconsAndButtonsColor);\n  font-size: 13px;\n  font-weight: bolder;\n  color: var(--primaryText);\n  border-radius: 26px;\n  margin-left: 7px;\n  position: fixed;\n  bottom: 10px;\n}\n\n.gender[_ngcontent-%COMP%] {\n  color: red;\n  opacity: 1 !important;\n}\n\n.gstDiv[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.whole[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 50;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.6);\n}\n\n.legend-box[_ngcontent-%COMP%] {\n  border-radius: 2px;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14);\n  background-color: #ffffff !important;\n  opacity: 1 !important;\n  padding: 18px 16px;\n  width: 280px;\n  height: auto;\n}\n\n.gstMsg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4a4a4a;\n  font-weight: 400;\n}\n\n.themeone-head[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  --background: white;\n  -webkit-text-fill-color: #333333 !important;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: var(--placeholderColor) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--placeholderColor) !important;\n}\n\n.themeone-hd-txt-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #5F5F5F;\n}\n\n.themeone-seatcolor[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #333333;\n  margin: 1px 0px 0px 7px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.themeone-ion-item[_ngcontent-%COMP%] {\n  --inner-border-width: 0;\n  border-bottom: 1px solid #F1F2F4;\n  border-radius: 0px;\n  --border-width: 0px;\n  margin: 5px 0px 5px 0px;\n  color: #333333;\n  --padding-start: 0px;\n  --background: #fff;\n}\n\n.select-icon[_ngcontent-%COMP%] {\n  opacity: 0.8 !important;\n}\n\n.themeone-check-item[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  --inner-border-width: 0;\n  --padding-start: 0px;\n}\n\n.themeone-checkbox[_ngcontent-%COMP%] {\n  --border-radius: 0;\n  --background-checked: #191966;\n  height: 20px;\n  width: 20px;\n  --border-color: #2C3E50;\n  margin: 0px 16px 0px 0px;\n  --border-color-checked:#191966;\n  --checkbox-background-checked: #191966 !important;\n}\n\n.themeone-checkbox_2[_ngcontent-%COMP%] {\n  --border-radius: 0;\n  --background-checked: var(--bottomBarColor) !important;\n  height: 20px;\n  width: 20px;\n  --border-color: var(--bottomBarColor);\n  margin: 0px 16px 0px 0px;\n  --border-color-checked: var(--bottomBarColor) !important;\n  --checkbox-background-checked: var(--bottomBarColor) !important;\n}\n\n.themeone-passenger-txt[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333333;\n  font-weight: 700;\n}\n\n.themeone-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 95px;\n  z-index: 10;\n  bottom: 0;\n  background: #191966;\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.themeone-bottom_2[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  width: 100%;\n  height: 95px;\n  z-index: 10;\n  bottom: 0;\n  background: var(--bottomBarColor);\n  font-size: 13px;\n  transition: all linear 0.24s;\n  flex-direction: row;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n\n.themeone-totalvalue[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FFFFFF;\n  font-family: \"NotoSans\";\n  font-weight: 700;\n}\n\n.cbus-select-pickup-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor) !important;\n  color: #191966;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n  font-size: 16px;\n  height: 38px;\n}\n\n.themeone-select-pickup-btn[_ngcontent-%COMP%] {\n  --background: var(--iconsAndButtonsColor) !important;\n  --background-activated: var(--iconsAndButtonsColor);\n  color: var(--primaryText) !important;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n  font-size: 16px;\n  height: 38px;\n}\n\n.themeone-viewbreakup[_ngcontent-%COMP%] {\n  color: #FFBD16;\n  font-size: 12px;\n  font-family: \"NotoSans\";\n  font-weight: bold;\n}\n\n.default-theme-viewBreakup[_ngcontent-%COMP%] {\n  color: var(--iconsAndButtonsColor);\n  font-size: 12px;\n  font-family: \"NotoSans\";\n  font-weight: bolder;\n  margin-left: 5px;\n}\n\n.themeonetoggle[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --background-checked: #ffffff;\n  --border-radius: 16px;\n  --handle-background: grey;\n  --handle-background-checked: #191966;\n  --handle-border-radius: 25.5px;\n  --handle-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  --handle-height: 20px;\n  --handle-max-height: calc(100% - (var(--handle-spacing) * 2));\n  --handle-width: 18px;\n  --handle-spacing: 7px;\n  --handle-transition: transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;\n  width: 48px;\n  height: 24px;\n  contain: strict;\n  overflow: hidden;\n  border: 2px solid grey;\n  border-radius: 15px;\n  --track-background-checked:\t#ffffff: ;\n}\n\n.themeone-cbus[_ngcontent-%COMP%]   .toggle-checked[_ngcontent-%COMP%] {\n  border: 2px solid #191966 !important;\n}\n\nion-input[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nion-select[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(placeholder) {\n  opacity: 0.5;\n  min-width: 60px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(text) {\n  min-width: 60px;\n}\n\n.ourbustheme[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--placeholderColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_ori_dest[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .labelState[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  opacity: 1.6 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .time-info[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.ourbustheme[_ngcontent-%COMP%]   .time-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.ourbustheme[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n  margin: 0px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_duration_time[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px;\n  font-size: 12px;\n  border-bottom: 1px dashed #9D9D9D;\n  padding: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_pass_head[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--iconsAndButtonsColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_passList[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_segment[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_gender[_ngcontent-%COMP%] {\n  color: grey;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.9 !important;\n}\n.ourbustheme[_ngcontent-%COMP%]   .segment-button-checked[_ngcontent-%COMP%] {\n  background: var(--iconsAndButtonsColor) !important;\n  --indicator-color-checked: var(--iconsAndButtonsColor) !important;\n  color: var(--primaryText);\n  font-size: 14px;\n  font-weight: 500;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusCheckbux[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbusWhtsappText[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  color: #747474;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_order_details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2d2d2d;\n  margin-left: 4px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_rowBg[_ngcontent-%COMP%] {\n  background-color: #EAF2FF;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_farebreakup_curr[_ngcontent-%COMP%] {\n  color: #2D2D2D;\n  font-size: 14px;\n  font-weight: 300;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_payble[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  color: #2d2d2d;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_amount_paybl_amount[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2d2d2d;\n}\n.ourbustheme[_ngcontent-%COMP%]   .oubus_checkbox[_ngcontent-%COMP%] {\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_toggle[_ngcontent-%COMP%] {\n  --background-checked:var(--sectionHeaderTextColor);\n  --border-color-checked:var(--sectionHeaderTextColor);\n  --track-background-checked:var(--sectionHeaderTextColor);\n  padding-right: 0px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_item[_ngcontent-%COMP%] {\n  --padding-start: 5px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .gst_card[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n.ourbustheme[_ngcontent-%COMP%]   .ourbus_info_icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n  color: #2D2D2D;\n  margin-top: 2px;\n}\n\n.SeaBird_pass[_ngcontent-%COMP%] {\n  color: var(--homaPageHeadingTextColor);\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 26px;\n  letter-spacing: 0em;\n}\n\n.SeaBird_sub[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--homaPageHeadingTextColor);\n  padding: 0;\n  margin: 0;\n}\n\n.SeaBird_check[_ngcontent-%COMP%] {\n  --ion-color-primary: #3c3e52;\n}\n\nion-select.SeaBird_code[_ngcontent-%COMP%]::part(text) {\n  min-width: unset !important;\n}\n\n.styled-hr[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #a2a2a2;\n  margin-left: 24px;\n  margin-right: 18px;\n}\n\n.ourbus-checkbox[_ngcontent-%COMP%] {\n  margin: -11px 15px -12px -13px;\n  --border-radius: 0px;\n  --size: 22px;\n  --checkbox-background-checked:var(--border-color-checked) !important;\n}\n\n.custom-select[_ngcontent-%COMP%]   ion-icon.select-icon[_ngcontent-%COMP%] {\n  display: none !important; \n\n}\n\n.custom-select[_ngcontent-%COMP%]::part(icon) {\n  display: none !important; \n\n}\n\nion-select[_ngcontent-%COMP%]::part(icon), \nion-select[_ngcontent-%COMP%]::deep(.select-icon) {\n  display: none !important; \n\n}\n\nion-select[_ngcontent-%COMP%]   .select-icon[aria-hidden=false][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\nion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%] {\n  display: none !important; \n\n}\n\n.selectedFlag[_ngcontent-%COMP%] {\n  margin: 12px 0px 0px 0px !important;\n  max-height: max-content;\n}\n\n.selectedFlag_New[_ngcontent-%COMP%] {\n  margin: 12px 0px 0px 0px !important;\n  padding-top: 6px !important;\n  max-height: max-content;\n  margin: 11px 0px 0px 1px !important;\n  border: 1px solid #c2c2c2;\n  border-radius: 4px;\n}\n\n.selectIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n}\n\n.custom-popover[_ngcontent-%COMP%] {\n  --width: 300px !important; \n\n}\n\n.ourbus_custom_input[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\nion-select.force-left-padding[_ngcontent-%COMP%]::part(text) {\n  padding-left: 20px !important;\n}\n\n.card-type-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-right: 5px;\n}\n\nion-toggle.seabird-toggle[_ngcontent-%COMP%] {\n  --handle-background: white;\n  --handle-background-checked: var(--sectionHeaderTextColor);\n  --track-background: var(--ion-color-light-shade);\n  --track-background-checked: var(--ion-color-light-shade);\n}\n\nion-toggle.default-toggle[_ngcontent-%COMP%] {\n  --handle-background: white;\n  --handle-background-checked: var(--primary);\n  --track-background: var(--ion-color-light-shade);\n  --track-background-checked: var(--ion-color-light-shade);\n}\n\n.arrowIconStyle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  z-index: 1;\n}\n\n.concession-select-item[_ngcontent-%COMP%] {\n  border: 1px solid #bab2b2;\n  border-radius: 8px;\n  --background: white;\n  --padding-start: 12px;\n  --padding-end: 12px;\n  margin: 8px 0;\n}\n.concession-select-item.item-has-focus[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n}\n\n.shyamolitheme-bg-content[_ngcontent-%COMP%] {\n  \n\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%] {\n  border: 1px solid #D9D9D9;\n  margin: 12px;\n  border-radius: 5px;\n  box-shadow: none;\n  padding: 12px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .Contact-details[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: var(--sectionHeaderTextColor);\n  margin-bottom: 3px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .hd-txt-2[_ngcontent-%COMP%] {\n  color: #969696;\n  font-size: 13px;\n  margin: 2px 0px 0px 0px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .mobile-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-start: 0;\n  --background: transparent;\n  margin-bottom: 10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin: 10px 0px 0px 0px;\n  color: #626262;\n  font-size: 16px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .mobile-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 3px;\n  width: 100%;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .country-code-box[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n  border-radius: 8px;\n  padding: 15px 12px;\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  min-width: 60px;\n  text-align: center;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .country-code-select[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n  border-radius: 8px;\n  font-size: 14px;\n  height: 42px;\n  min-width: 60px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .mobile-input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  height: 48px; \n\n  font-size: 15px;\n  color: #333;\n  background: #fff;\n  padding-left: 14px; \n\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]     ion-input.mobile-input .native-input {\n  height: auto;\n  margin-left: 15px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .concession-select-item[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .intl-warning[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 8px 0 12px 2px;\n  color: var(--ion-color-primary);\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .email-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --padding-start: 0;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .email-input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  height: 48px; \n\n  font-size: 15px;\n  color: #333;\n  background: #fff;\n  margin-top: 4px;\n  padding-left: 14px; \n\n  display: flex;\n  align-items: center;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]     ion-input.email-input .native-input {\n  height: auto;\n  margin-left: 15px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .whatsapp-row[_ngcontent-%COMP%] {\n  border: 1px solid #ECFDF5;\n  padding: 10px;\n  margin: 15px 0px 10px 0px;\n  border-radius: 5px;\n  background-color: #ECFDF5;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .whatsapp-row[_ngcontent-%COMP%]   .img-icn[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .default-toggle[_ngcontent-%COMP%] {\n  --track-background-checked: #3BAD69;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-footer-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #333333;\n  padding: 12px 16px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-footer-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #191966;\n  font-size: 12px;\n  font-weight: 600;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-footer-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: #191966;\n  --background: #FFBD16;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 600;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-pos[_ngcontent-%COMP%] {\n  background: #fff7e6;\n  padding: 6px 12px;\n  border-radius: 20px;\n  display: inline-flex;\n  align-items: center;\n  float: right; \n\n  margin-top: -5px; \n\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-pos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  size: 10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .shyamoli-pos[_ngcontent-%COMP%]   .seatscolor[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 3px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select.countryCode[_ngcontent-%COMP%]::part(text) {\n  margin-left: 14px !important;\n  margin-top: 14px !important;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .traveller_details[_ngcontent-%COMP%] {\n  margin-left: -10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .traveller_type[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%] {\n  --background: transparent !important;\n  --background-focused: transparent !important;\n  --background-activated: transparent !important;\n  background: transparent !important;\n  box-shadow: none !important;\n  --min-height: 0px;\n  margin: 20px 30px;\n  \n\n  \n\n  border: none !important;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], \n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%], \n.shyamolitheme-bg-content[_ngcontent-%COMP%]   .transparent-item[_ngcontent-%COMP%]   .item-native[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item .item-inner, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item .item-native, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::after, \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(item-inner), \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(native), \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(start), \n.shyamolitheme-bg-content   [_nghost-%COMP%]     ion-item.transparent-item::part(end) {\n  border: none !important;\n  border-bottom: none !important;\n  box-shadow: none !important;\n  --inner-border-width: 0 !important;\n  --border-width: 0 !important;\n  --border-style: none !important;\n  background: transparent !important;\n}\n.shyamolitheme-bg-content[_ngcontent-%COMP%]   ion-select.countryCode[_ngcontent-%COMP%]::part(icon) {\n  display: unset !important;\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  right: 10%;\n  transform: none !important;\n  transition: none !important;\n}\n\nion-select.shyamoli-select[_ngcontent-%COMP%]::part(icon) {\n  display: unset;\n  position: absolute;\n  right: 10px;\n}\n\n.cbus-country-code-icon[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon) {\n  display: unset !important;\n  position: absolute;\n  right: 10%;\n  transform: none !important;\n  transition: none !important;\n}\n\n.cbus-cardtype-icon[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon) {\n  display: unset !important;\n  position: absolute;\n  transform: none !important;\n  transition: none !important;\n}\n\n.radio-gender-default[_ngcontent-%COMP%] {\n  -inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n[data-theme=shyamolitheme][_nghost-%COMP%]   .themeone-seats1[_ngcontent-%COMP%], [data-theme=shyamolitheme]   [_nghost-%COMP%]   .themeone-seats1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 2px;\n}\n[data-theme=shyamolitheme][_nghost-%COMP%]   .themeone-seats1[_ngcontent-%COMP%]   .themeone-seat-lbl[_ngcontent-%COMP%], [data-theme=shyamolitheme]   [_nghost-%COMP%]   .themeone-seats1[_ngcontent-%COMP%]   .themeone-seat-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000000;\n  font-weight: bold;\n}\n[data-theme=shyamolitheme][_nghost-%COMP%]   .themeone-seats1[_ngcontent-%COMP%]   .themeone-seat-val[_ngcontent-%COMP%], [data-theme=shyamolitheme]   [_nghost-%COMP%]   .themeone-seats1[_ngcontent-%COMP%]   .themeone-seat-val[_ngcontent-%COMP%] {\n  margin: 0 0 0 5px;\n  font-size: 12px;\n  font-weight: bolder;\n  color: #000000;\n}\n\n.address-card-1[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  margin-bottom: 16;\n}\n\n.cbus-address-card-1[_ngcontent-%COMP%] {\n  padding: 0px 22px;\n  margin: 0;\n  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0px, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0;\n  border-radius: 0;\n  margin-bottom: 16px;\n  border-bottom: 5px solid #EFEFEF;\n}\n\n.seabird-address-border[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin: 14px 9px;\n  border: 1px solid #626262;\n  border-radius: 10px;\n}\n\n.seabird-border-bottom[_ngcontent-%COMP%] {\n  --border-color: 1px solid #a2a2a2 !important;\n  margin: 0px 15px 0px 0px !important;\n}\n\n.seabird-phone[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  border-bottom: 1px solid black !important;\n}\n\n.seabird-co-passenger[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}"]
});

/***/ },

/***/ 47402
/*!********************************************************!*\
  !*** ./src/app/services/firebase-analytics.service.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseAnalyticsService: () => (/* binding */ FirebaseAnalyticsService)
/* harmony export */ });
/* harmony import */ var _home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/firebase-analytics */ 4970);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _common_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 70600);
/* harmony import */ var _appdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appdata */ 40172);
/* harmony import */ var _util_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util-provider */ 81101);

var _FirebaseAnalyticsService;







class FirebaseAnalyticsService {
  constructor(commonStorage, platform, appdata, util) {
    this.commonStorage = commonStorage;
    this.platform = platform;
    this.appdata = appdata;
    this.util = util;
    this.isInitialized = false;
    this.initializationPromise = null;
    const localData = this.commonStorage.localGet('metaData');
    this.operatorName = localData ? localData.operatorName : null;
    // Initialize Firebase Analytics
    this.initializationPromise = this.initializeAnalytics(localData);
    this.generateNewSessionId();
  }
  initializeAnalytics(localData) {
    var _this = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let firebaseInitOptions;
      if (localData && localData.msiteFolder == 'cbustheme') {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.c_firebaseConfig;
      } else {
        firebaseInitOptions = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig;
      }
      try {
        if (_this.appdata.isANDROID) {
          // For Android, Firebase is auto-initialized via google-services.json
          // No need to call initializeFirebase()
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Android');
        } else if (_this.appdata.isIOS) {
          // For iOS, Firebase is auto-initialized via GoogleService-Info.plist
          // The native Firebase SDK is already loaded, just mark as initialized
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for iOS');
        } else {
          // For Web, use initializeFirebase
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.initializeFirebase(firebaseInitOptions);
          _this.isInitialized = true;
          console.log('Firebase Analytics initialized successfully for Web');
        }
      } catch (error) {
        console.error('Error initializing Firebase Analytics:', error);
        _this.isInitialized = false;
      }
    })();
  }
  // Log custom event
  logCustomEvent(eventName, params) {
    var _this2 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Wait for initialization to complete
        if (_this2.initializationPromise) {
          yield _this2.initializationPromise;
        }
        if (!_this2.isInitialized) {
          console.warn('Firebase Analytics is not initialized. Cannot log event:', eventName);
          return;
        }
        if (_this2.operatorName) {
          params['OPERATOR_NAME'] = _this2.operatorName;
        }
        params['op_custom_session_id'] = _this2.session_id;
        if (_this2.appdata.isIOS) {
          // Log event on native iOS platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on iOS`);
        } else if (_this2.appdata.isANDROID) {
          // Log event on native Android platforms
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Android with params:`, params);
        } else if (_this2.appdata.isWEBAPP) {
          // Log event on web
          yield _capacitor_community_firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.FirebaseAnalytics.logEvent({
            name: eventName,
            params
          });
          console.log(`Event "${eventName}" logged successfully on Web`);
        }
      } catch (error) {
        console.error(`Error logging custom event "${eventName}":`, error);
      }
    })();
  }
  // Check if Firebase Analytics is initialized
  isAnalyticsReady() {
    var _this3 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.initializationPromise) {
        yield _this3.initializationPromise;
      }
      return _this3.isInitialized;
    })();
  }
  // Method to manually initialize if needed
  ensureInitialized() {
    var _this4 = this;
    return (0,_home_preethikulkarni_Desktop_OfficeProjects_ionic_ts_operator_ionic4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.initializationPromise) {
        yield _this4.initializationPromise;
      }
      if (!_this4.isInitialized) {
        console.warn('Firebase Analytics initialization failed or is not complete');
      }
    })();
  }
  generateNewSessionId() {
    if (this.sessionInterval) {
      clearInterval(this.sessionInterval);
    }
    this.session_id = this.util.generateSid();
    this.sessionInterval = setInterval(() => {
      this.generateNewSessionId();
    }, 30 * 60 * 1000);
  }
}
_FirebaseAnalyticsService = FirebaseAnalyticsService;
_FirebaseAnalyticsService.ɵfac = function FirebaseAnalyticsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FirebaseAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_storage__WEBPACK_IMPORTED_MODULE_4__.CommonStorage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_appdata__WEBPACK_IMPORTED_MODULE_6__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_util_provider__WEBPACK_IMPORTED_MODULE_7__.UtilProvider));
};
_FirebaseAnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _FirebaseAnalyticsService,
  factory: _FirebaseAnalyticsService.ɵfac,
  providedIn: 'root'
});

/***/ },

/***/ 45312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  c_firebaseConfig: {
    apiKey: "AIzaSyCGL9kGMW80ARug7-1-m0zHX0q4N6EMmNg",
    authDomain: "pc-api-5560718033266272099-659.firebaseapp.com",
    projectId: "pc-api-5560718033266272099-659",
    storageBucket: "pc-api-5560718033266272099-659.firebasestorage.app",
    messagingSenderId: "276783339554",
    appId: "1:276783339554:web:a3d1878b9e2601740f927b",
    measurementId: "G-8PFZ6HYLEM"
  },
  firebaseConfig: {
    apiKey: "AIzaSyADe1YXngQ8NPrMkDyy1UBtOH1XqhqMsgA",
    authDomain: "customer-app---mweb.firebaseapp.com",
    projectId: "customer-app---mweb",
    storageBucket: "customer-app---mweb.firebasestorage.app",
    messagingSenderId: "697968204843",
    appId: "1:697968204843:web:2acfadff1e6821c0eede6e",
    measurementId: "G-ZFC9S0PR6W"
  }
};

/***/ },

/***/ 70152
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 43236);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 39974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 54360);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }

}]);