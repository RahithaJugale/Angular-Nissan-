import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/shared/professor.service';

@Component({
  selector: 'app-professor-add',
  templateUrl: './professor-add.component.html',
  styleUrls: ['./professor-add.component.scss']
})
export class ProfessorAddComponent implements OnInit {

  constructor(public professorService : ProfessorService) { }

  ngOnInit(): void {
  }

}
