export class AvisDto{
  id?: number;
  contenu?: string;          // Le contenu de l'avis
  note?: number;             // La note attribuée (1 à 5)
  dateAvis?: Date;           // La date à laquelle l'avis a été écrit
  nomClient?: string;        // Le nom du client qui a laissé l'avis
  profilePicture?: string; 
  }
  