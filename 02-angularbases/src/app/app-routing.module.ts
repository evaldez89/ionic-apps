import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: 'home',
      component: HomeComponent
  },
  {
    path: 'contact',
      component: ContactComponent
  },
  {
    path: 'about',
      component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
