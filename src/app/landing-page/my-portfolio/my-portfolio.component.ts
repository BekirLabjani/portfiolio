import { Component,AfterViewInit,ElementRef } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';
import { BlueprintsComponent } from './blueprints/blueprints.component';
import { BlueprintsMirroredComponent } from './blueprints-mirrored/blueprints-mirrored.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';
@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [BlueprintsComponent,BlueprintsMirroredComponent,TranslateModule],
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})
export class MyPortfolioComponent  implements AfterViewInit{
  myPorto = this.appService.myProjects
constructor(private appService: AppDataServiceComponent,private ele: ElementRef) {

}

ngAfterViewInit() {
  const sections = this.ele.nativeElement.querySelectorAll('.fade-section'); // Elemente mit .fade-section überwachen
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
