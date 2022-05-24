import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceDisciplinaService } from '../service-disciplina.service';
import { ServiceFacultadService } from '../service-facultad.service';


@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {
  nuevo!: FormGroup;
  disciplinas: any;
  facultades:any;
  constructor(private fb: FormBuilder, private disciplinaDatos: ServiceDisciplinaService, private facultadDatos: ServiceFacultadService) {
    this.crearFormulario(); 
    this.disciplinas= disciplinaDatos.disciplina();
    this.facultades= facultadDatos.facultad();
  }

  ngOnInit(): void {
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
  public get nacionalidadNacimientoNoValido() {
    return this.nuevo.get('nacionalidad')?.invalid && this.nuevo.get('nacionalidad')?.touched;
  }
  public get disciplinaNoValido() {
    return this.nuevo.get('disciplina')?.invalid && this.nuevo.get('disciplina')?.touched;
  }
  public get facultadNoValido() {
    return this.nuevo.get('facultad')?.invalid && this.nuevo.get('facultad')?.touched;
  }
  
  crearFormulario(){
    this.nuevo = this.fb.group({
      nombre: ['',[Validators.required,Validators.minLength(5),Validators.nullValidator]],
      apellido: ['',[Validators.required,Validators.minLength(5)]],
      dni: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      legajo: ['',Validators.required],
      telefono: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fechaNacimiento: ['',Validators.required],
      nacionalidad: ['',Validators.required],
      disciplina:['',Validators.required],
      facultad:['',Validators.required],
    });
  };
  guardar(){
    if(this.nuevo.invalid){
      return Object.values(this.nuevo.controls).forEach(control =>{
        control.markAsTouched();
      });
    }
  };

 


}

