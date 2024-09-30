import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],  
})
export class ContactFormComponent {
  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  };
constructor(private router: Router) {}
  isChecked: boolean = false;

  post = {
    endPoint: 'https://bekir-labjani.com/sendMail.php',  
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.addActiveClass();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {
      ngForm.resetForm();
      this.addActiveClass();
    }
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  addActiveClass() {
    document.querySelector('button[type="submit"]')?.classList.add('btn-active');
    document.getElementById('msgSuccess')?.classList.add('mail-active');
    setTimeout(() => {
      document.querySelector('button[type="submit"]')?.classList.remove('btn-active');
      document.getElementById('msgSuccess')?.classList.remove('mail-active');
    }, 2000);
  }
  handleClick(event: Event) {
    event.preventDefault(); // Optional, falls du das Standardverhalten unterdrücken möchtest
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrollt nach oben
    this.openPriv(event); // Führt die ursprüngliche openPriv() Funktion aus
  }
  
  openPriv(event : Event){
    event.preventDefault();
    this.router.navigateByUrl('/privacy-policy/');

  }
}
