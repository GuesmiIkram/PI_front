import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { ReclamationClient } from '../models/ReclamationClient';
import { ReclamationService } from '../services/ReclamationService';

@Component({
  selector: 'app-assistan-client',
  templateUrl: './assistan-client.component.html',
  styleUrls: ['./assistan-client.component.css']
})
export class AssistanClientComponent {
  rec: ReclamationClient = new ReclamationClient();
  message: string = '';
  warningMessage: string = '';

  constructor(private recService: ReclamationService, private router: Router) {}

  onSubmit(): void {
    if (!this.rec.contenu || this.rec.contenu.trim() === '') {
      this.warningMessage = 'Veuillez saisir une réclamation avant de publier.';
      return;
    }

    this.warningMessage = '';
    const userId = localStorage.getItem('userId');
    console.log("id client:",userId);
    console.log("contenu rec :",this.rec.contenu);
    if (!userId) {
      this.message = 'Utilisateur non connecté.';
      return;
    }

    this.rec.idClient = Number(userId);
    console.log("rec a cree: le contenu est ",this.rec.contenu,"lid client",this.rec.idClient,"id rec",this.rec.idRec);
    this.recService.createReclamationClient(this.rec).subscribe({
      next: (response) => {
        this.message = 'Publication effectuée avec succès !';
        alert(this.message);
        this.router.navigate(['/dashboardClient']);
      },
      error: (err) => {
        console.error('Erreur lors de la publication:', err);
        this.message = 'Une erreur est survenue lors de la publication.';
        alert(this.message);
      }
    });
  }
}
