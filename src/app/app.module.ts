import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormateurComponentComponent } from './formateur-component/formateur-component.component';
import { DetailFormateurComponent } from './detail-formateur/detail-formateur.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NouveauformateurComponent } from './nouveauformateur/nouveauformateur.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { SearchFormateurComponent } from './search-formateur/search-formateur.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    FormateurComponentComponent,
    DetailFormateurComponent,
    MessageComponent,
    DashboardComponent,
    NouveauformateurComponent,
    EditFormateurComponent,
    SearchFormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
