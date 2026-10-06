"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[3073],{

/***/ 37888
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsPageRoutingModule: () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 27850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _AboutUsPageRoutingModule;




const routes = [{
  path: '',
  component: _about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage
}];
class AboutUsPageRoutingModule {}
_AboutUsPageRoutingModule = AboutUsPageRoutingModule;
_AboutUsPageRoutingModule.ɵfac = function AboutUsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutUsPageRoutingModule)();
};
_AboutUsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AboutUsPageRoutingModule
});
_AboutUsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutUsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 53073
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsPageModule: () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us-routing.module */ 37888);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us.page */ 27850);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
var _AboutUsPageModule;








class AboutUsPageModule {}
_AboutUsPageModule = AboutUsPageModule;
_AboutUsPageModule.ɵfac = function AboutUsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutUsPageModule)();
};
_AboutUsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _AboutUsPageModule
});
_AboutUsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__.AboutUsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AboutUsPageModule, {
    declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_4__.AboutUsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__.AboutUsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe]
  });
})();

/***/ },

/***/ 27850
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsPage: () => (/* binding */ AboutUsPage)
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
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
var _AboutUsPage;












const _c0 = () => ({
  "padding-top": "0px"
});
const _c1 = () => ({});
const _c2 = () => ({
  "text-align": "center"
});
const _c3 = () => ({
  "position": "absolute"
});
const _c4 = () => ({
  "color": "var(--primaryText)"
});
const _c5 = () => ({
  "color": "var(--placeholderColor)"
});
const _c6 = () => ({
  "margin-left": "31%",
  "color": "var(--primaryText)"
});
function AboutUsPage_ng_container_0_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.aboutus), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function AboutUsPage_ng_container_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.mobileWebVersion, " ");
  }
}
function AboutUsPage_ng_container_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.iosVersion, " ");
  }
}
function AboutUsPage_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.androidVersion, " ");
  }
}
function AboutUsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-white-common-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AboutUsPage_ng_container_0_ion_content_3_Template, 3, 3, "ion-content", 4)(4, AboutUsPage_ng_container_0_div_4_Template, 2, 1, "div", 5)(5, AboutUsPage_ng_container_0_div_5_Template, 2, 1, "div", 5)(6, AboutUsPage_ng_container_0_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.isIos ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.aboutus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.util.isIos());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.util.isAndroid());
  }
}
function AboutUsPage_ng_template_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r0.aboutus), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function AboutUsPage_ng_template_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.mobileWebVersion, " ");
  }
}
function AboutUsPage_ng_template_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.iosVersion, " ");
  }
}
function AboutUsPage_ng_template_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" App Version : ", ctx_r0.androidVersion, " ");
  }
}
function AboutUsPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 9)(1, "ion-toolbar", 10)(2, "ion-buttons", 11)(3, "ion-back-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutUsPage_ng_template_1_Template_ion_back_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AboutUsPage_ng_template_1_div_7_Template, 2, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AboutUsPage_ng_template_1_div_8_Template, 2, 1, "div", 5)(9, AboutUsPage_ng_template_1_div_9_Template, 2, 1, "div", 5)(10, AboutUsPage_ng_template_1_div_10_Template, 2, 1, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.metaData.msiteFolder == "networktheme" ? "themeone-bg-cl" : "background-cl")("ngStyle", ctx_r0.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.metaData.msiteFolder === "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.metaData.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.metaData.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.aboutus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.util.isWebApp());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.util.isIos());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.util.isAndroid());
  }
}
class AboutUsPage {
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
    this.androidVersion = '';
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.mobileWebVersion = this.appData.mobileWebVersion;
    this.iosVersion = this.appData.iosVersion;
    this.androidVersion = this.appData.androidVersion;
    this.appData.newTheme = this.util.getNewTheme();
    this.defaultCall();
  }
  ngOnInit() {
    this.metaData = this.commonStorage.getItem("metaData");
  }
  defaultCall() {
    this.loader.showLoadingDefault();
    this.apiFactory.getAboutUs().subscribe(aboutus => {
      this.aboutus = aboutus.about_us;
      this.loader.hideLoadingDefault();
    }, error => {
      this.loader.hideLoadingDefault();
    });
    this.loader.hideLoadingDefault();
  }
  handleBackButton() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['tabs/home']);
    }
  }
}
_AboutUsPage = AboutUsPage;
_AboutUsPage.ɵfac = function AboutUsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutUsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_3__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_4__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_9__.CommonStorage));
};
_AboutUsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _AboutUsPage,
  selectors: [["app-about-us"]],
  standalone: false,
  decls: 3,
  vars: 2,
  consts: [["showOldTheme", ""], [4, "ngIf", "ngIfElse"], [1, "background-cl", 3, "ngStyle"], ["title", "About us", "showsubTxt", "true", "showsubtitle", "false"], ["style", "--background: #ffffff;", "padding", "", 4, "ngIf"], ["class", "center", 4, "ngIf"], ["padding", "", 2, "--background", "#ffffff"], [1, "mt20", "p5", "context", 3, "innerHTML"], [1, "center"], [1, "background-cl", 2, "box-shadow", "none"], ["mode", "md", 1, "background-cl", 3, "ngClass", "ngStyle"], ["slot", "start", 3, "ngStyle"], [2, "color", "var(--placeholderColor) !important", "font-weight", "bold", 3, "click", "ngStyle"], [2, "color", "var(--placeholderColor) !important", "; font-weight", "bold", "text-align", "left", "margin-left", "60px", 3, "ngStyle"], ["padding", ""], ["class", "mt20 p5 context", 3, "innerHTML", 4, "ngIf"]],
  template: function AboutUsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AboutUsPage_ng_container_0_Template, 7, 7, "ng-container", 1)(1, AboutUsPage_ng_template_1_Template, 11, 17, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const showOldTheme_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appData.newTheme)("ngIfElse", showOldTheme_r3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_11__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_12__.SafeHtmlPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color: var(--viewBgColor);\n}\n\n.context[_ngcontent-%COMP%] {\n  font-family: NotoSans;\n  font-size: 14px;\n  color: #3e3e52;\n}\n\n.background-cl[_ngcontent-%COMP%] {\n  color: var(--primary) !important;\n  --background: var(--primary) !important;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}"]
});

/***/ }

}]);