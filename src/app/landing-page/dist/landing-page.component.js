"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LandingPageComponent = void 0;
var core_1 = require("@angular/core");
var header_component_1 = require("../shared/header/header.component");
var start_page_component_1 = require("./start-page/start-page.component");
var about_me_component_1 = require("./about-me/about-me.component");
var my_skills_component_1 = require("./my-skills/my-skills.component");
var my_portfolio_component_1 = require("./my-portfolio/my-portfolio.component");
var contact_me_component_1 = require("./contact-me/contact-me.component");
var footer_component_1 = require("../shared/footer/footer.component");
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-landing-page',
            standalone: true,
            imports: [
                header_component_1.HeaderComponent,
                start_page_component_1.StartPageComponent,
                about_me_component_1.AboutMeComponent,
                my_skills_component_1.MySkillsComponent,
                my_portfolio_component_1.MyPortfolioComponent,
                contact_me_component_1.ContactMeComponent,
                footer_component_1.FooterComponent
            ],
            templateUrl: './landing-page.component.html',
            styleUrl: './landing-page.component.scss'
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
