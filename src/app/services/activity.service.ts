import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  deleteDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// 🔹 Interface pour une activité
export interface Activity {
  id?: string;
  title: string;
  description?: string;
  date?: string;
  location?: string;
  price?: number;
  type?: string;
}

// 🔹 Service Angular pour gérer les activités
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private readonly collectionPath = 'activities';

  constructor(private firestore: Firestore) {}

  // 🔹 Ajouter une activité
  addActivity(activity: Activity): Observable<void> {
    const activitiesRef = collection(this.firestore, this.collectionPath);
    return new Observable((observer) => {
      addDoc(activitiesRef, activity)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((err) => {
          console.error('Erreur lors de l’ajout :', err);
          observer.error(err);
        });
    });
  }

  // 🔹 Récupérer toutes les activités
  getActivities(): Observable<Activity[]> {
    const activitiesRef = collection(this.firestore, this.collectionPath);
    return collectionData(activitiesRef, { idField: 'id' }) as Observable<Activity[]>;
  }

  // 🔹 Mettre à jour une activité
  updateActivity(id: string, data: Partial<Activity>): Promise<void> {
    const docRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return updateDoc(docRef, data).catch((err) => {
      console.error('Erreur lors de la mise à jour :', err);
    });
  }

  // 🔹 Supprimer une activité
  deleteActivity(id: string): Promise<void> {
    const docRef = doc(this.firestore, `${this.collectionPath}/${id}`);
    return deleteDoc(docRef).catch((err) => {
      console.error('Erreur lors de la suppression :', err);
    });
  }
}
