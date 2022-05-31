import * as internal from "stream";

export class Facultad {
    idFacultad: number;
    nombre:string;
    ubicacion:String;
    telefono:number;
    mail:string;

    constructor(id:number,nombre:string,ubicacion:string,telefono:number,mail:string){
         this.idFacultad=id;
        this.nombre=nombre;
        this.ubicacion=ubicacion;
        this.telefono=telefono;
        this.mail=mail;
}
}
