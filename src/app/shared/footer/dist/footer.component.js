"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterComponent = void 0;
var core_1 = require("@angular/core");
var imprint_component_1 = require("../imprint/imprint.component");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.openImp = function (event) {
        event.preventDefault();
        this.router.navigateByUrl('/imprint/');
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            standalone: true,
            imports: [imprint_component_1.ImprintComponent],
            templateUrl: './footer.component.html',
            styleUrl: './footer.component.scss'
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
