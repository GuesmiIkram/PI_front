export class ReponseSurAvisClient {
    id?: number;             // Identifiant unique du commentaire
    proprietaire_id!: number;
    commentaire!: string;        // Contenu du commentaire
    contenuAvis!: string;    // Contenu de l'avis
    note!: number;           // Note donnée (échelle de 1 à 5)
    nom!:string;  //nom du proprietaire
    proprietaire: { id: number } = { id: 0 }; // Objet prop
    client: { id: number } = { id: 0 }; // Objet client simplifié
}

