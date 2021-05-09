import { Component, OnInit } from '@angular/core';
import { Formateur } from '../formateur';
import { FormateurService} from '../formateur.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-formateur-component',
  templateUrl: './formateur-component.component.html',
  styleUrls: ['./formateur-component.component.css']
})
export class FormateurComponentComponent implements OnInit {
  formateurs: Formateur[] = [];
  selectedFormateur?: Formateur;

  constructor(private formateurService : FormateurService,private messageService :MessageService) { }

  ngOnInit(): void {
    this.getFormateur();
   
  } 
  
  getFormateur(): void {
    this.formateurService.getFormateur().subscribe(formateurs => this.formateurs = formateurs);
}
delete(formateur: Formateur): void {
  this.formateurs = this.formateurs.filter(h => h !== formateur);
  this.formateurService.deleteformateur(formateur.id).subscribe();
}
}
