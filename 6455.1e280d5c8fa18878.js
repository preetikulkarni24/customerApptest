"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6455],{

/***/ 21918
/*!*******************************************************************!*\
  !*** ./src/app/term-conditions/term-conditions-routing.module.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermConditionsPageRoutingModule: () => (/* binding */ TermConditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 49870);
/* harmony import */ var _term_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./term-conditions.page */ 34656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
var _TermConditionsPageRoutingModule;




const routes = [{
  path: '',
  component: _term_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermConditionsPage
}];
class TermConditionsPageRoutingModule {}
_TermConditionsPageRoutingModule = TermConditionsPageRoutingModule;
_TermConditionsPageRoutingModule.ɵfac = function TermConditionsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermConditionsPageRoutingModule)();
};
_TermConditionsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _TermConditionsPageRoutingModule
});
_TermConditionsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TermConditionsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 76455
/*!***********************************************************!*\
  !*** ./src/app/term-conditions/term-conditions.module.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermConditionsPageModule: () => (/* binding */ TermConditionsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _term_conditions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./term-conditions-routing.module */ 21918);
/* harmony import */ var _term_conditions_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./term-conditions.page */ 34656);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 17705);
var _TermConditionsPageModule;








class TermConditionsPageModule {}
_TermConditionsPageModule = TermConditionsPageModule;
_TermConditionsPageModule.ɵfac = function TermConditionsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermConditionsPageModule)();
};
_TermConditionsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: _TermConditionsPageModule
});
_TermConditionsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _term_conditions_routing_module__WEBPACK_IMPORTED_MODULE_3__.TermConditionsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TermConditionsPageModule, {
    declarations: [_term_conditions_page__WEBPACK_IMPORTED_MODULE_4__.TermConditionsPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonicModule, _term_conditions_routing_module__WEBPACK_IMPORTED_MODULE_3__.TermConditionsPageRoutingModule, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_5__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeHtmlPipe]
  });
})();

/***/ },

/***/ 34656
/*!*********************************************************!*\
  !*** ./src/app/term-conditions/term-conditions.page.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermConditionsPage: () => (/* binding */ TermConditionsPage)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 15083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _services_api_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-factory */ 59348);
/* harmony import */ var _services_util_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/util-provider */ 81101);
/* harmony import */ var _services_appdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/appdata */ 40172);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader-service */ 65894);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 32881);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 96048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 83087);
/* harmony import */ var _services_common_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/common-storage */ 96970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 74474);
/* harmony import */ var _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../white-common-header/white-common-header.component */ 16688);
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../safe-html.pipe */ 41353);
var _TermConditionsPage;












const _c0 = () => ({
  "color": "var(--primaryText)"
});
const _c1 = () => ({
  "color": "var(--viewBgColor)"
});
const _c2 = () => ({
  "margin-left": "22%",
  "color": "var(--primaryText)"
});
const _c3 = () => ({});
function TermConditionsPage_ng_container_0_ion_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.htmlData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function TermConditionsPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-white-common-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TermConditionsPage_ng_container_0_ion_content_3_Template, 3, 3, "ion-content", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.htmlData);
  }
}
function TermConditionsPage_ng_template_1_ion_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 9)(2, "ion-buttons", 10)(3, "ion-back-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermConditionsPage_ng_template_1_ion_header_0_Template_ion_back_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.metadata.msiteFolder == "networktheme" ? "themeone-bg-cl" : "bg-cl");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.metadata.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.metadata.msiteFolder == "networktheme" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.metadata.msiteFolder == "" ? ctx_r0.subdomain == "tgsrtc" ? "App Terms & Conditions" : "Terms & Conditions" : "Terms & Conditions", " ");
  }
}
function TermConditionsPage_ng_template_1_ion_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 13)(2, "ion-buttons", 10)(3, "ion-back-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TermConditionsPage_ng_template_1_ion_header_1_Template_ion_back_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.handleBackButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.metadata.msiteFolder == "" ? ctx_r0.subdomain == "tgsrtc" ? "App Terms & Conditions" : "Terms & Conditions" : "Terms & Conditions", " ");
  }
}
function TermConditionsPage_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r0.htmlData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function TermConditionsPage_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TermConditionsPage_ng_template_1_ion_header_0_Template, 6, 8, "ion-header", 6)(1, TermConditionsPage_ng_template_1_ion_header_1_Template, 6, 1, "ion-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-content", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TermConditionsPage_ng_template_1_div_3_Template, 2, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.metadata.msiteFolder != "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.metadata.msiteFolder == "shyamolitheme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.htmlData);
  }
}
class TermConditionsPage {
  constructor(apiFactory, util, appData, loader, location, router, commonStorage) {
    this.apiFactory = apiFactory;
    this.util = util;
    this.appData = appData;
    this.loader = loader;
    this.location = location;
    this.router = router;
    this.commonStorage = commonStorage;
    this.isIos = false;
    const platformnew = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
    this.isIos = platformnew === 'ios' ? true : false;
    this.metadata = this.commonStorage.getItem('metaData');
    this.subdomain = this.commonStorage.getItem("metaData").subdomain;
    this.defaultCall();
  }
  ngOnInit() {
    this.appData.newTheme = this.util.getNewTheme();
  }
  defaultCall() {
    this.loader.showLoadingDefault();
    this.apiFactory.getTermsAndConditions().subscribe(htmlData => {
      this.loader.hideLoadingDefault();
      this.htmlData = htmlData;
    }, error => {
      this.loader.hideLoadingDefault();
      this.htmlData = error.error.text;
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
_TermConditionsPage = TermConditionsPage;
_TermConditionsPage.ɵfac = function TermConditionsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TermConditionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_factory__WEBPACK_IMPORTED_MODULE_2__.ApiFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_util_provider__WEBPACK_IMPORTED_MODULE_3__.UtilProvider), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_appdata__WEBPACK_IMPORTED_MODULE_4__.AppData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_common_storage__WEBPACK_IMPORTED_MODULE_9__.CommonStorage));
};
_TermConditionsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _TermConditionsPage,
  selectors: [["app-term-conditions"]],
  standalone: false,
  decls: 3,
  vars: 2,
  consts: [["showOldTheme", ""], [4, "ngIf", "ngIfElse"], ["title", "Terms and conditions", "subtitle", "", "showsubTxt", "true", "showsubtitle", "false"], ["class", "theme1", "padding", "", "style", "--background:#fff;", 4, "ngIf"], ["padding", "", 1, "theme1", 2, "--background", "#fff"], [1, "mt20", "termsClass", 2, "padding-bottom", "20px", "margin", "30px", "font-weight", "bold", 3, "innerHTML"], [4, "ngIf"], ["padding", ""], ["class", "mt20 termsClass", "style", "padding-bottom: 20px; margin: 10px 10px 0 10px;", 3, "innerHTML", 4, "ngIf"], ["mode", "md", 1, "h50", 3, "ngClass"], ["slot", "start"], [2, "color", "var(--viewBgColor)", "font-weight", "bold", 3, "click", "ngStyle"], [2, "color", "var(--viewBgColor)", "font-weight", "bold", 3, "ngStyle"], ["mode", "md", 1, "h50", "bg-cl"], [2, "color", "#333333", "font-weight", "bold", 3, "click"], [2, "color", "#333333", "font-weight", "bold"], [1, "mt20", "termsClass", 2, "padding-bottom", "20px", "margin", "10px 10px 0 10px", 3, "innerHTML"]],
  template: function TermConditionsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TermConditionsPage_ng_container_0_Template, 4, 1, "ng-container", 1)(1, TermConditionsPage_ng_template_1_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const showOldTheme_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appData.newTheme)("ngIfElse", showOldTheme_r4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonBackButton, _white_common_header_white_common_header_component__WEBPACK_IMPORTED_MODULE_11__.WhiteCommonHeaderComponent, _safe_html_pipe__WEBPACK_IMPORTED_MODULE_12__.SafeHtmlPipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --ion-background-color:#f7f9fb;\n}\n\n.themeone-bg-cl[_ngcontent-%COMP%] {\n  color: var(--primaryText) !important;\n  --background: var(--homeBgColor) !important;\n  -webkit-text-fill-color: var(--primaryText) !important;\n}"]
});

/***/ }

}]);