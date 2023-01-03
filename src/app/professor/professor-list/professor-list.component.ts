import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/shared/professor.service';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.scss']
})
export class ProfessorListComponent implements OnInit {

  constructor(public professorService: ProfessorService) { }

  ngOnInit(): void {
    this.getProfessorList();
  }

  //get data from service 
  getProfessorList(){
    this.professorService.getProfessorList();
  }
}
