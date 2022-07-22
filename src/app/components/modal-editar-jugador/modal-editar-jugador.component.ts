import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Disciplina } from 'src/app/modelo/disciplina';
import { Facultad } from 'src/app/modelo/facultad';
import { Nacionalidad } from 'src/app/modelo/nacionalidad';
import { ServiceJugadorService } from 'src/app/service/service-jugador.service';
import Swal from 'sweetalert2';
import { Moment } from 'moment';
import * as moment from 'moment';

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
  facultades: Facultad[] = [];
  disciplinas: Disciplina[] = [];
  nacionalidades: Nacionalidad[] = [];
  constructor(private router:Router,private pd:DatePipe,private jugadorService: ServiceJugadorService,private fb: FormBuilder,public modalRef: MdbModalRef<ModalEditarJugadorComponent>) { 
    this.formularioEditar();
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
  public get nombreNoValido() {
    return this.editar.get('nombre')?.invalid && this.editar.get('nombre')?.touched;
  }
  public get apellidoNoValido() {
    return this.editar.get('apellido')?.invalid && this.editar.get('apellido')?.touched;
  }
  public get dniNoValido() {
    return this.editar.get('dni')?.invalid && this.editar.get('dni')?.touched;
  }
  public get telefonoNoValido() {
    return this.editar.get('telefono')?.invalid && this.editar.get('telefono')?.touched;
  }
  public get emailNoValido() {
    return this.editar.get('email')?.invalid && this.editar.get('email')?.touched;
  }
  public get fechaNacimientoNoValido() {
    return this.editar.get('fechaNacimiento')?.invalid && this.editar.get('fechaNacimiento')?.touched;
  }
  public get nacionalidadNoValido() {
    return this.editar.get('nacionalidad')?.invalid && this.editar.get('nacionalidad')?.touched;
  }
  public get disciplinaNoValido() {
    return this.editar.get('disciplina')?.invalid && this.editar.get('disciplina')?.touched;
  }
  public get facultadNoValido() {
    return this.editar.get('facultad')?.invalid && this.editar.get('facultad')?.touched;
  }
  
  formularioEditar(){
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
  guardarCambios(){
    Swal.fire({
      title: 'Desea actualizar el jugador del legajo ' + this.jugador.legajo + '?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'question',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
<<<<<<< HEAD
        this.jugador.fechaNacimiento = moment(this.jugador.fechaNacimiento).toDate();
=======
        var doo = new Date(this.jugador.fechaNacimiento);
        this.jugador.fechaNacimiento=  new Date( doo.getTime() - doo.getTimezoneOffset() * -60000 )  ;
>>>>>>> 3b7668775f1160ad082eb39c7774f4df7666ea9d
        this.jugadorService
          .actualizarJugador(this.jugador)
          .subscribe(response => Swal.fire({
            icon: 'success',
            title: 'Jugador actualizado',
            text: 'El jugador ha sido actualizado con exito ',
          }));
      } else if (result.isDenied) {
        Swal.fire('El jugador no ha sido actualizado', '', 'info')
      }
    })
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
  cerrar(){
    this.modalRef.close()
  }

}
