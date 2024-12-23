import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublierAnnonceComponent } from './publier-annonce/publier-annonce.component';
import { ConsulterOffresComponent } from './consulter-offres/consulter-offres.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConsulterVoitureComponent } from './consulter-voiture/consulter-voiture.component';
import { CreateProprietaireComponent } from './create-proprietaire/create-proprietaire.component';
import { PublierAnnonceClientComponent } from './publier-annonce-client/publier-annonce-client.component';
import { ListePubComponent } from './liste-pub/liste-pub.component';
import { LoginComponent } from './login/login.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ClientReservationsComponent } from './client-reservations/client-reservations.component';
import { ResponsePageComponent } from './response-page/response-page.component';
import { ProprietaireReservationsComponent } from './proprietaire-reservations/proprietaire-reservations.component';
import { ConsulterResponseComponent } from './consulter-response/consulter-response.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardPropComponent } from './dashboard-prop/dashboard-prop.component';
import { AvisSurProprietaireComponent } from './avis-sur-proprietaire/avis-sur-proprietaire.component';
import { AvisSurClientComponent } from './avis-sur-client/avis-sur-client.component';
import { AssistanClientComponent } from './assistan-client/assistan-client.component';
import { AssistanPropComponent } from './assistan-prop/assistan-prop.component';
import { DashbordAgentComponent } from './dashbord-agent/dashbord-agent.component';

import { ConsultReclamationPComponent } from './consult-reclamation-p/consult-reclamation-p.component';
import { ConsultReclamationCComponent } from './consult-reclamation-c/consult-reclamation-c.component';
import { AvisPropEtReponseComponent } from './avis-prop-et-reponse/avis-prop-et-reponse.component';
import { AvisClientEtReponseComponent } from './avis-client-et-reponse/avis-client-et-reponse.component';
import { AdminComponent } from './admin/admin.component';

import { LoginAgentComponent } from './login-agent/login-agent.component';
import { AuthGuard } from './auth-guard.guard';
const routes: Routes = [
  { path: 'publier-annonce', component: PublierAnnonceComponent ,canActivate: [AuthGuard]},
  { path: 'offres', component: ConsulterOffresComponent },
  { path: 'accueil', component: AccueilComponent},
  { path: 'voiture/:id', component: ConsulterVoitureComponent },
  { path: 'registerP', component: CreateProprietaireComponent},
  { path: 'publier-annonce-client', component: PublierAnnonceClientComponent,canActivate: [AuthGuard] },
  { path: 'liste-pub', component: ListePubComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginC', component: LoginClientComponent },
  { path: 'reservationC', component: ClientReservationsComponent ,canActivate: [AuthGuard]},
  { path: 'publication/:id', component: ResponsePageComponent },
  { path: 'reservations-proprietaire', component: ProprietaireReservationsComponent,canActivate: [AuthGuard] },
  { path: 'response/:idClient', component: ConsulterResponseComponent },
  {path: 'dashboardClient', component: DashboardClientComponent,canActivate: [AuthGuard]},
  {path: 'dashboardProp', component:DashboardPropComponent, canActivate: [AuthGuard]},
  {path: 'avisP', component:AvisSurProprietaireComponent },
  {path: 'avisC', component:AvisSurClientComponent },
  {path: 'assistanceC', component:AssistanClientComponent ,canActivate: [AuthGuard]},
  {path: 'assistanceP', component:AssistanPropComponent,canActivate: [AuthGuard] },
  {path: 'dashboardAgent', component: DashbordAgentComponent,canActivate: [AuthGuard]},
  {path: 'ConsulterRecP', component: ConsultReclamationPComponent},

  {path: 'ConsulterRecC', component: ConsultReclamationCComponent},
  {path: 'AvisEtRepProp' , component: AvisPropEtReponseComponent},
  {path: 'AvisEtRepClient' , component: AvisClientEtReponseComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'loginA', component: LoginAgentComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
