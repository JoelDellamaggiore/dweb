import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Disciplina } from '../../modelo/disciplina';
import { Facultad } from '../../modelo/facultad';
import { Jugador } from '../../modelo/jugador';
import { Nacionalidad } from '../../modelo/nacionalidad';
import { ServiceJugadorService } from '../../service/service-jugador.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {
  public mayorDeEdad: Date;
  public mayorDeEdadStr: String | null;
  nuevo!: FormGroup;
  jugador: Jugador = new Jugador();
  facultades: Facultad[] = [];
  disciplinas: Disciplina[] = [];
  nacionalidades: Nacionalidad[] = [];

  constructor(private route: Router, private fb: FormBuilder, private jugadorService: ServiceJugadorService, private pd: DatePipe) {
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
    this.mayorDeEdad = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    this.mayorDeEdadStr = this.pd.transform(this.mayorDeEdad, "yyyy-MM-dd");
  }

  public get nombreNoValido() {
    return this.nuevo.get('nombre')?.invalid && this.nuevo.get('nombre')?.touched;
  }
  public get apellidoNoValido() {
    return this.nuevo.get('apellido')?.invalid && this.nuevo.get('apellido')?.touched;
  }
  public get dniNoValido() {
    return this.nuevo.get('dni')?.invalid && this.nuevo.get('dni')?.touched;
  }
  public get legajoNoValido() {
    return this.nuevo.get('legajo')?.invalid && this.nuevo.get('legajo')?.touched;
  }
  public get telefonoNoValido() {
    return this.nuevo.get('telefono')?.invalid && this.nuevo.get('telefono')?.touched;
  }
  public get emailNoValido() {
    return this.nuevo.get('email')?.invalid && this.nuevo.get('email')?.touched;
  }
  public get fechaNacimientoNoValido() {
    return this.nuevo.get('fechaNacimiento')?.invalid && this.nuevo.get('fechaNacimiento')?.touched;
  }
  public get nacionalidadNoValido() {
    return this.nuevo.get('nacionalidad')?.invalid && this.nuevo.get('nacionalidad')?.touched;
  }
  public get disciplinaNoValido() {
    return this.nuevo.get('disciplina')?.invalid && this.nuevo.get('disciplina')?.touched;
  }
  public get facultadNoValido() {
    return this.nuevo.get('facultad')?.invalid && this.nuevo.get('facultad')?.touched;
  }

  crearFormulario() {
    this.nuevo = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[A-Z][a-z]{3,}')]],
      apellido: ['', [Validators.required, Validators.pattern('[A-Z][a-z]{3,}')]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      legajo: ['', [Validators.required, Validators.pattern('^[0-9]{5,8}$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$')]],
      fechaNacimiento: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      disciplina: ['', Validators.required],
      facultad: ['', Validators.required],
    });
  };
  guardarJugador(form: any) {
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Faltan datos!',
      });
      return Object.values(this.nuevo.controls).forEach(control => {
        control.markAsTouched();
      });
    }
    if (form.valid) {
      Swal.fire({
        title: 'Desea agregar el jugador del legajo ' + this.jugador.legajo + '?',
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
          this.jugador.fechaNacimiento = moment(this.jugador.fechaNacimiento).toDate();
          this.jugadorService
            .guardarJugador(this.jugador)
            .subscribe(response => Swal.fire({
              icon: 'success',
              title: 'Jugador registrado',
              text: 'El jugador ha sido creado con exito ',
            }));
        } else if (result.isDenied) {
          Swal.fire('El jugador no ha sido creado', '', 'info')
        }
      })

    }

  };

}

