export default class User{
    id: string;
    nom: string;
    prenom: string;
    email: string;

    constructor(id: string, nom: string, prenom: string, email: string){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    };
}