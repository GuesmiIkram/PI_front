import { Component } from '@angular/core';
import { ReponseSurAvisClient } from '../models/ReponseSurAvisClient';
import { AvisService } from '../services/AvisService';
import { ReponsesSurAvisService } from '../services/ReponsesSurAvisService';
import { ProprietaireService } from '../services/ProprietaireService';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-avis-client-et-reponse',
  templateUrl: './avis-client-et-reponse.component.html',
  styleUrls: ['./avis-client-et-reponse.component.css']
})
export class AvisClientEtReponseComponent {
  avisList: any[] = [];  // Liste des avis du propriétaire
  selectedReponses: ReponseSurAvisClient[] = [];
  selectedAvis: string | null = null;
  constructor(private avisService: AvisService, private reponsesService:ReponsesSurAvisService,private propService:ProprietaireService) {}

  ngOnInit(): void {
    // Récupérer l'ID du propriétaire depuis localStorage
    const clientId = localStorage.getItem('userId');
    if (clientId) {
      // Appeler le service pour récupérer les avis du propriétaire
      this.avisService.getAvisFaitsParClient(Number(clientId)).subscribe(
        (avis) => {
          this.avisList = avis;  // Mettre à jour la liste des avis
        },
        (error) => {
          console.error('Erreur lors de la récupération des avis', error);
        }
      );
    } else {
      console.error('CLIENT non connecté');
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

  voirReponses(contenuAvis: string, clientId: number) {
    this.selectedAvis = contenuAvis;
    this.selectedReponses = []; // Réinitialiser les réponses

    this.reponsesService.getReponsesByCommentaireEtClient(contenuAvis, clientId).subscribe(
      (data) => {
        console.log('Réponses reçues du backend:', data); // Affichage des réponses reçues

        const reponsesWithNom$ = data.map((reponse: any) => {
          return this.propService.getProprietaireById(reponse.proprietaire.id).pipe(
            map((proprietaireData) => {
              reponse.nom = proprietaireData.nom || 'Nom inconnu'; // Ajouter le nom du client
              return reponse;
            })
          );
        });

        forkJoin(reponsesWithNom$).subscribe(
          (reponses) => {
            this.selectedReponses = reponses;
          },
          (error) => {
            console.error('Erreur lors de la récupération des noms des clients', error);
          }
        );
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
