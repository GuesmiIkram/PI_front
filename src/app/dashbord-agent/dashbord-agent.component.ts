import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-agent',
  templateUrl: './dashbord-agent.component.html',
  styleUrls: ['./dashbord-agent.component.css']
})
export class DashbordAgentComponent {
  constructor( private router: Router ) {}
  signOut(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/accueil']);
   
  }

}
