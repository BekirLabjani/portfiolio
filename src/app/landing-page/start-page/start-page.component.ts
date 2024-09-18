import { Component,AfterViewInit,ElementRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';
@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './start-page.component.html',
  styleUrls: [
    './start-page-responsiv.scss','./start-page.component.scss' // Responsives Stylesheet
  ],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})
export class StartPageComponent implements AfterViewInit  {
  constructor(private el: ElementRef){

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
