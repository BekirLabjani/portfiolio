import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Fixed typo
})
export class HeaderComponent {
  myContentLinks = this.appDataService.myContentLinks; // Correct variable name
  activeLinkIndex: number | null = null;
  isInactive: boolean = false;
  isInactive1: boolean = true;
  currentLanguage: string = 'en';
  isMenuOpen = true;

  constructor(private appDataService: AppDataServiceComponent, public translate: TranslateService) {
    // this.translate.setDefaultLang('de');
  }
  
  ngOnInit() {
    this.closeBurgerMenuOnClick();
  }

  setActiveLink(index: number): void {
    this.activeLinkIndex = index;
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  switchLanguage(language: string) {
  
    
    this.translate.use(language); // Fixed method
    switch (language) {
      case "en":
        this.isInactive = false;
        this.isInactive1 = true;

        break;
      case "de": // Fixed language code
        this.isInactive = true;
        this.isInactive1 = false;
        break;
    }
  }

  closeBurgerMenuOnClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
