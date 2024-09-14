import { Component } from '@angular/core';
import { AppDataServiceComponent } from '../../app-data-service/app-data-service.component';
import { BlueprintsComponent } from './blueprints/blueprints.component';
import { BlueprintsMirroredComponent } from './blueprints-mirrored/blueprints-mirrored.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [BlueprintsComponent,BlueprintsMirroredComponent,TranslateModule],
  templateUrl: './my-portfolio.component.html',
  styleUrl: './my-portfolio.component.scss'
})
export class MyPortfolioComponent {
  myPorto = this.appService.myProjects
constructor(private appService: AppDataServiceComponent) {

}
}
