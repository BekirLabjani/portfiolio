"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.AppComponent = void 0;

var core_1 = require("@angular/core");

var common_1 = require("@angular/common");

var router_1 = require("@angular/router");

var landing_page_component_1 = require("./landing-page/landing-page.component");

var footer_component_1 = require("./shared/footer/footer.component");

var header_component_1 = require("./shared/header/header.component");

var AppComponent =
/** @class */
function () {
  function AppComponent() {
    this.title = 'portfolio';
  }

  AppComponent = __decorate([core_1.Component({
    selector: 'app-root',
    standalone: true,
    imports: [common_1.CommonModule, router_1.RouterOutlet, landing_page_component_1.LandingPageComponent, footer_component_1.FooterComponent, header_component_1.HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
  })], AppComponent);
  return AppComponent;
}();

exports.AppComponent = AppComponent;