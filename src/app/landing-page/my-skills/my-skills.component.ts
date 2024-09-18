import { Component,AfterViewInit,ElementRef } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';
@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss'], // geändert
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})

export class MySkillsComponent implements AfterViewInit {
  mySkills = this.appDataService.mySkills;
constructor(private appDataService: AppDataServiceComponent,private el: ElementRef){

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


ngAfterViewInit() {
  const sections = this.el.nativeElement.querySelectorAll('.fade-section'); // Elemente mit .fade-section überwachen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in'); // Klasse hinzufügen, um Animation zu triggern
      }
    });
  });

  sections.forEach((section: Element) => observer.observe(section));
}

}



