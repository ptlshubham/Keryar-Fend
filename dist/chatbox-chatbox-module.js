(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chatbox-chatbox-module"],{

/***/ "3nvi":
/*!*******************************************!*\
  !*** ./src/app/chatbox/chatbox.module.ts ***!
  \*******************************************/
/*! exports provided: ChatboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxModule", function() { return ChatboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chatbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatbox.component */ "P4GD");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var config = { url: 'http://localhost:2500', options: { transports: ['polling'] } };
var ChatboxModule = /** @class */ (function () {
    function ChatboxModule() {
    }
    ChatboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chatbox_component__WEBPACK_IMPORTED_MODULE_4__["ChatboxComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot(config),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'chatbox',
                        component: _chatbox_component__WEBPACK_IMPORTED_MODULE_4__["ChatboxComponent"]
                    }
                ])
            ]
        })
    ], ChatboxModule);
    return ChatboxModule;
}());



/***/ }),

/***/ "90gL":
/*!***********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user_name {\r\n    color: #afafaf;\r\n}\r\n.message {\r\n    padding: 10px !important;\r\n    transition: all 250ms ease-in-out !important;\r\n    border-radius: 10px !important;\r\n    margin-bottom: 4px !important;\r\n}\r\n.my_message {\r\n    background: #124244 !important;\r\n    color: rgb(255, 255, 255) !important;\r\n}\r\n.other_message {\r\n    background: #dcdcdc !important;\r\n    color: #000 !important;\r\n}\r\n.time {\r\n    color: #afafaf;\r\n    float: right;\r\n    font-size: small;\r\n}\r\n.message_row {\r\n    background-color: #fff;\r\n}\r\ndiv.scroll { \r\n    margin:4px, 4px; \r\n    padding:4px; \r\n    width: 100%; \r\n    height: 250px;; \r\n    overflow-x: hidden; \r\n    overflow-y: auto; \r\n    text-align:justify; \r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsNENBQTRDO0lBQzVDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NoYXRib3gvY2hhdGJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJfbmFtZSB7XHJcbiAgICBjb2xvcjogI2FmYWZhZjtcclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG59XHJcbi5teV9tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMjQyNDQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG4ub3RoZXJfbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi50aW1lIHtcclxuICAgIGNvbG9yOiAjYWZhZmFmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4ubWVzc2FnZV9yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbmRpdi5zY3JvbGwgeyBcclxuICAgIG1hcmdpbjo0cHgsIDRweDsgXHJcbiAgICBwYWRkaW5nOjRweDsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBoZWlnaHQ6IDI1MHB4OzsgXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbiAgICB0ZXh0LWFsaWduOmp1c3RpZnk7IFxyXG59ICJdfQ== */");

/***/ }),

/***/ "P4GD":
/*!**********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.ts ***!
  \**********************************************/
/*! exports provided: ChatboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function() { return ChatboxComponent; });
/* harmony import */ var _raw_loader_chatbox_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./chatbox.component.html */ "cGrg");
/* harmony import */ var _chatbox_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatbox.component.css */ "90gL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/api.service */ "PLN7");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Socket } from 'ng-socket-io';
var ChatboxComponent = /** @class */ (function () {
    function ChatboxComponent(apiservice, socket) {
        this.apiservice = apiservice;
        this.socket = socket;
        this.clients = [];
        this.messages = [];
        this.notchat = false;
        this.userid = localStorage.getItem("UserId");
        this.uname = localStorage.getItem("Username");
        this.socket.connect();
        this.socket.emit('set-nickname', 'admin');
        this.GetClient();
    }
    ChatboxComponent.prototype.ngOnInit = function () {
    };
    ChatboxComponent.prototype.GetClient = function () {
        var _this = this;
        this.apiservice.GetClientList().subscribe(function (res) {
            _this.clients = res;
        });
    };
    ChatboxComponent.prototype.OpenChat = function (uid, name) {
        var _this = this;
        this.receiver = uid;
        this.client = name;
        this.notchat = true;
        this.getMessages().subscribe(function (message) {
            _this.messages.push(message.data);
        });
    };
    ChatboxComponent.prototype.sendMessage = function () {
        debugger;
        this.socket.emit('add-message', { message: this.message, sender: this.userid, receiver: this.receiver });
        this.message = '';
    };
    ChatboxComponent.prototype.getMessages = function () {
        var _this = this;
        var data = {
            sender: localStorage.getItem("UserId"),
            receiver: this.receiver
        };
        this.apiservice.getmessages(data).subscribe(function (res) {
            _this.messages = res;
        });
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ChatboxComponent.ctorParameters = function () { return [
        { type: app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] }
    ]; };
    ChatboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chatbox',
            template: _raw_loader_chatbox_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_chatbox_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]])
    ], ChatboxComponent);
    return ChatboxComponent;
}());



/***/ }),

/***/ "cGrg":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content buttons-with-margin \" >\n    <div class=\"card\" *ngIf=\"!notchat\">\n        <div class=\"row\">\n        \n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\"> Clients </h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped\">\n                                <thead class=\"text-primary\">\n                                    <th class=\"text-center\">\n                                        #\n                                    </th>\n                                    <th class=\"text-center\">\n                                    </th>\n                                    <th>\n                                        Name\n                                    </th>\n                                    <th>\n                                        Role\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let u of clients;let i=index\">\n                                        <td class=\"text-center\">\n                                            {{i+1}}\n                                        </td>\n                                        <td>\n                                           {{u.name}}\n                                        </td>\n                                        <td>\n                                            {{u.rolename}}\n                                        </td>\n                                        <td class=\"text-right\">\n                                            <!-- <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm \">\n                                                <i class=\"fa fa-user\"></i>\n                                            </button> -->\n                                            <button type=\"button\" rel=\"tooltip\" (click)=\"OpenChat(u.uid ,u.name)\" class=\"btn btn-success btn-icon btn-md btn-round \">\n                                                <i class=\"nc-icon nc-chat-33\"></i></button>\n                                        </td>\n                                     \n                                    </tr>\n    \n                                    \n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          \n        </div>\n    </div>\n\n\n\n\n\n\n\n    <div class=\"card\" *ngIf=\"notchat\"   > \n        <div class=\"row\" >\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\"> {{client}} </h4>\n                    </div>\n                    <div class=\"card-body scroll\" >\n                        <div class=\"row\" *ngFor=\"let message of messages\">\n                            <div class=\"col-md-10\"  *ngIf=\"message.sender != userid\"  style=\"background-color: rgb(233, 233, 229);border-radius: 20px; border-style: solid;border-width: 1px;padding:4px;border-color: rgb(233, 233, 229);margin-top: 4px;;margin-left: 20px;;\">\n                               <span class=\"user_name\" style=\"color:gray;font-size: 0.7rem;\">{{ message.sendername }}</span><br>\n                              <span style=\"color:black;font-size: 1rem;\">{{ message.message}}</span>\n                              <div class=\"time\" style=\"color:gray;font-size: 0.5rem;margin-top: 3px;\">{{message.createddate | date:'dd.MM hh:MM'}}</div>\n                            </div>\n                            <div class=\"col-md-2\"></div>\n                            <div class=\"col-md-10\"  *ngIf=\"message.sender == userid\"  style=\"color:#ffffff;background-color:#124244;border-radius:20px;border-style: solid;border-width: 1px;padding:4px;margin-top: 4px;;\">\n                                <span class=\"user_name\" style=\"color:gray;font-size: 0.7rem;\">{{ uname }}</span><br>\n                                <span style=\"color:white ; font-size: 1rem;\">{{ message.message }}</span>\n                              <div class=\"time\" style=\"color:rgb(204, 209, 209);font-size: 0.5rem;margin-top: 3px;;\">{{message.createddate | date:'dd.MM hh:MM'}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div> \n            </div>\n        </div>\n        <div class=\"row\" >\n            <div style=\"height:10px;\">\n            <div  class=\"row\" >\n              <div class=\"col-md-10\"  style=\"margin-top: -1%;\">\n                  <input type=\"text\" placeholder=\"Message\" [(ngModel)]=\"message\" style=\"height:2.5rem;border-radius: 30px;border-width: 1px;;border-style: solid;border-color: red;width: 100%;\">\n              </div>\n              <div class=\"col-md-2\" style=\"text-align: center; font-size: 1.8rem !important ; \">\n                  <i class=\"nc-icon nc-send\" (click)=\"sendMessage()\" ></i>\n              </div>\n             \n            </div>\n        </div>\n    </div>\n</div>\n            \n");

/***/ })

}]);
//# sourceMappingURL=chatbox-chatbox-module.js.map