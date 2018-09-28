(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module"],{

/***/ "./src/app/components/dashboard/currentWorking/currentWorking.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/dashboard/currentWorking/currentWorking.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/currentWorking/currentWorking.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/currentWorking/currentWorking.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <mat-card>\r\n        <!-- data row -->\r\n        <div class=\"row\" *ngFor=\"let data of datas\" style=\"padding-bottom: 3%;\">\r\n            <div class=\"col-md-8\" style=\"padding-right:15%;padding-top: 3%\">\r\n                <b> {{data.projectName}} </b>\r\n                <p>{{data.projectDetail}}</p>\r\n                <p style=\"color: rgba(18, 138, 250, 0.938)\"> {{data.skills}}</p>\r\n            </div>\r\n            <div class=\"col-md-1\" style=\"padding-left: 15%;padding-top: 3%\">\r\n                <p>{{data.projectSize}}</p>\r\n                <p>{{data.paymentMode}}</p>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n\r\n        <!-- data row ends here -->\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/currentWorking/currentWorking.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/currentWorking/currentWorking.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CurrentWorkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWorkingComponent", function() { return CurrentWorkingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/project.service */ "./src/app/shared/services/project.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CurrentWorkingComponent = /** @class */ (function () {
    function CurrentWorkingComponent(projectService, authService) {
        this.projectService = projectService;
        this.authService = authService;
    }
    CurrentWorkingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.makeAsync(this.authService.getProfile())];
                    case 1:
                        data = _a.sent();
                        this.projectService.bids((data.user.email)).subscribe(function (data) {
                            _this.datas = data;
                            _this.authService.activeWork = true;
                            _this.authService.loadingObserable.next(true);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CurrentWorkingComponent.prototype.makeAsync = function (request) {
        return new Promise(function (resolve, reject) {
            request.subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    CurrentWorkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dash-currentWorking',
            template: __webpack_require__(/*! ./currentWorking.component.html */ "./src/app/components/dashboard/currentWorking/currentWorking.component.html"),
            styles: [__webpack_require__(/*! ./currentWorking.component.css */ "./src/app/components/dashboard/currentWorking/currentWorking.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServices"]])
    ], CurrentWorkingComponent);
    return CurrentWorkingComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dash/dash.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dash/dash.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dash/dash.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dash/dash.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <mat-card>\r\n        <img src=\"../../../../assets/image/dash.PNG\" >\r\n    </mat-card>\r\n</div>\r\n\r\n<div style=\"padding-top:3%\">\r\n    <mat-card>\r\n        <div>\r\n            dashboard ........\r\n        </div>\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dash/dash.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dash/dash.component.ts ***!
  \*************************************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashComponent = /** @class */ (function () {
    function DashComponent() {
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'default-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/components/dashboard/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.css */ "./src/app/components/dashboard/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-material.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-material.module.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMaterialModule", function() { return DashboardMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var DashboardMaterialModule = /** @class */ (function () {
    function DashboardMaterialModule() {
    }
    DashboardMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"]
            ],
            exports: [
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"]
            ],
        })
    ], DashboardMaterialModule);
    return DashboardMaterialModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-navbar/dash-nav.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-navbar/dash-nav.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    padding-top: 6%;\r\n}\r\n.example-small-box, .example-large-box {\r\n     display: flex; \r\n    /* align-items: center;\r\n     justify-content: center; */\r\n    margin: 6px;\r\n    /* padding: 16px; */\r\n    border-radius: 8px; \r\n  }\r\n.example-large-box {\r\n    height: auto;\r\n    width: auto;\r\n    min-height: 700px;\r\n  }\r\n/* .width{\r\n    min-width: 1200px;\r\n    padding-left: -10%;\r\n  }\r\n   */\r\n  "

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-navbar/dash-nav.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-navbar/dash-nav.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-tab-group class=\"width\">\r\n        <mat-tab label=\"Dashboard\">\r\n            <div class=\"example-large-box mat-elevation-z4\">\r\n                <default-dash></default-dash>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"My project\">\r\n            <div class=\"example-large-box mat-elevation-z4\">\r\n                <dash-myProject></dash-myProject>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Inbox\">\r\n            <div class=\"example-large-box mat-elevation-z4\">\r\n                <dash-inbox></dash-inbox>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Active Work\">\r\n            <div class=\"example-large-box mat-elevation-z4\">\r\n                <dash-currentWorking></dash-currentWorking>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Profile\">\r\n            <div class=\"example-large-box mat-elevation-z4\">\r\n                <dash-profile></dash-profile>\r\n            </div>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-navbar/dash-nav.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-navbar/dash-nav.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashNavComponent", function() { return DashNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashNavComponent = /** @class */ (function () {
    function DashNavComponent() {
    }
    DashNavComponent.prototype.ngOnInit = function () {
    };
    DashNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dash-nav',
            template: __webpack_require__(/*! ./dash-nav.component.html */ "./src/app/components/dashboard/dashboard-navbar/dash-nav.component.html"),
            styles: [__webpack_require__(/*! ./dash-nav.component.css */ "./src/app/components/dashboard/dashboard-navbar/dash-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashNavComponent);
    return DashNavComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <dash-nav></dash-nav>\r\n  <div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ animationType: ANIMATION_TYPES.rectangleBounce,\r\n        backdropBackgroundColour: 'rgba(255,255,255,0.3)', backdropBorderRadius: '10px',\r\n        primaryColour: '#FF5733', secondaryColour: '#FF5733', tertiaryColour: '#FF5733' }\"></ngx-loading>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/navbar.service */ "./src/app/shared/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authservice, router, toastr, routes, nav) {
        this.authservice = authservice;
        this.router = router;
        this.toastr = toastr;
        this.routes = routes;
        this.nav = nav;
        this.loading = false;
        this.ANIMATION_TYPES = ngx_loading__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_TYPES"];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.nav.show();
        this.authservice.loadingObserable.subscribe(function (flag) {
            if (flag && _this.authservice.activeWork && _this.authservice.profile &&
                _this.authservice.dashboard && _this.authservice.myProject) {
                _this.loading = false;
            }
        });
        this.authservice.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.user1 = profile.user.username;
            _this.authservice.dashboard = true;
            _this.authservice.loadingObserable.next(true);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")],
            providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"]]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_navbar_dash_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-navbar/dash-nav.component */ "./src/app/components/dashboard/dashboard-navbar/dash-nav.component.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/components/dashboard/inbox/inbox.component.ts");
/* harmony import */ var _myProjects_myProject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myProjects/myProject.component */ "./src/app/components/dashboard/myProjects/myProject.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-material.module */ "./src/app/components/dashboard/dashboard-material.module.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/components/dashboard/dash/dash.component.ts");
/* harmony import */ var _currentWorking_currentWorking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./currentWorking/currentWorking.component */ "./src/app/components/dashboard/currentWorking/currentWorking.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes),
                _dashboard_material_module__WEBPACK_IMPORTED_MODULE_10__["DashboardMaterialModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_4__["LoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_TYPES"].wanderingCubes,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff'
                })
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _dashboard_navbar_dash_nav_component__WEBPACK_IMPORTED_MODULE_6__["DashNavComponent"],
                _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_7__["InboxComponent"],
                _myProjects_myProject_component__WEBPACK_IMPORTED_MODULE_8__["MyProjectComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _dash_dash_component__WEBPACK_IMPORTED_MODULE_11__["DashComponent"],
                _currentWorking_currentWorking_component__WEBPACK_IMPORTED_MODULE_12__["CurrentWorkingComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/inbox/inbox.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/dashboard/inbox/inbox.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/inbox/inbox.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/inbox/inbox.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "inbox"

/***/ }),

/***/ "./src/app/components/dashboard/inbox/inbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/inbox/inbox.component.ts ***!
  \***************************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InboxComponent = /** @class */ (function () {
    function InboxComponent() {
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dash-inbox',
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/components/dashboard/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.css */ "./src/app/components/dashboard/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/myProjects/myProject.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/myProjects/myProject.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/myProjects/myProject.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/dashboard/myProjects/myProject.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <mat-card>\r\n        <!-- data row -->\r\n        <div class=\"row\" *ngFor=\"let data of myWork\" style=\"padding-bottom: 3%;\">\r\n            <div class=\"col-md-8\" style=\"padding-right:15%;padding-top: 3%\">\r\n                <b> {{data.projectName}} </b>\r\n                <p>{{data.projectDetail}}</p>\r\n                <p style=\"color: rgba(18, 138, 250, 0.938)\"> {{data.skills}}</p>\r\n            </div>\r\n            <div class=\"col-md-1\" style=\"padding-left: 15%;padding-top: 3%\">\r\n                <p>{{data.projectSize}}</p>\r\n                <p>{{data.paymentMode}}</p>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n\r\n        <!-- data row ends here -->\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/myProjects/myProject.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/dashboard/myProjects/myProject.component.ts ***!
  \************************************************************************/
/*! exports provided: MyProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectComponent", function() { return MyProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/project.service */ "./src/app/shared/services/project.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MyProjectComponent = /** @class */ (function () {
    function MyProjectComponent(authService, projectService, toastr) {
        this.authService = authService;
        this.projectService = projectService;
        this.toastr = toastr;
        this.myWork = [];
    }
    MyProjectComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.makeAsync(this.authService.getProfile())];
                    case 1:
                        data = _a.sent();
                        this.projectService.myproject(data.user.username).subscribe(function (data) {
                            _this.myWork = data;
                            _this.authService.myProject = true;
                            _this.authService.loadingObserable.next(true);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyProjectComponent.prototype.makeAsync = function (request) {
        return new Promise(function (resolve, reject) {
            request.subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    MyProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dash-myProject',
            template: __webpack_require__(/*! ./myProject.component.html */ "./src/app/components/dashboard/myProjects/myProject.component.html"),
            styles: [__webpack_require__(/*! ./myProject.component.css */ "./src/app/components/dashboard/myProjects/myProject.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServices"],
            _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MyProjectComponent);
    return MyProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/profile/profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/profile/profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{user.name}}<br>\r\n{{user.username}}<br>\r\n{{user.email}}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.user = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.authService.profile = true;
            _this.authService.loadingObserable.next(true);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dash-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthServices"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module.js.map