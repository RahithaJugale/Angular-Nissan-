import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorComponent } from './professor/professor.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ProfessorService } from 'src/app/shared/professor.service';
import { ProfessorAddComponent } from './professor/professor-add/professor-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessorAddnewComponent } from './professor/professor-addnew/professor-addnew.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    ProfessorListComponent,
    ProfessorAddComponent,
    ProfessorAddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
