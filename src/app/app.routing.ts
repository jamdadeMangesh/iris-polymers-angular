import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { MediaComponent } from './media/media.component';
import { InfrastructureAndFacilityComponent } from './infrastructure-and-facility/infrastructure-and-facility.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch : 'full'
  },
  {
     path: 'home',
     component : HomeComponent
  },
  {
     path: 'about',
     component : AboutComponent
  },
  {
    path: 'contact-us',
    component : ContactUsComponent
  },
  {
    path: 'careers',
    component : CareersComponent
  },
  {
    path: 'media',
    component : MediaComponent
  },
  {
    path: 'infrastructure-and-facilities',
    component : InfrastructureAndFacilityComponent
  }
];

export class AppRoutingModule { }