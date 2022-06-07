import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from './modelo/jugador';

@Injectable({
  providedIn: 'root',
})
//hay que crear una clase jugador
export class ServiceJugadorService {
  url:string = 'http://localhost:8080/api/jugadores';
  constructor(private http:HttpClient) {}
  // jugador() {
  //   return [
  //     {
  //       nombre: 'Joel',
  //       apellido: 'Dellamaggiore',
  //       dni: '42511013',
  //       fechaNac: '2000-03-25',
  //       facultad: 'Villa Maria',
  //       disciplina: { nombre: 'Futbol', key: 'fut' },
  //       nacionalidad: 'Argentina',
  //     },
  //     {
  //       nombre: 'Santiago',
  //       apellido: 'Giordano',
  //       dni: '42337809',
  //       fechaNac: '2000-01-16',
  //       facultad: 'Villa Maria',
  //       disciplina: { nombre: 'Voley', key: 'vol' },
  //       nacionalidad: 'Argentina',
  //     },
  //   ];
  // }
  getJugadores(): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(this.url+ '/listar');
  }
}
