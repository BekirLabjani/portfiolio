import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ImprintComponent } from '../imprint/imprint.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports:[ImprintComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {}

  openImp(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/imprint/');
  }
}
