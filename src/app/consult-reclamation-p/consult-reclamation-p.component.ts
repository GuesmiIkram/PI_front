import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/ReclamationService';
import { ReclamationPropDTO } from '../models/ReclamationPropDTO';
import { ReponseReclamationProp } from '../models/ReponseReclamationProp';
import { ReponseReclamationService} from '../services/ReponseReclamationService';


@Component({
  selector: 'app-consult-reclamation-p',
  templateUrl: './consult-reclamation-p.component.html',
  styleUrls: ['./consult-reclamation-p.component.css']
})
export class ConsultReclamationPComponent implements OnInit {
  reclamations: ReclamationPropDTO[] = [];
  showReplyInput: { [key: number]: boolean } = {}; // Gérer l'affichage par réclamation
  replyContents: { [key: number]: string } = {}; // Pour stocker les réponses temporaires

  constructor(
    private reclamationService: ReclamationService,
    private reponseReclamationService: ReponseReclamationService
  ) {}

  ngOnInit(): void {
    this.reclamationService.getReclamationProps().subscribe(data => {
      this.reclamations = data;
    });
  }

  toggleReplyInput(index: number): void {
    this.showReplyInput[index] = !this.showReplyInput[index];
    if (!this.replyContents[index]) {
      this.replyContents[index] = ''; // Initialisez la réponse si elle n'existe pas
    }
  }

  sendReply(index: number, contenu: string): void {
    const reponseReclamation: ReponseReclamationProp = {
      contenu: contenu,
    };

    this.reponseReclamationService.createReponseReclamation(reponseReclamation).subscribe(
      (response) => {
        console.log('Réponse enregistrée avec succès :', response);
        this.showReplyInput[index] = false;
        this.replyContents[index] = ''; // Réinitialisez la réponse après l'envoi
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement de la réponse :', error);
      }
    );
  }

  openEmail(email?: string): void {
    if (email) {
      window.location.href = `mailto:${email}`;
    } else {
      console.error('Email non défini');
    }
  }
}
