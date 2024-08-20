import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from '../shared/footer/footer.component';

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
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
