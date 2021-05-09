import { Injectable } from '@angular/core';
import { Formateur }  from './formateur'
import { FORMATEURS } from './mock-formateur'
import { Observable,of} from 'rxjs'
import { MessageService} from './message.service'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private formateurUrl = 'http://localhost:8080/formateurs';
  
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };

  constructor( 
    private messageService:MessageService,
    private http : HttpClient
    ) { }
    
  getFormateur(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.formateurUrl).pipe(
      catchError(this.handleError<Formateur[]>('getFormateurs',[]))
    )
  }
  getOne(id:Number): Observable<Formateur> {
    const url=`${this.formateurUrl}/${id}`;
    return this.http.get<Formateur>(url).pipe(
      tap(_ => this.log(`fetched formateur id =${id}`)),catchError(this.handleError<Formateur>(`getFomateur id=${id}`))
    );

  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    }
  }
  updateFormateur(formateur:Formateur):Observable<any>{
    const url=`${this.formateurUrl}/${formateur.id}`
    return this.http.put(url,formateur).pipe(tap(_ => this.log(`update formateur id =${formateur.id}`)),
      catchError(this.handleError<any>('updateFormateur')));
  }
  saveFormateur(formateur:Formateur){
    return this.http.post(this.formateurUrl,formateur);
  }
  deleteformateur(id :number):Observable<Formateur>{
    const url=`${this.formateurUrl}/${id}`;
    return this.http.delete<Formateur>(url,this.httpOption).
    pipe(tap(_ => this.log(`delete formateur id =${id}`)),
    catchError(this.handleError<Formateur>('deleteformateur')));
  }
  searchFormateurs(term: string): Observable<Formateur[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Formateur[]>(`${this.formateurUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Formateur[]>('searchHeroes', []))
    );
  }
  countFormateurs():Observable<number>{
    return this.http.get<number>("http://localhost:8080/countformateurs")
    
  }
}
