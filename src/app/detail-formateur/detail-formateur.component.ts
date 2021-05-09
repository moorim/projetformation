import { Component, Input, OnInit } from '@angular/core';
import { Formateur } from '../formateur'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormateurService } from '../formateur.service'
@Component({
  selector: 'app-detail-formateur',
  templateUrl: './detail-formateur.component.html',
  styleUrls: ['./detail-formateur.component.css']
})
export class DetailFormateurComponent implements OnInit {
  formateur : Formateur = {id:0,firstname:"",familyname:"",adresse:"",email:"",domaine:""};
  ch : string ="";
  constructor(
    private route :ActivatedRoute,
    private formateurService:FormateurService,
    private location:Location
  ) { } 

  ngOnInit(): void {
    this.getFormateur();
    
  }
  getFormateur():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.formateurService.getOne(id).subscribe(formateur => this.formateur = formateur);
  }
  goBack(): void {
    this.location.back();
  }
  save():void {
    this.formateurService.updateFormateur(this.formateur).subscribe(()=>this.goBack());
  }

}
