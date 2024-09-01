import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  // http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  }
  mailTest = true;


post = {
    endPoint: 'https://http://bekir-labjani.com//sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  
  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      // Hier könntest du das Formular an den Server senden oder andere Aktionen durchführen.
      console.log('Formular gesendet', this.contactData);
    } else {
      console.log('Formular ist ungültig');
    }
  }
}

