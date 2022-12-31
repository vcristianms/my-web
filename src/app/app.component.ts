import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './common/layouts/footer/footer.component';
import { HeaderComponent } from './common/layouts/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
