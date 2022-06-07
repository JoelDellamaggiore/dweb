import { Component, OnInit } from '@angular/core';
import { Jugador } from '../modelo/jugador';

import { ServiceJugadorService } from '../service-jugador.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  // jugador: any;
  // constructor(private jugadoresDatos: ServiceJugadorService) {
  //   this.jugador = jugadoresDatos.jugador();
  // }

  // ngOnInit(): void {}
  // filtros: any[] = [
  //   { nombre: 'Facultad', key: 'fac' },
  //   { nombre: 'Disciplina', key: 'dis' },
  // ];

  // editar(id: number) {
  //   console.log(id);
  // }
  // eliminar(id: number) {
  //   console.log(id);
  // }
  jugador: Jugador[] = [];
  constructor(private jugadorservicio: ServiceJugadorService) {}
  ngOnInit(): void {
    this.jugadorservicio
      .getJugadores()
      .subscribe((response) => (this.jugador = response));
  }
}
