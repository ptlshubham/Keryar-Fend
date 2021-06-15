(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "/A9N":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "66QQ":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _raw_loader_employee_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./employee.component.html */ "e7WC");
/* harmony import */ var _employee_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.component.css */ "/A9N");
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




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(apiservice) {
        this.apiservice = apiservice;
        this.users = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.GetUser();
    };
    EmployeeComponent.prototype.GetUser = function () {
        var _this = this;
        this.apiservice.GetEmployeeList().subscribe(function (res) {
            _this.users = res;
        });
    };
    EmployeeComponent.prototype.deleteclient = function (uid) {
        this.empid = uid;
    };
    EmployeeComponent.prototype.confirm = function () {
        this.apiservice.showNotification('top', 'right', 'Employee is deleted Successfully!', 'success');
        // this.apiservice.DeleteClient(this.empid).subscribe((res:any)=>{
        // })
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
    ]; };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-employee',
            template: _raw_loader_employee_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_employee_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "PgJR":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "66QQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: 'employee',
                        component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]],
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "e7WC":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container\">\n        <button class=\"btn btn-success btn-md btn-round\">Add Employee\n          &nbsp;  <i class=\"fa fa-user-plus\" aria-hidden=\"true\" style=\"font-size: 1.2rem;\"></i>\n        </button>\n    </div>\n    \n    <div class=\"row\">\n        \n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h4 class=\"card-title\">Employees</h4>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\">\n                            <thead class=\"text-primary\">\n                                <th class=\"text-center\">\n                                    #\n                                </th>\n                                <th class=\"text-center\">\n                                </th>\n                                <th>\n                                    Name\n                                </th>\n                                <th>\n                                    Role\n                                </th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let u of users;let i=index\">\n                                    <td class=\"text-center\">\n                                        {{i+1}}\n                                    </td>\n                                    <td class=\"text-center\">\n                                        <div class=\"form-check\">\n                                            <label class=\"form-check-label\">\n                                                <input class=\"form-check-input\" type=\"checkbox\" >\n                                                <span class=\"form-check-sign\"></span>\n                                            </label>\n                                        </div>\n                                    </td>\n                                    <td>\n                                       {{u.name}}\n                                    </td>\n                                    <td>\n                                        {{u.rolename}}\n                                    </td>\n                                    <td class=\"text-right\">\n                                        <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm \">\n                                            <i class=\"fa fa-user\"></i>\n                                        </button> -->\n                                        <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-md btn-round \">\n                                            <i class=\"fa fa-edit\"></i>\n                                        </button>&nbsp;&nbsp;\n                                        <button data-toggle=\"modal\" data-target=\"#myModal10\" type=\"button\" (click)=\"deleteclient(u.uid)\"   rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-md btn-round\">\n                                            <i class=\"fa fa-trash\"></i>\n                                        </button>\n                                    </td>\n                                </tr>\n\n                                \n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n      \n    </div>\n    <div class=\"modal fade modal-primary\" id=\"myModal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header justify-content-center\">\n              <div class=\"modal-profile ml-auto mr-auto\">\n                <i class=\"nc-icon nc-bulb-63\"></i>\n              </div>\n            </div>\n            <div class=\"modal-body\">\n              <p>Always have an access to your profile</p>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"left-side mx-0\">\n                <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Close</button>\n              </div>\n              <div class=\"divider\"></div>\n              <div class=\"right-side mx-0\">\n                <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" (click)=\"confirm()\">Confirm</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n   \n</div>");

/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map