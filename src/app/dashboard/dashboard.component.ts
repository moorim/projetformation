import { Component, OnInit } from '@angular/core';
import { Formateur} from '../formateur';
import { FormateurService} from '../formateur.service';
import { RouterModule} from '@angular/router'
import { Observable, ObservedValueOf } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formateurs : Formateur[]=[];
  nbformateur:number =0;
  constructor(private formateurService : FormateurService) 
  {
    this.countformateurs();
    
   }

  ngOnInit(): void {
    this.getFormateurs();
  }
  getFormateurs():void{
     this.formateurService.getFormateur().subscribe(formateurs => this.formateurs = formateurs.slice(1,5));
  }
   countformateurs():void{
     this.formateurService.countFormateurs().subscribe(value =>this.nbformateur=value);
  }

}
