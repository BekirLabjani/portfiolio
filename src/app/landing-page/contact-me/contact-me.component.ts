import { Component,AfterViewInit,ElementRef } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactFormComponent, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrls: [
    './contact-me-responsiv.component.scss', './contact-me.component.scss'
  ],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(100)]),
      transition('* => void', [animate(100, style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})
export class ContactMeComponent implements AfterViewInit  {
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
