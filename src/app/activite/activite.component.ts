import { Component, OnInit, AfterViewInit, OnDestroy, viewChild, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiviteService } from '../services/activite.service';
import { Observable } from 'rxjs';
import * as L from 'leaflet';
import { NgIf, NgFor } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
declare var bootstrap:any;


@Component({
  selector: 'app-activite',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("exampleModal") modalElement!:ElementRef;

  activites$!: Observable<any[]>;
  private map: L.Map | null = null;

  constructor(
    private activiteService: ActiviteService,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {
    this.activites$ = this.activiteService.getActivites();
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{ 
     const modal=new bootstrap.Modal(this.modalElement.nativeElement);
     modal.show();

    }, 1000)
    

    if (!this.map) {
      this.map = L.map('mapid').setView([48.8566, 2.3522], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.activiteService.getActivites().subscribe(acts => {
        acts.forEach(act => {
          if (act.lat && act.lng) {
            L.marker([act.lat, act.lng])
              .addTo(this.map!)
              .bindPopup(`<b>${act.Titre}</b><br>${act.Adresse}`);
          }
        });
      });
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }

  ajouterActivitesManuelles() {
    const activites = [
      {
        Titre: 'Barre Pilates',
      Adresse: 'Les figuiers du Pilates, Berriguy-sur-Orge',
      lat: 48.833,
      lng: 2.359,
      Image: 'assets/ImagesActivite/img8.png',
      Distance: '2 KM',
      Heure: '12h00',
      Temp: '20°C'
    },
    {
      Titre: 'Cardio doux',
      Adresse: 'Salle de fitness Mumintraining, Rue de Rivoli, Paris',
      lat: 48.857,
      lng: 2.352,
      Image: 'assets/ImagesActivite/img9.png',
      Distance: '3 KM',
      Heure: '10h30',
      Temp: '22°C'
    },
    {
      Titre: '5 km en poussettes',
      Adresse: 'Mairie de Paris 13, Parc, Paris',
      lat: 48.829,
      lng: 2.355,
      Image: 'assets/ImagesActivite/img10.png',
      Distance: '1.5 KM',
      Heure: '09h00',
      Temp: '18°C'
    },
    {
      Titre: 'Massothérapie',
      Adresse: 'Institut beautél.L, L’Haÿ-les-Roses',
      lat: 48.765,
      lng: 2.331,
      Image: 'assets/ImagesActivite/img11.png',
      Distance: '5.3 KM',
      Heure: '',
      Temp: ''
    },
    {
      Titre: 'Rééducation du périnée',
      Adresse: 'En direct',
      lat: 48.8566,
      lng: 2.3522,
      Image: 'assets/ImagesActivite/img12.png',
      Distance: '0 KM',
      Heure: '',
      Temp: ''
    }
      
    ];

    const collectionRef = collection(this.firestore, 'activites');

    activites.forEach((act) => {
      addDoc(collectionRef, act)
        .then(() => console.log(`✅ Ajouté : ${act.Titre}`))
        .catch((err) => console.error('❌ Erreur :', err));
    });
  }
}
