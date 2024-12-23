import { Component } from '@angular/core';
import { Agent } from '../models/Agent';
import { LoginService } from '../services/loginService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-agent',
  templateUrl: './login-agent.component.html',
  styleUrls: ['./login-agent.component.css']
})
export class LoginAgentComponent {
  agent: Agent = { username: '', password: '', email: '' };

  message: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginService.login(this.agent).subscribe(
      response => {
        this.message = 'Connexion réussie!';
        sessionStorage.setItem('sessionAgent','true'); 
        this.router.navigate(['/dashboardAgent']);
      },
      error => {
        this.message = 'Erreur de connexion';
      }
    );
  }

}
