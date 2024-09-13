"use strict";

exports.__esModule = true;
exports.routes = void 0;

var imprint_component_1 = require("./shared/imprint/imprint.component");

var landing_page_component_1 = require("./landing-page/landing-page.component");

exports.routes = [{
  path: '',
  component: landing_page_component_1.LandingPageComponent
}, {
  path: 'imprint/',
  component: imprint_component_1.ImprintComponent
}];