
import { Injectable } from '@angular/core';
import { Items } from '../models/item.interface.model';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})

export class AppDataServiceComponent {
  constructor( public translate: TranslateService) {
    // this.translate.setDefaultLang('de');
  }
  personalInformation = [
    {
      "path" : "gps-normal",
      "text" : this.translate.instant('AboutMeLocation')
    },
    {
      "path" : "lamp-normal",
      "text" : this.translate.instant('AboutMeMindset')
    },
    {
      "path" : "puzzle-normal",
      "text" : this.translate.instant("AboutMeProgramming")
    },
  ]


  myContentLinks = [
    {
      linkComponent: '#aboutMe',
      title: this.translate.instant('AboutMeLink'),
    },
    {
      linkComponent: '#skill',
      title: this.translate.instant('SkillsLink'),
    },
    {
      linkComponent: '#contact',
      title: this.translate.instant('ContactLink'),
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
      'description': this.translate.instant('ElPolloLocoDescription'),
      'imgPath': './assets/img/projects-img/Pollo loco 1.png',
      'livetestPath': './jumprun/index.html',
      'githubPath': 'https://github.com/BekirLabjani/el-pollo-loco'
    },
    {
      'name': 'Join',
      'languages': 'HTML | CSS | JavaScript',
      'description': this.translate.instant('JoinDescription'),
      'imgPath': './assets/img/projects-img/join.png',
      'livetestPath': './cleaning-webside/index.html',
      'githubPath': 'https://github.com/BekirLabjani/Join-App'
    },
  ];
}
