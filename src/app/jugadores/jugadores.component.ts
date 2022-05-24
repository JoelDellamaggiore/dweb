import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filtros: any[] = [
    {nombre: "Facultad",key: "fac"},
    {nombre: "Disciplina",key: "dis"},
  ]

}
