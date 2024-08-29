import { Component } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  personalInformation = this.appDataService.personalInformation;
constructor(private appDataService: AppDataServiceComponent){
}
}
