import { Component,Input } from '@angular/core';
import { Items } from '../../../models/item.interface.model';

@Component({
  selector: 'app-blueprints-mirrored',
  standalone: true,
  imports: [],
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
