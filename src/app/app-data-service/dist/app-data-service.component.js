"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppDataServiceComponent = void 0;
var core_1 = require("@angular/core");
var AppDataServiceComponent = /** @class */ (function () {
    function AppDataServiceComponent() {
        this.personalInformation = [
            {
                "path": "gps-normal",
                "text": "Flexible in terms of working environments, I can work effectively bothon-site in Munich and remotely."
            },
            {
                "path": "lamp-normal",
                "text": "I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.."
            },
            {
                "path": "puzzle-normal",
                "text": "In my profession, programming isn't just about writing code; it's acreative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life."
            },
        ];
        this.myContentLinks = [
            {
                linkComponent: '#aboutMe',
                title: 'ABOUT ME'
            },
            {
                linkComponent: '#skill',
                title: 'SKILLS'
            },
            {
                linkComponent: '#contact',
                title: 'CONTACT'
            }
        ];
        this.mySkills = [{
                "path": "icon-angular",
                "name": "Angular"
            },
            {
                "path": "icon-ts",
                "name": "TypeScript"
            },
            {
                "path": "icon-js",
                "name": "JavaScript"
            },
            {
                "path": "icon-html",
                "name": "HTML"
            },
            {
                "path": "icon-firebase",
                "name": "Firebase"
            },
            {
                "path": "icon-git",
                "name": "GIT"
            },
            {
                "path": "icon-css",
                "name": "CSS"
            },
            {
                "path": "icon-api",
                "name": "Rest-Api"
            },
            {
                "path": "icon-scrum",
                "name": "Scrum"
            },
            {
                "path": "icon-material-design",
                "name": "Material Design"
            },
        ];
        this.myProjects = [
            {
                'name': 'El Pollo Loco',
                'languages': 'HTML | CSS | JavaScript',
                'description': 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
                'imgPath': './assets/img/projects-img/Pollo loco 1.png',
                'livetestPath': './jumprun/index.html',
                'githubPath': 'https://github.com/BekirLabjani/el-pollo-loco'
            },
            {
                'name': 'Join',
                'languages': 'HTML | CSS | JavaScript',
                'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop function, assign users and categories.',
                'imgPath': './assets/img/projects-img/join.png',
                'livetestPath': './join-app/loginpage.html',
                'githubPath': 'https://github.com/BekirLabjani/el-pollo-loco'
            },
            {
                'name': 'El Pollo Loco2',
                'languages': 'HTML | CSS | JavaScript',
                'description': 'portfolio-join-description',
                'imgPath': './assets/img/projects-img/Pollo loco 1.png',
                'livetestPath': '',
                'githubPath': 'https://github.com/BekirLabjani/el-pollo-loco'
            },
        ];
    }
    AppDataServiceComponent = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AppDataServiceComponent);
    return AppDataServiceComponent;
}());
exports.AppDataServiceComponent = AppDataServiceComponent;
