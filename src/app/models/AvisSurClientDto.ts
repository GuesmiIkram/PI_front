export interface AvisSurClientDto {
    id: number;             // Correspond à l'id de l'avis
    contenu: string;        // Le contenu de l'avis
    note: number;           // La note donnée dans l'avis
    dateAvis: string;       // La date de l'avis (au format ISO 8601)
    nomProp: string;        // Le nom du propriétaire
    tel_propr: string;      // Le numéro de téléphone du propriétaire
    email_prop: string;     // L'email du propriétaire
}