import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service'; // chemin à adapter selon ton projet
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  auth: any;

  constructor(private authService: AuthService, private router: Router) {}

  // login.component.ts
async login() {
  try {
    await this.auth.login(this.email, this.password);
    this.router.navigate(['/']); // navigation dans le composant, pas dans le service
  } catch (err: any) {
    this.errorMessage = err?.message ?? 'Erreur de connexion';
  }
}

}

/*import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Corrected styleUrls
})
export class LoginComponent  {
login() {
throw new Error('Method not implemented.');
}
  user: any;
  email?: string;
  password?: string;
  errorMessage?: string;
  successMessage?: string;

  constructor() {}
 

  
  

  // resetPassword() {
  //   if (!this.email) {
  //     alert('Veuillez entrer votre email.');
  //     return;
  //   }
  //   this.authService.resetPasswordInit(this.email)
  //     .then(() => alert('Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email.'))
  //     .catch(e => alert('Une erreur s\'est produite : ' + e.message));
  // }
//}
}

} */