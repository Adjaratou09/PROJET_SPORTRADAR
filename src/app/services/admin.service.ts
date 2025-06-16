import { Injectable } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    // Écoute en temps réel de l’état de l’utilisateur connecté
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  /**
   * Connexion utilisateur
   */
  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Inscription utilisateur
   */
  register(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  /**
   * Déconnexion utilisateur
   */
  logout(): Promise<void> {
    return signOut(this.auth);
  }

  /**
   * Récupère l’utilisateur actuellement connecté
   */
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}

