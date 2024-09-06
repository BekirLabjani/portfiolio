
import { Injectable } from '@angular/core';
import { Items } from '../models/item.interface.model';

@Injectable({
  providedIn: 'root',
})

export class AppDataServiceComponent {
  personalInformation = [
    {
      "path" : "gps-normal",
      "text" : "Flexible in terms of working environments, I can work effectively bothon-site in Munich and remotely."
    },
    {
      "path" : "lamp-normal",
      "text" : "I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.."
    },
    {
      "path" : "puzzle-normal",
      "text" : "In my profession, programming isn't just about writing code; it's acreative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life."
    },
  ]


  myContentLinks = [
    {
      linkComponent: '#aboutMe',
      title: 'ABOUT ME',
    },
    {
      linkComponent: '#skill',
      title: 'SKILLS',
    },
    {
      linkComponent: '#contact',
      title: 'CONTACT',
    }
  ];

  mySkills = [{
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
  // {
  //   "path": "icon-interest",
  //   "name": "Continually learning"
  // },
];

  myProjects: Items[] = [
    {
      'name': 'El Pollo Loco',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'portfolio-join-description',
      'imgPath': './assets/img/projects-img/Pollo loco 1.png',
      'livetestPath': './jumprun/index.html',
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
    {
      'name': 'El Pollo Loco2',
      'languages': 'HTML | CSS | JavaScript',
      'description': 'portfolio-join-description',
      'imgPath': './assets/img/projects-img/Pollo loco 1.png',
      'livetestPath': '',
      'githubPath': 'https://github.com/BekirLabjani/el-pollo-loco'
    },
  ]
}
