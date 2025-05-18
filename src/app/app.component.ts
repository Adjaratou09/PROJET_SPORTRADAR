import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,AdminComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SportRadar';
}
