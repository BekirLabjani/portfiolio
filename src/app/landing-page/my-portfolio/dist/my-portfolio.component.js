"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MyPortfolioComponent = void 0;
var core_1 = require("@angular/core");
var blueprints_component_1 = require("./blueprints/blueprints.component");
var blueprints_mirrored_component_1 = require("./blueprints-mirrored/blueprints-mirrored.component");
var MyPortfolioComponent = /** @class */ (function () {
    function MyPortfolioComponent(appService) {
        this.appService = appService;
        this.myPorto = this.appService.myProjects;
    }
    MyPortfolioComponent = __decorate([
        core_1.Component({
            selector: 'app-my-portfolio',
            standalone: true,
            imports: [blueprints_component_1.BlueprintsComponent, blueprints_mirrored_component_1.BlueprintsMirroredComponent],
            templateUrl: './my-portfolio.component.html',
            styleUrl: './my-portfolio.component.scss'
        })
    ], MyPortfolioComponent);
    return MyPortfolioComponent;
}());
exports.MyPortfolioComponent = MyPortfolioComponent;
