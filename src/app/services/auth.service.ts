/*import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: any;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // Connexion utilisateur
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Déconnexion
  logout() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  // Enregistrement de données utilisateur
  saveUserData(uid: string, data: any) {
    return this.firestore.collection('users').doc(uid).set(data);
  }
 }*/

  // src/app/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {
  Auth, User, authState,
  signInWithEmailAndPassword, signOut
} from '@angular/fire/auth';

import {
  Firestore, doc, setDoc
} from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  // Flux utilisateur (remplace afAuth.authState)
  user$: Observable<User | null> = authState(this.auth);

  // Connexion
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Déconnexion
  async logout() {
    await signOut(this.auth);
    await this.router.navigate(['/login']);
  }

  // Enregistrement de données utilisateur (equiv. .collection('users').doc(uid).set)
  saveUserData(uid: string, data: any) {
    const ref = doc(this.firestore, `users/${uid}`);
    return setDoc(ref, data, { merge: true });
  }
}
