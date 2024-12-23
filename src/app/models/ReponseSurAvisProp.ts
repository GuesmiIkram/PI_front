export class ReponseSurAvisProp {

    id?: number;             // Identifiant unique du commentaire
    commentaire!: string;    // Contenu du commentaire
    contenuAvis!: string;    // Contenu de l'avis
    //avis_id!: number;        // Identifiant de l'avis
    proprietaire: { id: number } = { id: 0 };
    client: { id: number } = { id: 0 }; // Objet client simplifié
nom!:string; //nom du client
}
