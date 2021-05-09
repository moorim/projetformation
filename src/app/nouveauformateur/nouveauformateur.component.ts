import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { error } from 'selenium-webdriver';
import { Formateur } from '../formateur';
import { FormateurComponentComponent } from '../formateur-component/formateur-component.component';
import {FormateurService} from '../formateur.service'
@Component({
  selector: 'app-nouveauformateur',
  templateUrl: './nouveauformateur.component.html',
  styleUrls: ['./nouveauformateur.component.css']
})
export class NouveauformateurComponent implements OnInit {
  formateur:Formateur = {"id":0,"firstname":"","familyname":"","email":"","adresse":"","domaine":""};
  constructor(private formateurService : FormateurService) { }

  ngOnInit(): void {
  }
  saveFormateur(){
    this.formateurService.saveFormateur(this.formateur)
    .subscribe(data =>{console.log(data)},err =>{console.log(err);} )
  }
  

}
