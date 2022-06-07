import { Disciplina } from "./disciplina";
import { Facultad } from "./facultad";
import { Nacionalidad } from "./nacionalidad";
import { Rol } from "./rol";

export class Jugador {
    legajo: string;
    nombre: string;
    apellido : string;
    dni: string;
    telefono:string;
    email:string;
    fechaNacimiento:Date;
    nacionalidad:Nacionalidad;
    rol: Rol;
    facultad: Facultad;
    disciplina: Disciplina;
}
