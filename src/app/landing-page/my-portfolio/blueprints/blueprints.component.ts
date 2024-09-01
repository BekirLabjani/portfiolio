import { Component,Input } from '@angular/core';
import { Items } from '../../../models/item.interface.model';

@Component({
  selector: 'app-blueprints',
  standalone: true,
  imports: [],
  templateUrl: './blueprints.component.html',
  styleUrl: './blueprints.component.scss'
})
export class BlueprintsComponent {
  @Input() projectData: Items = {
    'name': '',
    'languages': '',
    'description': '',
    'imgPath': '',
    'livetestPath': '',
    'githubPath': ''
  };
}
