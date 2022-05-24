import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDisciplinaService {

  constructor() { }

  disciplina(){
    return[
      {nombre: "Futbol",key: "fut"},
      {nombre: "Basket",key: "bas"},
      {nombre: "Voley",key: "vol"},
      {nombre: "Hockey",key: "hock"},
    ]
  }
}
