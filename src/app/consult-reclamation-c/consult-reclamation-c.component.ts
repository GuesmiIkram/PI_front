import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/ReclamationService';
import { ReclamationClientDTO } from '../models/ReclamationClientDTO';
import { ReponseReclamationClient } from '../models/ReponseReclamationClient';
import { ReponseReclamationService } from '../services/ReponseReclamationService';

@Component({
  selector: 'app-consult-reclamation-c',
  templateUrl: './consult-reclamation-c.component.html',
  styleUrls: ['./consult-reclamation-c.component.css'],
})
export class ConsultReclamationCComponent implements OnInit {
  reclamations: ReclamationClientDTO[] = [];
  showReplyInput: { [key: number]: boolean } = {};
  replyContents: { [key: number]: string } = {};
  successMessages: { [key: number]: string } = {};  // Message de succès pour chaque réclamation

  constructor(
    private reclamationService: ReclamationService,
    private reponseReclamationService: ReponseReclamationService
  ) {}

  ngOnInit(): void {
    this.reclamationService.getReclamationClients().subscribe((data: ReclamationClientDTO[]) => {
      this.reclamations = data;
    });
  }

  toggleReplyInput(index: number): void {
    this.showReplyInput[index] = !this.showReplyInput[index];
    if (!this.replyContents[index]) {
      this.replyContents[index] = '';
    }
  }

  sendReply(index: number, contenu: string): void {
    const reponseReclamation: ReponseReclamationClient = {
      contenu: contenu,
    };

    console.log("Données envoyées :", reponseReclamation);
    this.reponseReclamationService.createReponseReclamationClient(reponseReclamation).subscribe(
      (response) => {
        console.log('Réponse enregistrée avec succès :', response);
        this.successMessages[index] = 'Votre réponse a bien été envoyée !';
        this.showReplyInput[index] = false;
        
        setTimeout(() => {
          this.successMessages[index] = '';  // Effacer le message après 3 secondes
        }, 3000);
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement de la réponse :', error);
      }
    );
  }
}
