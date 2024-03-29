import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Disciplina } from 'src/app/modelo/disciplina';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-disciplina',
  templateUrl: './nueva-disciplina.component.html',
  styleUrls: ['./nueva-disciplina.component.css'],
})
export class NuevaDisciplinaComponent implements OnInit {
  discForm: FormGroup;
  disciplina: Disciplina = new Disciplina();
  constructor(private disciplinaService: DisciplinaService) {}

  ngOnInit(): void {
    this.discForm = new FormGroup({
      codigo: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),
    });
  }
  

  public get nombreNoValido() {
    return (
      this.discForm.get('nombre')?.invalid &&
      this.discForm.get('nombre')?.touched
    );
  }
  public get codigoNoValido() {
    return (
      this.discForm.get('codigo')?.invalid &&
      this.discForm.get('codigo')?.touched
    );
  }
  public get descNoValido() {
    return (
      this.discForm.get('descripcion')?.invalid &&
      this.discForm.get('descripcion')?.touched
    );
  }
  guardarDisciplina(form: any) {
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Faltan datos!',
      });
      return Object.values(this.discForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    if (form.valid) {
      this.disciplinaService
        .obtenerDisciplina(this.disciplina.codigo)
        .subscribe((response) => {
          if (response === null) {
            Swal.fire({
              title: 'Desea agregar la disciplina ' + this.disciplina.nombre + '?',
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
                this.disciplinaService
                  .crearDisciplina(this.disciplina)
                  .subscribe(response => Swal.fire({
                    icon: 'success',
                    title: 'Disciplina registrada',
                    text: 'La disciplina ha sido creada con exito ',
                  }));
              } else if (result.isDenied) {
                Swal.fire('La disciplina no ha sido creada', '', 'info')
              }
            })
          } else {
            Swal.fire('No se pueden crear 2 disciplinas con el mismo codigo', '', 'error');
          }
        });
    }
  }
}
