// auth.service.ts
import { Injectable } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMessage: string = '';

  constructor(
    private socialAuthService: SocialAuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  // Connexion via Facebook
  signInWithFacebook(): Promise<SocialUser> {
    return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then(user => {
        // Stocker les données utilisateur dans sessionStorage
        sessionStorage.setItem('sessionClient', 'true');
        console.log('Facebook login successful, sessionClient set to true.');
        this.router.navigate(['/dashboardClient']);
        return user; // Retourner les données utilisateur pour une utilisation ultérieure
      })
      .catch(error => {
        console.error('Error during Facebook login:', error);
        throw error; // Relancer l'erreur pour une gestion en aval
      });
  }
  

  // Déconnexion
  signOut(): void {
    this.socialAuthService.signOut().then(() => {
      localStorage.removeItem('facebookUserId');
      console.log('User logged out from Facebook');
      this.router.navigate(['/accueil']);
    }).catch(error => {
      console.error('Failed to log out from Facebook:', error);
      this.errorMessage = 'Erreur lors de la déconnexion de Facebook.';
    });
  }

  // Enregistrement ou connexion du client via Facebook
  registerClient(clientData: any): Observable<any> {
    return this.http.post(environment.backendUrl+'/api/clients/login', clientData);
  }

  // Connexion par téléphone et mot de passe
  loginWithPhone(loginData: any): Observable<any> {
    return this.http.post(environment.backendUrl+'/api/proprietaires/login', loginData);
  }
}
