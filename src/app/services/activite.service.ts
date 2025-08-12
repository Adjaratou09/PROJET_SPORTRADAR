import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  private collectionName = 'activites';

  constructor(private firestore: Firestore) {}

  //  Ajouter une activité
  addActivite(data: any): Promise<any> {
    const collRef = collection(this.firestore, this.collectionName);
    return addDoc(collRef, data);
  }

  //  Récupérer toutes les activités
  getActivites(): Observable<any[]> {
    const collRef = collection(this.firestore, this.collectionName);
    return collectionData(collRef, { idField: 'id' });
  }
}
