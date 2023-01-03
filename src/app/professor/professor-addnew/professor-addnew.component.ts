import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProfessorService } from 'src/app/shared/professor.service';

@Component({
  selector: 'app-professor-addnew',
  templateUrl: './professor-addnew.component.html',
  styleUrls: ['./professor-addnew.component.scss']
})
export class ProfessorAddnewComponent implements OnInit {

  constructor(public professorService : ProfessorService) { }

  ngOnInit(): void {
    
  }

  //add new professor
  insertProfessor(form?:NgForm){
    this.professorService.insertProfessor(form.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
