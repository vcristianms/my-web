import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

export const PagesRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about-me', component: AboutMeComponent, title: 'About me' },
  { path: 'projects', component: ProjectComponent, title: 'Projects' },
];
