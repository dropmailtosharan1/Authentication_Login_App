import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/login/login.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { provideRouter, RouterOutlet, Routes } from '@angular/router';
import { FooterComponent } from './app/components/footer/footer.component';
import { AccountListComponent } from './app/components/account-list/account-list.component';
import { AccountFormComponent } from './app/components/account-form/account-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountListComponent },
  { path: 'create-account', component: AccountFormComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // LoginComponent,
     NavbarComponent, RouterOutlet, FooterComponent],
  template: `
    <!-- <app-login></app-login> -->
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class App {
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));