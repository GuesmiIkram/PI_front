import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublierAnnonceComponent } from './publier-annonce/publier-annonce.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsulterOffresComponent } from './consulter-offres/consulter-offres.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConsulterVoitureComponent } from './consulter-voiture/consulter-voiture.component';
import { CreateProprietaireComponent } from './create-proprietaire/create-proprietaire.component';
import { PublierAnnonceClientComponent } from './publier-annonce-client/publier-annonce-client.component';
import { ListePubComponent } from './liste-pub/liste-pub.component';
import { LoginComponent } from './login/login.component';
import { FacebookLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { LoginClientComponent } from './login-client/login-client.component';
import { ClientReservationsComponent } from './client-reservations/client-reservations.component';
import { ResponsePageComponent } from './response-page/response-page.component';
import { ProprietaireReservationsComponent } from './proprietaire-reservations/proprietaire-reservations.component';
import { ConsulterResponseComponent } from './consulter-response/consulter-response.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardPropComponent } from './dashboard-prop/dashboard-prop.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AvisSurProprietaireComponent } from './avis-sur-proprietaire/avis-sur-proprietaire.component';
import { AvisSurClientComponent } from './avis-sur-client/avis-sur-client.component';
import { AssistanClientComponent } from './assistan-client/assistan-client.component';
import { AssistanPropComponent } from './assistan-prop/assistan-prop.component';
import { DashbordAgentComponent } from './dashbord-agent/dashbord-agent.component';
import { ConsultReclamationCComponent } from './consult-reclamation-c/consult-reclamation-c.component';
import { ConsultReclamationPComponent } from './consult-reclamation-p/consult-reclamation-p.component';
import { AvisPropEtReponseComponent } from './avis-prop-et-reponse/avis-prop-et-reponse.component';
import { AvisClientEtReponseComponent } from './avis-client-et-reponse/avis-client-et-reponse.component';
import { LoginAgentComponent } from './login-agent/login-agent.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    PublierAnnonceComponent,
    ConsulterOffresComponent,
    AccueilComponent,
    ConsulterVoitureComponent,
    CreateProprietaireComponent,
    PublierAnnonceClientComponent,
    ListePubComponent,
    LoginComponent,
    LoginClientComponent,
    ClientReservationsComponent,
    ResponsePageComponent,
    ProprietaireReservationsComponent,
    ConsulterResponseComponent,
    DashboardClientComponent,
    DashboardPropComponent,
    AvisSurProprietaireComponent,
    AvisSurClientComponent,
    AssistanClientComponent,
    AssistanPropComponent,
    DashbordAgentComponent,
    ConsultReclamationCComponent,
    ConsultReclamationPComponent,
    AvisPropEtReponseComponent,
    AvisClientEtReponseComponent,
    LoginAgentComponent,
    AdminComponent,
   
   
 
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleChartsModule
   

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
         
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('851462143702467')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
