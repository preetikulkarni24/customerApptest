"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6807],{

/***/ 1598
/*!*****************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy-routing.module.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPolicyPageRoutingModule: () => (/* binding */ PrivacyPolicyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page */ 3168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _PrivacyPolicyPageRoutingModule;




const routes = [{
  path: '',
  component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyPage
}];
class PrivacyPolicyPageRoutingModule {}
_PrivacyPolicyPageRoutingModule = PrivacyPolicyPageRoutingModule;
_PrivacyPolicyPageRoutingModule.ɵfac = function PrivacyPolicyPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrivacyPolicyPageRoutingModule)();
};
_PrivacyPolicyPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _PrivacyPolicyPageRoutingModule
});
_PrivacyPolicyPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrivacyPolicyPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 56807
/*!*********************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.module.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPolicyPageModule: () => (/* binding */ PrivacyPolicyPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy-policy-routing.module */ 1598);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy-policy.page */ 3168);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
var _PrivacyPolicyPageModule;








class PrivacyPolicyPageModule {}
_PrivacyPolicyPageModule = PrivacyPolicyPageModule;
_PrivacyPolicyPageModule.ɵfac = function PrivacyPolicyPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrivacyPolicyPageModule)();
};
_PrivacyPolicyPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _PrivacyPolicyPageModule
});
_PrivacyPolicyPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_3__.PrivacyPolicyPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_6__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PrivacyPolicyPageModule, {
    declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_4__.PrivacyPolicyPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_3__.PrivacyPolicyPageRoutingModule, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_6__.WhiteCommonHeaderComponent]
  });
})();

/***/ },

/***/ 3168
/*!*******************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.page.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPolicyPage: () => (/* binding */ PrivacyPolicyPage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 96048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
var _PrivacyPolicyPage;











const _c0 = () => ({
  "color": "var(--primaryText)"
});
const _c1 = () => ({
  "color": "var(--sectionHeaderTextColor)"
});
const _c2 = () => ({
  "margin-left": "29%",
  "color": "var(--primaryText)"
});
const _c3 = () => ({
  "color": "var(--sectionHeaderTextColor)",
  "font-weight": "700",
  "text-align": "center"
});
class PrivacyPolicyPage {
  constructor(apiFactory, appData, util, loader, location, router, commonStorage) {
    this.apiFactory = apiFactory;
    this.appData = appData;
    this.util = util;
    this.loader = loader;
    this.location = location;
    this.router = router;
    this.commonStorage = commonStorage;
    this.mobileWebVersion = "";
    this.iosVersion = "";
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.mobileWebVersion = this.appData.mobileWebVersion;
    this.iosVersion = this.appData.iosVersion;
    this.defaultCall();
  }
  ngOnInit() {
    this.metaData = this.commonStorage.getItem("metaData");
  }
  defaultCall() {
    this.loader.showLoadingDefault();
    this.apiFactory.getPrivacyPolicy().subscribe(privacypolicy => {
      this.privacypolicy = privacypolicy.privacy_policy;
      this.loader.hideLoadingDefault();
    }, error => {
      this.loader.hideLoadingDefault();
    });
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/home']);
    }
  }
}
_PrivacyPolicyPage = PrivacyPolicyPage;
_PrivacyPolicyPage.ɵfac = function PrivacyPolicyPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PrivacyPolicyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_3__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_9__.CommonStorage));
};
_PrivacyPolicyPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _PrivacyPolicyPage,
  selectors: [["app-privacy-policy"]],
  standalone: false,
  decls: 9,
  vars: 10,
  consts: [[1, "background-cl"], ["mode", "md", 1, "background-cl", 3, "ngClass"], ["slot", "start", 2, "position", "absolute"], [2, "color", "var(--sectionHeaderTextColor)", "font-weight", "bold", 3, "click", "ngStyle"], [3, "ngStyle"], ["padding", ""], [1, "mt20", "p5", "context", 3, "innerHTML"]],
  template: function PrivacyPolicyPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2)(3, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PrivacyPolicyPage_Template_ion_back_button_click_3_listener() {
        return ctx.handleBackButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Privacy policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.metaData.msiteFolder == "networktheme" ? "themeone-bg-cl" : "background-cl");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.metaData.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.metaData.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, ctx.privacypolicy), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_11__.SafeHtmlPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.context[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.background-cl[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n  --background: var(--primary) !important;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}"]
});

/***/ }

}]);