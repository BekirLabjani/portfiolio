
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AppDataServiceComponent {
  personalInformation = [
    {
      "path" : "position",
      "text" : "Flexible in terms of working environments, I can work effectively bothon-site in Munich and remotely."
    },
    {
      "path" : "lamp",
      "text" : "I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.."
    },
    {
      "path" : "puzzle",
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
  }];
}
