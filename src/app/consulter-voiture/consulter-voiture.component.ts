import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from '../models/Voiture';
import { VoitureService } from '../services/VoitureService';
import { AvisService } from '../services/AvisService';


@Component({
  selector: 'app-consulter-voiture',
  templateUrl: './consulter-voiture.component.html',
  styleUrls: ['./consulter-voiture.component.css']
})
export class ConsulterVoitureComponent implements OnInit {
  voiture?: Voiture; // Define a variable to hold the car details
  message: string = '';
  voitureImageUrl: string | undefined; 
  avisProprietaire: any[] = []; // Pour stocker les avis récupérés
  afficherAvis: boolean = false; // Indique si les avis doivent être affichés
  avisList: any[] = []; // Liste pour stocker les avis
  avisModalVisibles: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private avisService: AvisService,
    private voitureService: VoitureService
  ) {}


  
  ngOnInit(): void {
    this.getVoitureDetails();
  }

  // Method to fetch car details
  getVoitureDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the ID from the route
    this.voitureService.getVoitureById(id).subscribe({
      next: (data) => {
        this.voiture = data; 
        this.loadVoitureImage(id); // Assign the car data to the variable
      },
      error: (err) => {
        this.message = 'Une erreur est survenue lors de la récupération des détails de la voiture.';
        console.error(err);
      }
    });
  }
  
  loadVoitureImage(id: number): void {
    this.voitureService.getImageVoitureById(id).subscribe({
      next: (blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.voitureImageUrl = reader.result as string;
        };
        reader.readAsDataURL(blob);
      },
      error: (err) => {
        console.error('Error loading car image:', err);
      }
    });
  }
  getAvisProprietaire() {
    if (this.voiture && this.voiture.proprietaireId) {
      this.avisService.getAvisByProprietaire(this.voiture.proprietaireId).subscribe({
        next: (data) => {
          this.avisList = data;
          this.afficherAvis = true; // Affiche les avis dans l'interface utilisateur
          console.log('Avis récupérés :', data);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des avis', err);
        }
      });
    } else {
      console.error('Impossible de charger les avis : ID du propriétaire invalide');
    }
  }
  

getStarRating(note: number): any[] {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push({ filled: i <= note });
  }
  return stars;
}

fermerAvis() {
  this.afficherAvis = false;
}
closeAvisModals(): void {
  console.log('Fermeture des avis');
  this.afficherAvis = false;
}


}
