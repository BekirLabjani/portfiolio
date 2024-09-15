import { Component,Input, ElementRef } from '@angular/core';
import { Items } from '../../../models/item.interface.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-blueprints',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './blueprints.component.html',
  styleUrl: './blueprints.component.scss'
})
export class BlueprintsComponent {
  constructor(private el: ElementRef){
  }
  @Input() projectData: Items = {
    'name': '',
    'languages': '',
    'description': '',
    'imgPath': '',
    'livetestPath': '',
    'githubPath': ''
  };
}
