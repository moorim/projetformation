import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';
@Component({
  selector: 'app-search-formateur',
  templateUrl: './search-formateur.component.html',
  styleUrls: ['./search-formateur.component.css']
})
export class SearchFormateurComponent implements OnInit {
  
  

  constructor(private formateurservice: FormateurService) { }
  
 

  ngOnInit(): void {
    
  }

}
