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
var core_2 = require("@ngx-translate/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appDataService, translate) {
        this.appDataService = appDataService;
        this.translate = translate;
        this.myContentLinks = this.appDataService.myContentLinks; // Correct variable name
        this.activeLinkIndex = null;
        this.isInactive = false;
        this.isInactive1 = true;
        this.currentLanguage = 'en';
        this.isMenuOpen = true;
        // this.translate.setDefaultLang('de');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var savedLanguage = localStorage.getItem('language') || 'en';
        this.translate.use(savedLanguage);
        this.closeBurgerMenuOnClick();
    };
    HeaderComponent.prototype.setActiveLink = function (index) {
        this.activeLinkIndex = index;
    };
    HeaderComponent.prototype.changeLanguage = function (language) {
        this.translate.use(language);
    };
    HeaderComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
        localStorage.setItem('language', language); // Speichere die Sprache im lokalen Speicher
        switch (language) {
            case 'en':
                this.isInactive = false;
                this.isInactive1 = true;
                break;
            case 'de':
                this.isInactive = true;
                this.isInactive1 = false;
                break;
        }
    };
    HeaderComponent.prototype.closeBurgerMenuOnClick = function () {
        this.isMenuOpen = !this.isMenuOpen;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLink, core_2.TranslateModule],
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'] // Fixed typo
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
