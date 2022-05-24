import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadService {

  constructor() { }

  getNacionalidades(){
    
    return this.http.get('https://restcountries.com/v2/lang/es');
  }
}
