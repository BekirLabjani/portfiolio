import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrls: [
    './contact-me-responsiv.component.scss', './contact-me.component.scss'
  ]
})
export class ContactMeComponent {

}
