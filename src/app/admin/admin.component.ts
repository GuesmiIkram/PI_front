import { Component } from '@angular/core';
import { AdminService } from '../services/AdminService';
import { Agent } from '../models/Agent';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  agent: Agent = { username: '', password: '' ,email:''};
  message: string = '';

  constructor(private adminService: AdminService) { }

  ajouterAgent() {
    console.log('agent envoyé :', this.agent.username,this.agent.password,this.agent.email);
    this.adminService.ajouterAgent(this.agent).subscribe(
      response => {
        this.message = 'Agent ajouté avec succès!';
        console.log('agent envoyé :', this.agent.username,this.agent.password);

      },
      error => {
        this.message = 'Erreur lors de l\'ajout de l\'agent';
      }
    );
  }

}
