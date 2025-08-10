import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ApiData } from './pages/api-data/api-data';
import { ContactForm } from './pages/contact-form/contact-form'; // ✅ match exported class name

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'api-data', component: ApiData },
  { path: 'contact', component: ContactForm },
];
