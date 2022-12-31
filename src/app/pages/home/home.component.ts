import { Component } from '@angular/core';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  skills = [
    {
      logo: 'assets/svgs/angular-icon.svg',
      name: 'Angular',
    },
    {
      logo: 'assets/svgs/typescript-icon.svg',
      name: 'Typescript',
    },
    {
      logo: 'assets/svgs/tailwindcss-icon.svg',
      name: 'Tailwind CSS',
    },
    {
      logo: 'assets/svgs/javascript.svg',
      name: 'Javascript',
    },
    {
      logo: 'assets/svgs/html-5.svg',
      name: 'HTML',
    },
    {
      logo: 'assets/svgs/nestjs.svg',
      name: 'NestJs',
    },
    {
      logo: 'assets/svgs/typeorm.svg',
      name: 'TypeORM',
    },
    {
      logo: 'assets/svgs/nodejs-icon.svg',
      name: 'Node.js',
    },
    {
      logo: 'assets/svgs/graphql.svg',
      name: 'GraphQl',
    },
    {
      logo: 'assets/svgs/mysql-icon.svg',
      name: 'MySQL',
    },
    {
      logo: 'assets/svgs/postgresql.svg',
      name: 'PostgreSQL',
    },
  ]
}
