import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disciplina } from '../modelo/disciplina';
import { Facultad } from '../modelo/facultad';
import { Jugador } from '../modelo/jugador';
import { Nacionalidad } from '../modelo/nacionalidad';
@Injectable({
  providedIn: 'root',
})
export class ServiceJugadorService {
  private API_URL= environment.API_URL;
  
  constructor(private http:HttpClient) {}
  
  getJugadores(): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(this.API_URL+ 'listar');
  }
  actualizarJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(this.API_URL+'actualizar/'+jugador.legajo,jugador);
  }
  guardarJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(this.API_URL+'nuevo-jugador',jugador);
  }
  getFacultades(): Observable<Facultad[]>{
    return this.http.get<Facultad[]>(this.API_URL+ 'facultades');
  }
  getDisciplinas(): Observable<Disciplina[]>{
    return this.http.get<Disciplina[]>(this.API_URL+ 'disciplinas');
  }
  getNacionalidades(): Observable<Nacionalidad[]>{
    return this.http.get<Nacionalidad[]>(this.API_URL+ 'nacionalidades');
  }
  obtenerJugador(legajo:string): Observable<Jugador>{
    return this.http.get<Jugador>(this.API_URL+legajo);
  }
  eliminarJugador(legajo:string): Observable<any>{
    return this.http.delete<any>(this.API_URL+'eliminar/'+legajo);
  }
}
