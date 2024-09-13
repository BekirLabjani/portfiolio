"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactFormComponent = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.http = core_1.inject(http_1.HttpClient);
        this.contactData = {
            name: '',
            email: '',
            message: ''
        };
        this.isChecked = false;
        this.post = {
            endPoint: 'https://bekir-labjani.com/sendMail.php',
            body: function (payload) { return JSON.stringify(payload); },
            options: {
                headers: {
                    'Content-Type': 'text/plain',
                    responseType: 'text'
                }
            }
        };
    }
    ContactFormComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        if (ngForm.submitted && ngForm.form.valid) {
            this.http.post(this.post.endPoint, this.post.body(this.contactData))
                .subscribe({
                next: function (response) {
                    ngForm.resetForm();
                    _this.addActiveClass();
                },
                error: function (error) {
                    console.error(error);
                },
                complete: function () { return console.info('send post complete'); }
            });
        }
        else if (ngForm.submitted && ngForm.form.valid) {
            ngForm.resetForm();
            this.addActiveClass();
        }
    };
    ContactFormComponent.prototype.toggleCheckbox = function () {
        this.isChecked = !this.isChecked;
    };
    ContactFormComponent.prototype.addActiveClass = function () {
        var _a, _b;
        (_a = document.querySelector('button[type="submit"]')) === null || _a === void 0 ? void 0 : _a.classList.add('btn-active');
        (_b = document.getElementById('msgSuccess')) === null || _b === void 0 ? void 0 : _b.classList.add('mail-active');
        setTimeout(function () {
            var _a, _b;
            (_a = document.querySelector('button[type="submit"]')) === null || _a === void 0 ? void 0 : _a.classList.remove('btn-active');
            (_b = document.getElementById('msgSuccess')) === null || _b === void 0 ? void 0 : _b.classList.remove('mail-active');
        }, 2000);
    };
    ContactFormComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-form',
            standalone: true,
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterLink,
                router_1.RouterLinkActive,
                router_1.RouterOutlet,
            ],
            templateUrl: './contact-form.component.html',
            styleUrls: ['./contact-form.component.scss']
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());
exports.ContactFormComponent = ContactFormComponent;
