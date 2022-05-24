import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//hay que crear una clase jugador
export class ServiceJugadorService {
  constructor() {}
  jugador() {
    return [
      {
        nombre: 'Joel',
        apellido: 'Dellamaggiore',
        dni: '42511013',
        fechaNac: '2000-03-25',
        facultad: 'Villa Maria',
        disciplina: { nombre: 'Futbol', key: 'fut' },
        nacionalidad: 'Argentina',
      },
      {
        nombre: 'Santiago',
        apellido: 'Giordano',
        dni: '42337809',
        fechaNac: '2000-01-16',
        facultad: 'Villa Maria',
        disciplina: { nombre: 'Voley', key: 'vol' },
        nacionalidad: 'Argentina',
      },
    ];
  }
}
