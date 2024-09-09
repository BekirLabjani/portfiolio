import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  myContentLinks = this.appDataService.myContentLinks; // Correct variable name
  activeLinkIndex: number | null = null;

  constructor(private appDataService: AppDataServiceComponent) {}

  ngOnInit() {
    this.closeBurgerMenuOnClick();
  }


  setActiveLink(index: number): void {
    this.activeLinkIndex = index;
  }

  isMenuOpen = true;



  closeBurgerMenuOnClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
