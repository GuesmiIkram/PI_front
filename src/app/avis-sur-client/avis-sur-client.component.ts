import { Component, OnInit } from '@angular/core';
import { AvisService } from '../services/AvisService';
import { AuthService } from '../services/auth.service';
import { ReponsesSurAvisService } from '../services/ReponsesSurAvisService';
import { ReponseSurAvisProp } from '../models/ReponseSurAvisProp';
import {AvisClientService  } from '../services/AvisClientService';
import { ReponseSurAvisClient } from '../models/ReponseSurAvisClient';

@Component({
  selector: 'app-avis-sur-client',
  templateUrl: './avis-sur-client.component.html',
  styleUrls: ['./avis-sur-client.component.css']
})
export class AvisSurClientComponent implements OnInit {
  repavis: ReponseSurAvisProp = new ReponseSurAvisProp();
  message: string = '';
  warningMessage: string = '';
  avisList: any[] = []; // Liste pour stocker les avis
  idClient: number | null = null; // ID du propriétaire

  constructor(
    private avisService: AvisService,
    private AvisClientService :AvisClientService ,
    private reponsesSurAvisService: ReponsesSurAvisService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du propriétaire depuis le localStorage
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.idClient = parseInt(userId, 10); // Conversion en nombre
      console.log('ID du client récupéré :', this.idClient);
      this.loadAvis(); // Charger les avis
    } else {
      console.error('ID du client introuvable dans le localStorage');
    }
  }

  loadAvis(): void {
    if (this.idClient) {

      this.avisService.getAvisByClient(this.idClient).subscribe({
        next: (data) => {
          this.avisList = data;
          console.log('Avis récupérés :', data);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des avis', err);
        }
      });
    } else {
      console.error('Impossible de charger les avis : ID du client invalide');
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
  // Méthode pour afficher ou masquer la zone de commentaire
  toggleCommentForm(avis: any): void {
    avis.showCommentForm = !avis.showCommentForm;

  }

  submitComment(avis: any): void {
    if (!avis.commentaire || avis.commentaire.trim() === '') {
        this.warningMessage = 'Veuillez saisir un commentaire avant de publier.';
        return;
    }

    this.warningMessage = '';
    const userId = localStorage.getItem('userId');
    if (!userId) {
        this.message = "Utilisateur non connecté.";
        return;
    }

    const newReponse = new ReponseSurAvisProp();
newReponse.client = { id: Number(userId) }; // Affecter l'objet client avec son ID
newReponse.commentaire = avis.commentaire; // Contenu du commentaire
//newReponse.avis_id = avis.id;              // ID de l'avis associé
newReponse.contenuAvis = avis.contenu;     // Contenu de l'avis
 console.log('on passe a ID du propriétaire récupéré :');
this.AvisClientService.gettProprietaireIdByContenu(avis.contenu).subscribe({
  next: (proprietaireId) => {
    console.log('ID du propriétaire récupéré :', proprietaireId);
    //newReponse.proprietaire.id = proprietaireId; // On assigne l'id du propriétaire une fois qu'on a la réponse
    newReponse.proprietaire = { id:proprietaireId };
    console.log('Données du commentaire avant envoi:', newReponse);

    this.reponsesSurAvisService.submitComment(newReponse).subscribe({
        next: (response) => {
            console.log('Réponse de l\'API:', response);
            this.message = ''; // Réinitialiser le message d'erreur
            avis.successMessage = 'Votre commentaire a bien été publié !';
            avis.showCommentForm = false; // Fermer la zone de texte après soumission
        },
        error: (err) => {
            console.error('Erreur lors de la publication:', err);
            this.message = 'Une erreur est survenue lors de la publication.';
        }
    });
  },
  error: (err) => {
    console.error('Erreur lors de la récupération de l\'id du propriétaire:', err);
    this.message = 'Une erreur est survenue lors de la récupération des informations du propriétaire.';
  }
});
  }}
