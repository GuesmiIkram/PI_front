import { Component, OnInit } from '@angular/core';
import { AvisService } from '../services/AvisService';
import { AuthService } from '../services/auth.service';
import { ReponsesSurAvisService } from '../services/ReponsesSurAvisService';
import { AvisProprietaireService } from '../services/AvisProprietaireService';
import {  ReponseSurAvisClient } from '../models/ReponseSurAvisClient';
import { ReponseSurAvisProp } from '../models/ReponseSurAvisProp';


@Component({
  selector: 'app-avis-sur-proprietaire',
  templateUrl: './avis-sur-proprietaire.component.html',
  styleUrls: ['./avis-sur-proprietaire.component.css']
})
export class AvisSurProprietaireComponent implements OnInit {

    repavis: ReponseSurAvisClient = new ReponseSurAvisClient();
    message: string = '';
    warningMessage: string = '';

    avisList: any[] = []; // Liste pour stocker les avis
    idProprietaire: number | null = null; // ID du propriétaire

    constructor(
      private avisService: AvisService,
      private reponsesSurAvisService: ReponsesSurAvisService,
      private AvisProprietaireService: AvisProprietaireService,
      private authService: AuthService
    ) {}

    ngOnInit(): void {
      // Récupérer l'ID du propriétaire depuis le localStorage
      const userId = localStorage.getItem('userId');
      if (userId) {
        this.idProprietaire = parseInt(userId, 10); // Conversion en nombre
        console.log('ID du propriétaire récupéré :', this.idProprietaire);
        this.loadAvis(); // Charger les avis
      } else {
        console.error('ID du propriétaire introuvable dans le localStorage');
      }
    }

    loadAvis(): void {
      if (this.idProprietaire) {
        this.avisService.getAvisByProprietaire(this.idProprietaire).subscribe({
          next: (data) => {
            this.avisList = data;
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

    // Méthode pour afficher ou masquer la zone de commentaire
    toggleCommentForm(avis: any): void {
      avis.showCommentForm = !avis.showCommentForm;
    }

    /*submitComment(avis: any): void {
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

      const newReponse = new ReponseSurAvisClient();
      newReponse.client = { id: Number(userId) }; // Affecter l'objet client
      newReponse.commentaire = avis.commentaire;

      console.log('Données du commentaire avant envoi:', newReponse);

      this.reponsesSurAvisService.submitCommentProp(newReponse).subscribe({
        next: (response) => {
          console.log('Réponse de l\'API:', response);
          this.message = 'Publication effectuée avec succès !';
          avis.successMessage = 'Votre commentaire a bien été publié.';
          avis.showCommentForm = false;  // Masquer la zone de texte

          // Effacer le message de succès après 3 secondes
          setTimeout(() => {
            avis.successMessage = '';  // Effacer le message après 3 secondes
          }, 3000);
        },
        error: (err) => {
          console.error('Erreur lors de la publication:', err);
          this.message = 'Une erreur est survenue lors de la publication.';
          alert(this.message);
        }
      });
    }*/

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

        const newReponse = new ReponseSurAvisClient();
    newReponse.proprietaire = { id: Number(userId) }; // Affecter l'objet client avec son ID
    newReponse.commentaire = avis.commentaire; // Contenu du commentaire
    //newReponse.avis_id = avis.id;              // ID de l'avis associé
    newReponse.contenuAvis = avis.contenu;     // Contenu de l'avis
     console.log('on passe a ID du client récupéré :');
    this.AvisProprietaireService.getClientIdByContenu(avis.contenu).subscribe({
      next: (clientId) => {
        console.log('ID du client récupéré :', clientId);
        //newReponse.proprietaire.id = proprietaireId; // On assigne l'id du propriétaire une fois qu'on a la réponse
        newReponse.client = { id:clientId };
        console.log('Données du commentaire avant envoi:', newReponse);
        this.reponsesSurAvisService.submitCommentProp(newReponse).subscribe({
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
        console.error('Erreur lors de la récupération de l\'id du client:', err);
        this.message = 'Une erreur est survenue lors de la récupération des informations du client.';
      }
    });
      }}
