"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appDataService) {
        this.appDataService = appDataService;
        this.myContentLinks = this.appDataService.myContentLinks; // Correct variable name
        this.activeLinkIndex = null;
        this.isMenuOpen = true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.closeBurgerMenuOnClick();
    };
    HeaderComponent.prototype.setActiveLink = function (index) {
        this.activeLinkIndex = index;
    };
    HeaderComponent.prototype.closeBurgerMenuOnClick = function () {
        this.isMenuOpen = !this.isMenuOpen;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink],
            templateUrl: './header.component.html',
            styleUrl: './header.component.scss'
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
