"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var model_1 = require('./model'); //for testing purposes, you don't need this.
var WelcomeComponent = (function () {
    function WelcomeComponent(userService) {
        this.userService = userService;
        this.welcome = '-- not initialized yet --';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.welcome = this.userService.isLoggedIn ?
            'Welcome, ' + this.userService.user.name :
            'Please log in.';
    };
    WelcomeComponent = __decorate([
        //for testing purposes, you don't need this.
        core_1.Component({
            selector: 'app-welcome',
            template: '<h3 class="welcome" ><i>{{welcome}}</i></h3>'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof model_1.UserService !== 'undefined' && model_1.UserService) === 'function' && _a) || Object])
    ], WelcomeComponent);
    return WelcomeComponent;
    var _a;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map