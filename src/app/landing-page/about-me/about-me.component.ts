import { Component,AfterViewInit,ElementRef } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: [
    './about-me.component.scss','./about-me-responsiv.component.scss' // Responsives Stylesheet
  ],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})
export class AboutMeComponent implements AfterViewInit {
  personalInformation = this.appDataService.personalInformation;
constructor(private appDataService: AppDataServiceComponent, private ele: ElementRef){

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

