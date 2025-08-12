import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule, CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})

export class InscriptionComponent {
  step = 1;
account = {
    type: ''
  };
  formData: any = {
    entreprise: '',
    prenom: '',
    nom: '',
    email: '',
    password: '',
    confirmPassword: '',
    accepted: false,
    etat: '',
    sports: [],
    frequences: '',
    objectifs: [],
  };

  sports = ['Cardio', 'Renfo', 'Assouplissement', 'Plein air', 'Salle', 'Eau', 'En direct'];
  frequences = ['Quotidienne', 'Hebdomadaire', 'Mensuelle', 'Occasionnelle'];
  objectifs = [
    'Faire d\'autres activités', 'Améliorer ma santé', 'Rééducation du périnée',
    'Perdre du poids', 'Préparation à l\'accouchement', 'Se tonifier',
    'Rester en forme', 'Gagner en souplesse'
  ];

  nextStep() {
    if (this.step < 3) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  toggleSelect(field: 'sports' | 'objectifs', value: string) {
    const index = this.formData[field].indexOf(value);
    if (index > -1) {
      this.formData[field].splice(index, 1);
    } else {
      this.formData[field].push(value);
    }
  }

  submitForm() {
    // Appel API ou Firebase ici
    console.log('Formulaire envoyé ✅', this.formData);
    alert('Inscription réussie !');
  }
}
