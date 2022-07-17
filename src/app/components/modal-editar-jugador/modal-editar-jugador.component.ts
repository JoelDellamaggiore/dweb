import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Disciplina } from 'src/app/modelo/disciplina';
import { Facultad } from 'src/app/modelo/facultad';
import { Jugador } from 'src/app/modelo/jugador';
import { Nacionalidad } from 'src/app/modelo/nacionalidad';
import { ServiceJugadorService } from 'src/app/service/service-jugador.service';

@Component({
  selector: 'app-modal-editar-jugador',
  templateUrl: './modal-editar-jugador.component.html',
  styleUrls: ['./modal-editar-jugador.component.css']
})
export class ModalEditarJugadorComponent implements OnInit {
  jugador: any;
  editar!: FormGroup;
  public mayorDeEdad:Date;
  public mayorDeEdadStr:String | null;
  jugadorGuardar: Jugador = new Jugador();
  facultades: Facultad[] = [];
  disciplinas: Disciplina[] = [];
  nacionalidades: Nacionalidad[] = [];
  constructor(private pd:DatePipe,private jugadorService: ServiceJugadorService,private fb: FormBuilder,public modalRef: MdbModalRef<ModalEditarJugadorComponent>) { 
    this.crearFormulario();
  }
  
  
  ngOnInit(): void {
    this.jugadorService
    .getFacultades()
    .subscribe((response) => (this.facultades = response));
    this.jugadorService
    .getDisciplinas()
    .subscribe((response) => (this.disciplinas = response));
    this.jugadorService
    .getNacionalidades()
    .subscribe((response) => (this.nacionalidades = response));
    this.mayorDeEdad = new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate());
    this.mayorDeEdadStr = this.pd.transform(this.mayorDeEdad,"yyyy-MM-dd");
  }
  crearFormulario(){
    this.editar = this.fb.group({
      nombre: ['',[Validators.required,Validators.pattern('[A-Z][a-z]{3,}')]],
      apellido: ['',[Validators.required,Validators.pattern('[A-Z][a-z]{3,}')]],
      dni: ['',[Validators.required,Validators.pattern('^[0-9]{8}$')]],
      legajo: ['',[Validators.required,Validators.pattern('^[0-9]{5,8}$')]],
      telefono: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      email: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]],
      fechaNacimiento: ['',Validators.required],
      nacionalidad: ['',Validators.required],
      disciplina:['',Validators.required],
      facultad:['',Validators.required],
    });
  };
  guardarCambios(form:any){

  }
  compararNacionalidades(o1:Nacionalidad,o2:Nacionalidad): boolean{
    if(o1===undefined && o2 === undefined) return true;
    return o1===null||o2===null||o1===undefined||o2===undefined ? false: o1.codigo == o2.codigo;
  }
  compararFacultades(o1:Facultad,o2:Facultad): boolean{
    if(o1===undefined && o2 === undefined) return true;
    return o1===null||o2===null||o1===undefined||o2===undefined ? false: o1.codigo == o2.codigo;
  }
  compararDisciplinas(o1:Disciplina,o2:Disciplina): boolean{
    if(o1===undefined && o2 === undefined) return true;
    return o1===null||o2===null||o1===undefined||o2===undefined ? false: o1.codigo == o2.codigo;
  }

}
