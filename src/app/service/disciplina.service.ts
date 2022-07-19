import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../modelo/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  url: string = 'http://localhost:8080/api/disciplina';

  constructor( private http: HttpClient) { 
     
  }

  getDisciplina(): Observable<Disciplina[]>{
    return this.http.get<Disciplina[]>(this.url+'/listar');
  }

  crearDisciplina(disc: Disciplina): Observable<Disciplina>{
    return this.http.post<Disciplina>(this.url + "/crear", disc);

  }

  eliminarDisciplina(codigo:String): Observable<any>{
    return this.http.delete<any>(this.url + '/eliminar/' +codigo);
  }
  obtenerDisciplina(codigo:String): Observable<Disciplina[]>{
    return this.http.get<Disciplina[]>(this.url+'/' + codigo);
  }
}
