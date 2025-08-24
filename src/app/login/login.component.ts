

import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Corrected styleUrls
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password)
  .then(() => this.router.navigate(['/']))
  .catch((err: { message: string; }) => this.errorMessage = err.message);
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



/*import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Corrected styleUrls
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password)
  .then(() => this.router.navigate(['/']))
  .catch((err: { message: string; }) => this.errorMessage = err.message);
  }
}


import { Component, OnInit } from '@angular/core';
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
}

  
  

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

 /* login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // <- nécessaire si tu utilises "imports" ici
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    this.errorMessage = '';
    this.loading = true;
    try {
      await this.authService.login(this.email, this.password); // renvoie une Promise
      await this.router.navigate(['/']);
    } catch (err: any) {
      this.errorMessage =
        err?.message || 'Impossible de se connecter. Réessayez.';
    } finally {
      this.loading = false;
    }
  }
}
  }
*/