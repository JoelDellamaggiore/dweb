import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFacultadService {

  constructor() { }
  facultad() {
   return[ {nombre: "Villa Maria",key: "vm"},
    {nombre: "San Francisco",key: "sf"},
    {nombre: "Rafaela",key: "rfa"},
    {nombre: "La Plata",key: "lpt"},
    {nombre: "Cordoba",key: "cba"},]
  }
}

