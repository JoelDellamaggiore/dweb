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
        var doo = new Date(this.jugador.fechaNacimiento);
        this.jugador.fechaNacimiento=  new Date( doo.getTime() - doo.getTimezoneOffset() * -60000 )  ;
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
