import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: [
    './about-me.component.scss','./about-me-responsiv.component.scss' // Responsives Stylesheet
  ]
})
export class AboutMeComponent {
  personalInformation = this.appDataService.personalInformation;
constructor(private appDataService: AppDataServiceComponent){

}

}

