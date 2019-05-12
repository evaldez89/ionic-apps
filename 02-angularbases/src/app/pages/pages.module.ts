import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    AboutComponent
  ]
})
export class PagesModule { }
