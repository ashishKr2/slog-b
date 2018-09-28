(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-how-it-works-howItWorks-module"],{

/***/ "./src/app/components/how-it-works/how-it-works.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 7%;\r\n}\r\n\r\n.toggle-property{\r\n    padding-bottom: 5%;\r\n}\r\n\r\n.role-switcher{\r\n    border:1px solid #BEC0C2;\r\n    border-radius:30px;\r\n    color:#1f2836;\r\n    display:inline-flex;\r\n    overflow: hidden;\r\n    padding: 6px;\r\n    padding-bottom: 0px;\r\n        \r\n}\r\n\r\n.RoleSwitcher-radio{\r\n    position:absolute;\r\n    left:-10000px;\r\n    top:auto;\r\n    width:1px;\r\n    height:1px;\r\n    overflow: hidden;\r\n}\r\n\r\n[type=radio] {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\n.RoleSwitcher-radio:checked+.RoleSwitcher-label--tertiary {\r\n    background: linear-gradient(to bottom,#fc8c14 0,#f77d0e 100%);\r\n}\r\n\r\n.RoleSwitcher-radio:checked+.RoleSwitcher-label {\r\n    color: #F7F7F7;\r\n}\r\n\r\n.RoleSwitcher-radio:checked+.RoleSwitcher-label--tertiary {\r\n    background: linear-gradient(to bottom,#fc8c14 0,#f77d0e 100%);\r\n}\r\n\r\n.RoleSwitcher-radio:checked+.RoleSwitcher-label {\r\n    background-color: #135fda;\r\n    color: #F7F7F7;\r\n}\r\n\r\n.RoleSwitcher-label {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: inherit;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    padding: 4px 24px;\r\n}\r\n\r\ninput {\r\n    text-rendering: auto;\r\n    color: initial;\r\n    letter-spacing: normal;\r\n    word-spacing: normal;\r\n    text-transform: none;\r\n    text-indent: 0px;\r\n    text-shadow: none;\r\n    display: inline-block;\r\n    text-align: start;\r\n    margin: 0em;\r\n    font: 400 13.3333px Arial;\r\n}"

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!--Section: Main info-->\n  <section class=\"mt-5 wow fadeIn\">\n    <h3 class=\"h3 text-center mb-5 \">How can we help?</h3>\n\n    <div class=\"toggle-property text-center\">\n      <div class=\"role-switcher \">\n        <input type=\"radio\" name=\"user-type\" id=\"employer-option\" value=\"employers\" class=\"RoleSwitcher-radio\" data-target-audience\n          autocomplete=\"off\" checked (click)=\"hireBoolean()\">\n        <label for=\"employer-option\" class=\"RoleSwitcher-label RoleSwitcher-label--tertiary\">\n          I want to hire </label>\n\n        <input type=\"radio\" name=\"user-type\" id=\"freelancer-option\" value=\"freelancers\" class=\"RoleSwitcher-radio\" data-target-audience\n          autocomplete=\"off\" (click)=\"workBoolean()\">\n        <label for=\"freelancer-option\" class=\"RoleSwitcher-label RoleSwitcher-label--primary\">\n          I want to work </label>\n      </div>\n    </div>\n\n\n    <!--Grid row-->\n    <div class=\"row\" *ngIf=\"employee\">\n\n\n      <!--Grid column-->\n      <div class=\"col-md-6 mb-4\">\n\n        <!-- Main heading -->\n        <h3 class=\"h3 mb-3\">What kind of work can I get done?</h3>\n        <p>How does \"anything you want\" sound? We have experts representing every technical, professional, and creative field.</p>\n\n        <hr>\n        <button mat-raised-button style=\"color:rgb(255, 94, 0)\" routerLink=\"/postProject\" href=\"\">\n          <i class=\"fa fa-tasks\"></i>\n          Post a Project\n        </button>\n      </div>\n\n      <div class=\"col-md-6 mb-4\">\n\n        <img src=\"../../../assets/image/howItWorks.png\" class=\"img-fluid z-depth-1-half\" alt=\"\">\n\n      </div>\n    </div>\n    <!--Grid row-->\n    <div class=\"row \" *ngIf=\"freelance\">\n        <div class=\"col-md-6 mb-4\">\n\n            <!-- Main heading -->\n            <h3 class=\"h3 mb-3\">What kind of work can I do?</h3>\n            <p>You can find just about any job you can imagine. We have jobs ranging from delivery to website development. You can find a variety of jobs that suit you on Freelancer.com.</p>\n            <p>Just complete your profile and let us know your skill sets so we can match you to the right jobs</p>\n            <hr>\n            <button mat-raised-button style=\"color:rgb(55, 0, 255)\" routerLink=\"/browseJobs\" href=\"\">\n              <i class=\"fa fa-search\"></i>\n              Browse Jobs\n            </button>\n          </div>\n    \n          <div class=\"col-md-6 mb-4\">\n    \n            <img src=\"../../../assets/image/wantsToWork.png\" class=\"img-fluid z-depth-1-half\" alt=\"\">\n    \n          </div>\n    </div>\n\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/components/how-it-works/how-it-works.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/how-it-works/how-it-works.component.ts ***!
  \*******************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/navbar.service */ "./src/app/shared/services/navbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent(nav) {
        this.nav = nav;
        this.employee = true;
        this.freelance = false;
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
        this.nav.show();
    };
    HowItWorksComponent.prototype.hireBoolean = function () {
        this.employee = true;
        this.freelance = false;
    };
    HowItWorksComponent.prototype.workBoolean = function () {
        this.freelance = true;
        this.employee = false;
    };
    HowItWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/components/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/components/how-it-works/how-it-works.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/components/how-it-works/howItWorks.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/how-it-works/howItWorks.module.ts ***!
  \**************************************************************/
/*! exports provided: HowItWorksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksModule", function() { return HowItWorksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _how_it_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./how-it-works.component */ "./src/app/components/how-it-works/how-it-works.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: _how_it_works_component__WEBPACK_IMPORTED_MODULE_4__["HowItWorksComponent"] }
];
var HowItWorksModule = /** @class */ (function () {
    function HowItWorksModule() {
    }
    HowItWorksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes)
            ],
            declarations: [
                _how_it_works_component__WEBPACK_IMPORTED_MODULE_4__["HowItWorksComponent"]
            ]
        })
    ], HowItWorksModule);
    return HowItWorksModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-how-it-works-howItWorks-module.js.map