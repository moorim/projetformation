import { logging } from "selenium-webdriver";

export interface Formateur {
    id:number;
    firstname: string;
    familyname: string;
    adresse: string;
    email: string
    domaine: string;
}
