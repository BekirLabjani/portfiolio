import { Component,Input } from '@angular/core';
import { Items } from '../../../models/item.interface.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blueprints-mirrored',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './blueprints-mirrored.component.html',
  styleUrl: './blueprints-mirrored.component.scss'
})
export class BlueprintsMirroredComponent {
  @Input() projectDataMir: Items = {
    'name': '',
    'languages': '',
    'description': '',
    'imgPath': '',
    'livetestPath': '',
    'githubPath': ''
  };
}
