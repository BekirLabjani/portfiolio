import { Component } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  mySkills = this.appDataService.mySkills;
constructor(private appDataService: AppDataServiceComponent){

}

}
