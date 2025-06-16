import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Activity } from '../services/activity.service';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule], // Permet d’utiliser les directives Angular (ngIf, ngFor) et ngModel
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Objet activité lié au formulaire
  activite: Partial<Activity> = { title: ' ' };

  // Liste des activités récupérées de Firestore
  activities: Activity[] = [];

  // Message de succès après ajout
  successMessage: string = '';
  activityService: any;

  constructor() {}

  ngOnInit(): void {
    // Récupère toutes les activités dès que le composant est chargé
    this.activityService.getActivities().subscribe((any:any) => {
      this.activities = any;
    });
  }

  // Fonction appelée lors de la soumission du formulaire
  onSubmit(): void {
    if (this.activite.title) {
      this.activityService.addActivity(this.activite as Activity).then(() => {
        this.successMessage = 'Activité ajoutée avec succès !';
        this.activite.title = ''; // Réinitialise le champ
      });
    }
  }

  // Fonction de suppression avec confirmation
  deleteActivity(id: string | undefined): void {
    if (id && confirm('Voulez-vous vraiment supprimer cette activité ?')) {
      this.activityService.deleteActivity(id).then(() => {
        console.log('Activité supprimée');
      });
    }
  }
}
