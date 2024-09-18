import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from '../shared/footer/footer.component';
// import {
//   trigger,
//   style,
//   animate,
//   transition
// } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
     HeaderComponent,
     StartPageComponent,
     AboutMeComponent,
     MySkillsComponent,
     MyPortfolioComponent,
     ContactMeComponent,
     FooterComponent
    ],
    // animations: [
    //   trigger('fadeIn', [
    //     transition(':enter', [
    //       style({ opacity: 0 }),
    //       animate('1000ms ease-in', style({ opacity: 1 }))
    //     ])
    //   ])
    // ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  
})
export class LandingPageComponent implements AfterViewInit{

  constructor(private el: ElementRef) {
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
