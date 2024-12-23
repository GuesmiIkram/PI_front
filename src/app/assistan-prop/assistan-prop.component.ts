import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { ReclamationProp } from '../models/ReclamationProp';
import { ReclamationService } from '../services/ReclamationService';

@Component({
  selector: 'app-assistan-prop',
  templateUrl: './assistan-prop.component.html',
  styleUrls: ['./assistan-prop.component.css']
})
export class AssistanPropComponent {

  rec: ReclamationProp = new ReclamationProp ();
  message: string = '';
  warningMessage: string = '';

  constructor(private recService: ReclamationService, private router: Router) {} // Inject Router



  onSubmit(): void {
      if (!this.rec.contenu || this.rec.contenu.trim() === '') {
          this.warningMessage = 'Veuillez saisir une réclamation avant de publier.';
          return;
      }

      this.warningMessage = '';
      const userId = localStorage.getItem('userId');
      if (!userId) {
          this.message = "Utilisateur non connecté.";
          return;
      }

      this.rec.id_proprietaire = Number(userId);
      console.log('ID du prop:', this.rec.id_proprietaire );
      console.log('Données de la réclamation de prop avant envoi:', this.rec);
      this.recService.createReclamationProp(this.rec).subscribe({
          next: (response) => {
              console.log('Réponse de l\'API:', response);
              this.message = 'Publication effectuée avec succès !';
              alert(this.message);
              this.router.navigate(['/dashboardProp']);
          },
          error: (err) => {
              console.error('Erreur lors de la publication:', err);
              this.message = 'Une erreur est survenue lors de la publication.';
              alert(this.message);
          }
      });
  }

}

