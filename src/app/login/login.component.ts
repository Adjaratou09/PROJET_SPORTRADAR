
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
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

  constructor(private router: Router) {}
 

  
  

  // resetPassword() {
  //   if (!this.email) {
  //     alert('Veuillez entrer votre email.');
  //     return;
  //   }
  //   this.authService.resetPasswordInit(this.email)
  //     .then(() => alert('Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email.'))
  //     .catch(e => alert('Une erreur s\'est produite : ' + e.message));
  // }
}
