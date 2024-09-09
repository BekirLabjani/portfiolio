import { Component } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  mySkills = this.appDataService.mySkills;
constructor(private appDataService: AppDataServiceComponent){

}
isHovered = false;

showHidden() {
    this.isHovered = true;
}

hideHidden() {
    this.isHovered = false;
}

toggleHidden() {
    this.isHovered = !this.isHovered;
}


}



