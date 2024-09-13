"use strict";

exports.__esModule = true;
exports.appConfig = void 0;

var router_1 = require("@angular/router");

var app_routes_1 = require("./app.routes");

var http_1 = require("@angular/common/http");

exports.appConfig = {
  providers: [router_1.provideRouter(app_routes_1.routes), http_1.provideHttpClient()]
};