import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from './professor';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  getAddProfessorDetails: Professor = new Professor();

  professors : Professor[];

  //constructor injection
  constructor( private httpClient: HttpClient) { }

  //custom method to consume data from REST API
  getProfessorList(){
    this.httpClient.get(environment.apiUrl + '/api/professors')
    .toPromise()
    .then(
      (response) => {
        this.professors = response as Professor[];
      },
      (error) => {
        console.log(error);
      }
      )
  }

  insertProfessor(professor:Professor):Observable<any>{
      return this.httpClient.post(environment.apiUrl + '/api/professors',professor);
  }
}
