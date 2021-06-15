(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "8+bP":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client-details/client-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\"></div>\n");

/***/ }),

/***/ "C9vP":
/*!*******************************************************************!*\
  !*** ./src/app/client/client-details/client-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var _raw_loader_client_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./client-details.component.html */ "8+bP");
/* harmony import */ var _client_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-details.component.css */ "mnZj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent() {
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
    };
    ClientDetailsComponent.ctorParameters = function () { return []; };
    ClientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-client-details',
            template: _raw_loader_client_details_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_client_details_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "YxJP":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _raw_loader_client_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./client.component.html */ "xu2U");
/* harmony import */ var _client_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.component.css */ "gzds");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/api.service */ "PLN7");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientComponent = /** @class */ (function () {
    function ClientComponent(apiservice) {
        this.apiservice = apiservice;
        this.users = [];
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.GetUser();
    };
    ClientComponent.prototype.GetUser = function () {
        var _this = this;
        this.apiservice.GetClientList().subscribe(function (res) {
            _this.users = res;
        });
    };
    ClientComponent.prototype.deleteclient = function (uid) {
        this.empid = uid;
    };
    ClientComponent.prototype.confirm = function () {
        this.apiservice.showNotification('top', 'right', 'Client is deleted Successfully!', 'success');
        // this.apiservice.DeleteClient(this.empid).subscribe((res:any)=>{
        // })
    };
    ClientComponent.ctorParameters = function () { return [
        { type: app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-client',
            template: _raw_loader_client_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_client_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "gzds":
/*!*********************************************!*\
  !*** ./src/app/client/client.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "kk3Z":
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.component */ "YxJP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-details/client-details.component */ "C9vP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-chips */ "Kb4U");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'client',
                        component: _client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"]
                    }, {
                        path: 'client-detail',
                        component: _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_5__["ClientDetailsComponent"]
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_8__["TagInputModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Module"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"], _client_details_client_details_component__WEBPACK_IMPORTED_MODULE_5__["ClientDetailsComponent"]],
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "mnZj":
/*!********************************************************************!*\
  !*** ./src/app/client/client-details/client-details.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQtZGV0YWlscy9jbGllbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "xu2U":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container\">\n        <button class=\"btn btn-success btn-md btn-round\">Add Client\n          &nbsp;  <i class=\"fa fa-user-plus\" aria-hidden=\"true\" style=\"font-size: 1.2rem;\"></i>\n        </button>\n    </div>\n    <div class=\"row\">\n        \n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h4 class=\"card-title\"> Clients </h4>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead class=\"text-primary\">\n                                <th class=\"text-center\">\n                                    #\n                                </th>\n                                <th class=\"text-center\">\n                                </th>\n                                <th>\n                                    Name\n                                </th>\n                                <th>\n                                    Role\n                                </th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let u of users;let i=index\">\n                                    <td class=\"text-center\">\n                                        {{i+1}}\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <div class=\"form-check\">\n                                            <label class=\"form-check-label\">\n                                                <input class=\"form-check-input\" type=\"checkbox\" >\n                                                <span class=\"form-check-sign\"></span>\n                                            </label>\n                                        </div>\n                                    </td>\n                                    <td>\n                                       {{u.name}}\n                                    </td>\n                                    <td>\n                                        {{u.rolename}}\n                                    </td>\n                                    <td class=\"text-right\">\n                                        <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm \">\n                                            <i class=\"fa fa-user\"></i>\n                                        </button> -->\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-md btn-round \">\n                                            <i class=\"fa fa-edit\"></i>\n                                        </button>&nbsp;&nbsp;\n                                        <button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal10\" type=\"button\" (click)=\"deleteclient(u.uid)\"  rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-md btn-round\">\n                                            <i class=\"fa fa-trash\"></i>\n                                        </button>\n                                    </td>\n                                 \n                                </tr>\n\n                                \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n      \n    </div>\n    <div class=\"modal fade modal-primary\" id=\"myModal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header justify-content-center\">\n              <div class=\"modal-profile ml-auto mr-auto\">\n                <i class=\"nc-icon nc-bulb-63\"></i>\n              </div>\n            </div>\n            <div class=\"modal-body\">\n              <p>Always have an access to your profile</p>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"left-side mx-0\">\n                <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Close</button>\n              </div>\n              <div class=\"divider\"></div>\n              <div class=\"right-side mx-0\">\n                <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" (click)=\"confirm()\">Confirm</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map