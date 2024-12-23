import { Component } from '@angular/core';
import { ReponseSurAvisProp } from '../models/ReponseSurAvisProp';
import { AvisService } from '../services/AvisService';
import {ReponsesSurAvisService } from '../services/ReponsesSurAvisService';
import {ClientService } from '../services/ClientService';

@Component({
  selector: 'app-avis-prop-et-reponse',
  templateUrl: './avis-prop-et-reponse.component.html',
  styleUrls: ['./avis-prop-et-reponse.component.css']
})
export class AvisPropEtReponseComponent {
  avisList: any[] = [];  // Liste des avis du propriétaire
  selectedReponses: ReponseSurAvisProp[] = [];
  selectedAvis: string | null = null;
  constructor(private avisService: AvisService, private reponsesService:ReponsesSurAvisService,private clientService:ClientService) {}

  ngOnInit(): void {
    // Récupérer l'ID du propriétaire depuis localStorage
    const proprietaireId = localStorage.getItem('userId');
    if (proprietaireId) {
      // Appeler le service pour récupérer les avis du propriétaire
      this.avisService.getAvisFaitsParProprietaire(Number(proprietaireId)).subscribe(
        (avis) => {
          this.avisList = avis;  // Mettre à jour la liste des avis
        },
        (error) => {
          console.error('Erreur lors de la récupération des avis', error);
        }
      );
    } else {
      console.error('Propriétaire non connecté');
    }
  }
  getStars(note: number) {
    const fullStars = Math.floor(note); // Nombre d'étoiles pleines
    const halfStar = note % 1 !== 0; // Vérifie s'il y a une étoile moitié pleine
    const stars = [];

    // Ajouter les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(1); // 1 pour une étoile pleine
    }

    // Ajouter une étoile moitié pleine si nécessaire
    if (halfStar) {
      stars.push(0.5); // 0.5 pour une étoile moitié pleine
    }

    // Compléter avec des étoiles vides (jusqu'à 5)
    while (stars.length < 5) {
      stars.push(0); // 0 pour une étoile vide
    }

    return stars;
  }
  voirReponses(contenuAvis: string, proprietaireId: number) {
    this.selectedAvis = contenuAvis;
    this.selectedReponses = []; // Réinitialiser les réponses

    this.reponsesService.getReponsesByCommentaireEtProprietaire(contenuAvis, proprietaireId).subscribe(
      (data) => {
        // Parcourir les réponses et récupérer les noms des clients
        data.forEach((reponse: any) => {
          this.clientService.getClientById(reponse.client.id).subscribe(
            (clientData) => {
              reponse.nom = clientData.name; // Ajouter le nom du client
            },
            (error) => {
              console.error(`Erreur lors de la récupération des infos du client ${reponse.client.id}`, error);
            }
          );
          this.selectedReponses.push(reponse);
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des réponses :', error);
      }
    );
  }
  fermerReponses() {
    this.selectedAvis = null;
    this.selectedReponses = [];
  }

  }
