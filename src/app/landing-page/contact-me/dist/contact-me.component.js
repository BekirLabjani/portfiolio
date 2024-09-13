"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactMeComponent = void 0;
var core_1 = require("@angular/core");
var contact_form_component_1 = require("./contact-form/contact-form.component");
var ContactMeComponent = /** @class */ (function () {
    function ContactMeComponent() {
    }
    ContactMeComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-me',
            standalone: true,
            imports: [contact_form_component_1.ContactFormComponent],
            templateUrl: './contact-me.component.html',
            styleUrl: './contact-me.component.scss'
        })
    ], ContactMeComponent);
    return ContactMeComponent;
}());
exports.ContactMeComponent = ContactMeComponent;
