import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './start-page.component.html',
  styleUrls: [
    './start-page-responsiv.scss','./start-page.component.scss' // Responsives Stylesheet
  ]
})
export class StartPageComponent {

}
