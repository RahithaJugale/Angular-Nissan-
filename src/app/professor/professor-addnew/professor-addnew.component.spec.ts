import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAddnewComponent } from './professor-addnew.component';

describe('ProfessorAddnewComponent', () => {
  let component: ProfessorAddnewComponent;
  let fixture: ComponentFixture<ProfessorAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
