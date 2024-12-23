import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const sessionClient = sessionStorage.getItem('sessionClient') === 'true';
    const sessionAgent = sessionStorage.getItem('sessionAgent') === 'true';
    const sessionProprietaire = sessionStorage.getItem('sessionProprietaire') === 'true';

    // Check if the route is for proprietaire and session is valid
    if (state.url.startsWith('/dashboardProp') && sessionProprietaire) {
      return true;
    }
    if (state.url.startsWith('/reservations-proprietaire') && sessionProprietaire) {
      return true;
    }
    if (state.url.startsWith('/publier-annonce') && sessionProprietaire) {
      return true;
    }
    if (state.url.startsWith('/assistanceP') && sessionProprietaire) {
      return true;
    }

   
    
    

    // Check if the route is for client and session is valid
    if (state.url.startsWith('/dashboardClient') && sessionClient) {
      return true;
    }
    if (state.url.startsWith('/assistanceC') && sessionClient) {
      return true;
    }
    if (state.url.startsWith('/reservationC') && sessionClient) {
      return true;
    }
    if (state.url.startsWith('/publier-annonce-client') && sessionClient) {
      return true;
    }

    if (state.url.startsWith('/dashboardAgent') && sessionAgent) {
      return true;
    }
   
  
    
    // Redirect if not authenticated
    alert('Vous devez vous connecter pour accéder à cette page.');
    this.router.navigate(['/accueil']);
    return false;
  }
}
