import { Routes } from '@angular/router';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PrivacyPoliceComponent } from './shared/privacy-police/privacy-police.component';
export const routes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'imprint/', component: ImprintComponent},
    { path: 'privacy-policy/', component: PrivacyPoliceComponent }
];