(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashoboard/dashoboard.component */ "./src/app/dashoboard/dashoboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_quard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.quard */ "./src/app/auth.quard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_1__["DashoboardComponent"],
        canActivate: [_auth_quard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
        canActivate: [_auth_quard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: '**',
        redirectTo: '',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login></app-login> -->\r\n\r\n<router-outlet></router-outlet>\r\n<!-- <app-name-editor></app-name-editor> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_quard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.quard */ "./src/app/auth.quard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashoboard/dashoboard.component */ "./src/app/dashoboard/dashoboard.component.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profileview/profileview.component */ "./src/app/profileview/profileview.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ifrmae_ifrmae_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ifrmae/ifrmae.component */ "./src/app/ifrmae/ifrmae.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng4_intl_phone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng4-intl-phone */ "./node_modules/ng4-intl-phone/ng4-intl-phone.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _dashoboard_dashoboard_component__WEBPACK_IMPORTED_MODULE_10__["DashoboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _profileview_profileview_component__WEBPACK_IMPORTED_MODULE_14__["ProfileviewComponent"],
                _ifrmae_ifrmae_component__WEBPACK_IMPORTED_MODULE_17__["IfrmaeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_18__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                ng2_opd_popup__WEBPACK_IMPORTED_MODULE_11__["PopupModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD8j3GJ_ySn2k8BVrVJat2Gjtmy1G49sSQ'
                }),
                ng4_intl_phone__WEBPACK_IMPORTED_MODULE_20__["InternationalPhoneModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth_quard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.quard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.quard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('x-auth-token')) {
            return true;
        }
        else {
            this._router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this.baseUrl = "https://backendrockvillie.herokuapp.com/api/";
    }
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.baseUrl + 'auth', user);
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('x-auth-token');
        console.log('Logging out from application');
        this._router.navigate(['/']);
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'users/register', user);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('x-auth-token');
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('x-auth-token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashoboard/dashboard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/dashoboard/dashboard.service.ts ***!
  \*************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(http, _router) {
        this.http = http;
        this._router = _router;
        this._registerUrl = "https://tt-webinar.com:3000/api/webinar/register";
        this.getWebinarUrl = 'https://tt-webinar.com:3000/api/webinar/listOfWebinar';
        this.deleteWebURL = 'https://tt-webinar.com:3000/api/webinar/getById/5b46f9dc3ac50b3438d79cf6';
    }
    DashboardService.prototype.registerWebinar = function (webinar) {
        var body = JSON.stringify(webinar);
        console.log('in service Add webinar : ' + body);
        return this.http.post(this._registerUrl, webinar);
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashoboard/dashoboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashoboard/dashoboard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 600px;\r\n    /* width: 300px; */\r\n    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/dashoboard/dashoboard.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashoboard/dashoboard.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <header class=\"demo-header mdl-layout__header mdl-color--magenta\">\n        <div class=\"mdl-layout__header-row\">\n            <span class=\"mdl-layout-title\">RockVille Application</span>\n            <span class=\"mdl-layout-title page-name-title\">Dashboard</span>\n   \n        </div>\n    </header>\n    <div class=\"demo-drawer mdl-layout__drawer backround--color-white\">\n        <app-profileview></app-profileview>\n        <hr>\n        <app-nav></app-nav>\n    </div>\n    <main class=\"mdl-layout__content mdl-color--grey-100\">\n        <!-- this creates a google map on the page with the given lat/lng from -->\n        <!-- the component as the initial center of the map: -->\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n    </main>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashoboard/dashoboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashoboard/dashoboard.component.ts ***!
  \****************************************************/
/*! exports provided: DashoboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashoboardComponent", function() { return DashoboardComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ifrmae_ifrmae_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ifrmae/ifrmae.service */ "./src/app/ifrmae/ifrmae.service.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../profile/profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _models_webinar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/webinar */ "./src/app/models/webinar.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashoboard/dashboard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashoboardComponent = /** @class */ (function () {
    function DashoboardComponent(dashboardService, _router, popup, profileService, ifrmaeService, authService) {
        this.dashboardService = dashboardService;
        this._router = _router;
        this.popup = popup;
        this.profileService = profileService;
        this.ifrmaeService = ifrmaeService;
        this.authService = authService;
        this.latitude = 51.678418;
        this.longitude = 7.809007;
        this.web_name = '';
        this.web_date = '';
        this.web_day = '';
        this.web_start_time = '';
        this.web_description = '';
        this.web_utc = '';
        this.web_topic = '';
        this.upcomingWebinar = [];
        this.previousWebinar = [];
        // webinarDetail: WebinarDetail
        this.webinarDetail = {};
        this.fnameAlert = 'First Name is required';
        if (this.token) {
            _router.navigate(['/dashboard']);
        }
        this.findMe();
    }
    DashoboardComponent.prototype.ngOnInit = function () {
    };
    DashoboardComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    Object.defineProperty(DashoboardComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('x-auth-token');
        },
        enumerable: true,
        configurable: true
    });
    DashoboardComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.showPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    DashoboardComponent.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.watchPosition(function (position) {
                _this.showTrackingPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    DashoboardComponent.prototype.showPosition = function (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: 'Got you!'
            });
        }
        else {
            this.marker.setPosition(location);
        }
    };
    DashoboardComponent.prototype.showTrackingPosition = function (position) {
        console.log("tracking postion:  " + position.coords.latitude + " - " + position.coords.longitude);
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.map.panTo(location);
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: 'Got you!'
            });
        }
        else {
            this.marker.setPosition(location);
        }
    };
    DashoboardComponent.prototype.registerWebinar = function () {
        console.log('Webinar Method called....!!');
        var startTempTime = '2018-10-15T' + this.web_start_time + ':00Z';
        this.webinar = new _models_webinar__WEBPACK_IMPORTED_MODULE_3__["Webinar"]();
        this.webinar.web_day = this.web_day;
        console.log(this.webinar.web_date);
        this.webinar.web_date = new Date(this.web_date);
        this.webinar.web_description = this.web_description;
        this.webinar.web_name = this.web_name;
        this.webinar.web_start_time = startTempTime;
        this.webinar.web_topic = this.web_topic;
        this.webinar.web_utc = this.web_utc;
        console.log('this.webinar ', this.webinar);
        // let newDate = this.date+'T23:00:00.000Z'
        this.dashboardService.registerWebinar(this.webinar)
            .subscribe(function (res) {
            console.log('Response Data from Register web....', res);
            location.reload();
        }, function (err) { return console.log(err); });
        this._router.navigate(['/dashboard']);
        // location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], DashoboardComponent.prototype, "gmapElement", void 0);
    DashoboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-dashoboard',
            template: __webpack_require__(/*! ./dashoboard.component.html */ "./src/app/dashoboard/dashoboard.component.html"),
            styles: [__webpack_require__(/*! ./dashoboard.component.css */ "./src/app/dashoboard/dashoboard.component.css")]
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ng2_opd_popup__WEBPACK_IMPORTED_MODULE_6__["Popup"],
            _profile_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _ifrmae_ifrmae_service__WEBPACK_IMPORTED_MODULE_1__["IfrmaeService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], DashoboardComponent);
    return DashoboardComponent;
}());



/***/ }),

/***/ "./src/app/ifrmae/ifrmae.component.css":
/*!*********************************************!*\
  !*** ./src/app/ifrmae/ifrmae.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ifrmae/ifrmae.component.html":
/*!**********************************************!*\
  !*** ./src/app/ifrmae/ifrmae.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe \n  id=\"inlineFrameExample\" \n  title=\"Inline Frame Example\" \n  width=\"500\" \n  height=\"500\" \n  src=\"assets/test.html\"\n  >\n</iframe>\n<!-- src=\"https://195.201.120.175:8443/\" -->\n"

/***/ }),

/***/ "./src/app/ifrmae/ifrmae.component.ts":
/*!********************************************!*\
  !*** ./src/app/ifrmae/ifrmae.component.ts ***!
  \********************************************/
/*! exports provided: IfrmaeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfrmaeComponent", function() { return IfrmaeComponent; });
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

var IfrmaeComponent = /** @class */ (function () {
    function IfrmaeComponent() {
    }
    IfrmaeComponent.prototype.ngOnInit = function () {
    };
    IfrmaeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ifrmae',
            template: __webpack_require__(/*! ./ifrmae.component.html */ "./src/app/ifrmae/ifrmae.component.html"),
            styles: [__webpack_require__(/*! ./ifrmae.component.css */ "./src/app/ifrmae/ifrmae.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IfrmaeComponent);
    return IfrmaeComponent;
}());



/***/ }),

/***/ "./src/app/ifrmae/ifrmae.service.ts":
/*!******************************************!*\
  !*** ./src/app/ifrmae/ifrmae.service.ts ***!
  \******************************************/
/*! exports provided: IfrmaeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfrmaeService", function() { return IfrmaeService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfrmaeService = /** @class */ (function () {
    function IfrmaeService(_router) {
        this._router = _router;
    }
    IfrmaeService.prototype.onSubmit = function () {
        console.log('Iframe service method on submit...');
        return this._router.navigate(['/session']);
    };
    IfrmaeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], IfrmaeService);
    return IfrmaeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"demo-header mdl-layout__header mdl-color--magenta\">\n    <div class=\"mdl-layout__header-row\">\n        <span class=\"mdl-layout-title\">Rock Ville</span>\n        <div class=\"mdl-layout-spacer\"></div>\n        <a id=\"show-dialog\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color-text--white-top\">Sign\n            Up\n            <i class=\"material-icons\" role=\"presentation\">create</i>\n        </a>\n    </div>\n</header>\n<div class=\"mdl-grid background-container\">\n    <div class=\"mdl-cell mdl-cell--12-col\">\n        <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\n            <h2 class=\"mdl-card__title-text\">Welcome To RockVille Application</h2>\n            <div class=\"login-form-cs\">\n                <form [formGroup]=\"rForm\" class=\"login-action-cs\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input formControlName=\"email\" class=\"mdl-textfield__input\" id=\"email1\" [(ngModel)]=\"email\">\n                        <label class=\"mdl-textfield__label\" for=\"email1\"><i class=\"font-loginfrom material-icons\">email</i>\n                            Email</label>\n                    </div>\n                    <div style=\"color:red; text-align: center !important;\" class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">{{\n                        titleAlert }}</div>\n\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input formControlName=\"password\" class=\"mdl-textfield__input\" type=\"password\" id=\"password1\"\n                            [(ngModel)]=\"password\">\n                        <label class=\"mdl-textfield__label\" for=\"password\"><i class=\"font-loginfrom material-icons\">lock</i>\n                            Password</label>\n                    </div>\n                    <div style=\"color:red; text-align: center !important;\" class=\"alert\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">{{\n                        passwordAlert }}</div>\n                    <div (click)=\"loginUser()\" (ngModelChange)=\"!rForm.valid\" type=\"button\" class=\"mdl-card__actions mdl-card--border\">\n                        <a class=\"mdl-button login-action mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n                            Login\n                        </a>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n                <thead>\n                    <tr>\n                        <th class=\"mdl-data-table__cell--non-numeric\">Email</th>\n                        <th>Password</th>\n                 \n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td class=\"mdl-data-table__cell--non-numeric\">test123@gmail.com</td>\n                        <td>test123</td>\n                    </tr>\n                   \n                 \n                </tbody>\n            </table>\n    </div>\n   \n</div>\n\n<dialog class=\"mdl-dialog dailog-creating-from\">\n    <h4 class=\"mdl-dialog__title\">Create Your Account</h4>\n    <hr>\n    <div class=\"mdl-grid\">\n        <form [formGroup]=\"regForm\">\n            <div class=\"mdl-cell mdl-cell--6-col\" style=\"float: left;\">\n                <div class=\"mdl-dialog__content\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input formControlName=\"emailr\" class=\"mdl-textfield__input\" [(ngModel)]=\"emailr\" type=\"text\"\n                            id=\"name-orignal\">\n                        <label class=\"mdl-textfield__label\" for=\"email\">Email </label>\n\n                    </div>\n                    <div style=\"color:red; text-align: center !important;\" class=\"alert\" *ngIf=\"!regForm.controls['emailr'].valid && regForm.controls['emailr'].touched\">{{\n                        titleAlert }}</div>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input formControlName=\"passwordr\" class=\"mdl-textfield__input\" [(ngModel)]=\"passwordr\" type=\"password\"\n                            id=\"webinar-time-zone\">\n                        <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n                    </div>\n                    <div style=\"color:red; text-align: center !important;\" class=\"alert\" *ngIf=\"!regForm.controls['passwordr'].valid && regForm.controls['passwordr'].touched\">{{\n                        passwordAlert }}</div>\n\n                </div>\n            </div>\n            <div class=\"mmdl-cell mdl-cell--6-col\" style=\"float: left;\">\n                <div class=\"mdl-dialog__content\">\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input formControlName=\"username\" class=\"mdl-textfield__input\" [(ngModel)]=\"username\" type=\"text\"\n                            id=\"webinar-topic\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-topic\">Username</label>\n                    </div>\n                    <div style=\"color:red; text-align: center !important;\" class=\"alert\" *ngIf=\"!regForm.controls['username'].valid && regForm.controls['username'].touched\">Username\n                        is required</div>\n\n                    <int-phone-prefix formControlName=\"country_code\" [(ngModel)]=\"phoneNumber\"></int-phone-prefix>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input formControlName=\"phone_number\" class=\"mdl-textfield__input\" [(ngModel)]=\"phone_number\"\n                            type=\"text\" id=\"webinar-date\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-date\">Mobile Number</label>\n                    </div>\n                    <div style=\"color:red; text-align: center !important;\" class=\"alert\" *ngIf=\"!regForm.controls['phone_number'].valid && regForm.controls['phone_number'].touched\">Phone\n                        number is required</div>\n\n\n                </div>\n            </div>\n            <div class=\"alert\">{{apiresAlert}}</div>\n\n            <div class=\"mdl-dialog__actions\">\n                <button type=\"button\" (click)=\"register()\" (ngModelChange)=\"!regForm.valid\" class=\"mdl-button\">Submit</button>\n                <button type=\"button\" class=\"mdl-button close\">Close</button>\n            </div>\n        </form>\n    </div>\n</dialog>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _models_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/register */ "./src/app/models/register.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/login */ "./src/app/models/login.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router, fb, popup) {
        this._auth = _auth;
        this._router = _router;
        this.fb = fb;
        this.popup = popup;
        this._id = '';
        this.password = '';
        this.email = '';
        this.address = '';
        this.name = '';
        this.description = '';
        this.titleAlert = 'Email is required';
        this.passwordAlert = 'Password is required';
        this.rForm = fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])],
            'validate': ''
        });
        this.regForm = fb.group({
            'emailr': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'passwordr': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])],
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])],
            'phone_number': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])],
            'country_code': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)])]
        });
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get('validate').valueChanges.subscribe(function (validate) {
            if (validate == '1') {
                _this.rForm.get('email').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]);
                _this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                _this.rForm.get('email').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            }
            _this.rForm.get('email').updateValueAndValidity();
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.login = new _models_login__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.login.email = this.email;
        this.login.password = this.password;
        this._auth.loginUser(this.login)
            .subscribe(function (res) {
            console.log('Response Data', res);
            if (res.status === 'success') {
                console.log('Status is true');
                localStorage.setItem('x-auth-token', res.object.token);
                sessionStorage.setItem('_id', res.object._id);
                sessionStorage.setItem('email', res.object.email);
                sessionStorage.setItem('username', res.object.username);
                console.log('After Login Token ', res.object.token);
                _this._router.navigate(['/dashboard']);
            }
        }, function (err) { return console.log(err); });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        var register = new _models_register__WEBPACK_IMPORTED_MODULE_0__["Register"]();
        register.email = this.emailr;
        register.password = this.passwordr;
        register.phone_number = this.phone_number;
        register.username = this.username;
        console.log('This.register object ', register);
        this._auth.register(register)
            .subscribe(function (res) {
            console.log('Response from api', res.message);
            _this.apiresAlert = res.message;
        }, function (err) {
            console.log('Error from api ', err.error);
            _this.apiresAlert = err.error;
        });
    };
    LoginComponent.prototype.userDetail = function () {
        console.log('ADMIN ID', this._id);
    };
    LoginComponent.prototype.popupShow = function () {
        this.popup1.show(this.popup.options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popup1'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_6__["Popup"])
    ], LoginComponent.prototype, "popup1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('countrySelect'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "countrySelect", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ng2_opd_popup__WEBPACK_IMPORTED_MODULE_6__["Popup"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/login.ts":
/*!*********************************!*\
  !*** ./src/app/models/login.ts ***!
  \*********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/models/profile.ts":
/*!***********************************!*\
  !*** ./src/app/models/profile.ts ***!
  \***********************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());



/***/ }),

/***/ "./src/app/models/register.ts":
/*!************************************!*\
  !*** ./src/app/models/register.ts ***!
  \************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
var Register = /** @class */ (function () {
    function Register() {
    }
    return Register;
}());



/***/ }),

/***/ "./src/app/models/webinar.ts":
/*!***********************************!*\
  !*** ./src/app/models/webinar.ts ***!
  \***********************************/
/*! exports provided: Webinar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Webinar", function() { return Webinar; });
var Webinar = /** @class */ (function () {
    function Webinar() {
    }
    return Webinar;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"demo-navigation mdl-navigation\">\n    <a class=\"mdl-navigation__link\"  (click)=\"dashboard()\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Home</a>\n    <a class=\"mdl-navigation__link\"  routerLink=\"/profile\" (click)=\"profilerefreshed();\" ><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">inbox</i>Profile</a>\n     <a (click)=\"logout()\" target=\"_blank\" class=\"logout-custom-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-color-text--white\">Logout</a>\n </nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(_router, authservice, spinnerService) {
        this._router = _router;
        this.authservice = authservice;
        this.spinnerService = spinnerService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    NavComponent.prototype.dashboard = function () {
        console.log('Click on Home button');
        this._router.navigate(['/dashboard']);
        location.reload();
    };
    NavComponent.prototype.logout = function () {
        console.log('Logout user called...!!!');
        this.authservice.logoutUser();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n    <header class=\"demo-header mdl-layout__header mdl-color--magenta\">\n        <div class=\"mdl-layout__header-row\">\n            <span class=\"mdl-layout-title\">Webinar Application</span>\n            <span class=\"mdl-layout-title page-name-title\">Dashboard</span>\n            <div class=\"mdl-layout-spacer\"></div>\n\n        </div>\n    </header>\n    <div class=\"demo-drawer mdl-layout__drawer backround--color-white\">\n        <app-profileview></app-profileview>\n        <hr>\n        <app-nav></app-nav>\n    </div>\n    <main style=\"height: -webkit-fill-available;\" class=\"mdl-layout__content mdl-color--grey-100\">\n        <div class=\"mdl-grid form-width-settings\">\n            <form [formGroup]=\"rForm\">\n                <div class=\"\" style=\"text-align: center !important;\">\n\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input formControlName=\"address\" class=\"mdl-textfield__input\" [(ngModel)]=\"address\" id=\"address\">\n                        <label class=\"mdl-textfield__label\" for=\"name-orignal\">Address</label>\n                    </div>\n                    <div class=\"alert\" *ngIf=\"!rForm.controls['address'].valid && rForm.controls['address'].touched\"\n                        style=\"color:red; text-align: center !important;\">{{ addressAlert }}</div>\n\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-profile\">\n                        <input formControlName=\"dateofbirth\" class=\"mdl-textfield__input\" [(ngModel)]=\"dateofbirth\" id=\"dateofbirth\"\n                            type=\"date\">\n                        <label class=\"mdl-textfield__label\" for=\"webinar-topic\">Date Of Birth</label>\n                    </div>\n                   \n                </div>\n\n\n                <div (click)=\"changeProfile()\" style=\"text-align: center !important;\">\n                    <a target=\"_blank\" class=\"logout-custom-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored mdl-color-text--white\"\n                        type=\"submit\">Change Profile</a>\n                </div>\n            </form>\n        </div>\n    </main>\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/profile */ "./src/app/models/profile.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
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
    function ProfileComponent(profileService, _router, fb, spinnerService) {
        this.profileService = profileService;
        this._router = _router;
        this.fb = fb;
        this.spinnerService = spinnerService;
        this.country = '';
        this.timezone = '';
        this.addressAlert = 'Address is required';
        this.dateOfBirthdayAlert = 'Date of birthday required';
        this.profile = new _models_profile__WEBPACK_IMPORTED_MODULE_1__["Profile"]();
        this.profile._id = sessionStorage.getItem('adminID');
        console.log('adminID in profile', this.profile._id);
        this.rForm = fb.group({
            'dateOfBirth': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15)])],
            'address': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15)])]
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js', function () {
            console.log('ngAfterViewInit assets/js/custom.js File is loaded', $);
        });
    };
    ProfileComponent.prototype.changeProfile = function (user) {
        var _this = this;
        this.profile._id = sessionStorage.getItem('_id');
        this.profile.dateOfBirth = new Date();
        this.profile.address = this.address;
        console.log('this.profile ', this.profile);
        this.profileService.changeProfile(this.profile).subscribe(function (res) {
            console.log('Response from api', res);
            _this._router.navigate(['/dashboard']);
        }, function (err) { return console.log(err); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http, _router) {
        this.http = http;
        this._router = _router;
        this.changeProfileURL = "https://backendrockvillie.herokuapp.com/api/users/profile";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        // this.options = new RequestOptions({ headers: this.headers });
    }
    ProfileService.prototype.changeProfile = function (user) {
        return this.http.post(this.changeProfileURL, user);
    };
    ProfileService.prototype.settings = function () {
        return this._router.navigate(['/settings']);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profileview/profileview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profileview/profileview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profileview/profileview.component.html":
/*!********************************************************!*\
  !*** ./src/app/profileview/profileview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"demo-drawer-header\">\n    <img src=\"http://www.unm.clothing/images/mensuit/UMS04/UMS04.jpg\" class=\"demo-avatar\">\n    <div class=\"demo-avatar-dropdown inline-text-cs\">\n       \n        <p>{{username}}</p>\n        <p>{{email}}</p>\n        <div class=\"mdl-layout-spacer\"></div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/profileview/profileview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profileview/profileview.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileviewComponent", function() { return ProfileviewComponent; });
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

var ProfileviewComponent = /** @class */ (function () {
    function ProfileviewComponent() {
    }
    ProfileviewComponent.prototype.ngOnInit = function () {
        this.profileView();
    };
    ProfileviewComponent.prototype.ngAfterViewInit = function () {
        $.getScript('assets/js/custom.js');
    };
    ProfileviewComponent.prototype.profileView = function () {
        this.email = sessionStorage.getItem('email');
        this.name = sessionStorage.getItem('name');
        this.address = sessionStorage.getItem('address');
        this.f_name = sessionStorage.getItem('f_name');
        this.l_name = sessionStorage.getItem('l_name');
    };
    ProfileviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profileview',
            template: __webpack_require__(/*! ./profileview.component.html */ "./src/app/profileview/profileview.component.html"),
            styles: [__webpack_require__(/*! ./profileview.component.css */ "./src/app/profileview/profileview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileviewComponent);
    return ProfileviewComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aqeel\Desktop\testrockvillie\frontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map