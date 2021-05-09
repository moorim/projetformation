import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateurComponentComponent} from './formateur-component/formateur-component.component'
import { DashboardComponent} from './dashboard/dashboard.component';
import { DetailFormateurComponent} from './detail-formateur/detail-formateur.component';
import { NouveauformateurComponent } from './nouveauformateur/nouveauformateur.component';
import { EditFormateurComponent} from './edit-formateur/edit-formateur.component'
import { from } from 'rxjs';
const routes: Routes = [
  {path : 'formateurs' , component:FormateurComponentComponent},
  {path : 'dashboard' , component:DashboardComponent},
  {path : 'detailformateur/:id', component:DetailFormateurComponent},
  {path : 'addformateur',component:NouveauformateurComponent},
  {path : 'editformateur/:id',component:EditFormateurComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
