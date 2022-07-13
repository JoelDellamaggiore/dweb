import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/modelo/disciplina';
import { DisciplinaService } from 'src/app/service/disciplina.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  
  disciplinas : Disciplina[]=[];
  constructor(private discService: DisciplinaService) { }

  ngOnInit(): void {
    this.discService.getDisciplina()
    .subscribe(response => this.disciplinas=response);
  }

}
