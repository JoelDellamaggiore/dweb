import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Disciplina } from 'src/app/modelo/disciplina';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {
  editForm: FormGroup;
 
  edit: any;
  constructor(public modalRef: MdbModalRef<ModalEditComponent>,private disciplinaService: DisciplinaService) { }
  ngOnInit(): void {
    this.editForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),
    });
  }

  public get nombreNoValido() {
    return (
      this.editForm.get('nombre')?.invalid &&
      this.editForm.get('nombre')?.touched
    );
  }

  public get descNoValido() {
    return (
      this.editForm.get('descripcion')?.invalid &&
      this.editForm.get('descripcion')?.touched
    );
  }
  actualizarDisciplina(form:any) {
    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Faltan datos!',
      });
      return Object.values(this.editForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
    if (form.valid) {
      this.disciplinaService
        .obtenerDisciplina(this.edit.codigo)
        .subscribe((response) => {
         
            this.disciplinaService
              .actualizarDisciplina(this.edit)
              .subscribe((response) =>
                Swal.fire({
                  icon: 'success',
                  title: 'Disciplina actualizada',
                  text: 'La disciplina ha sido creada con exito ',
                })
              );
        });
    }
  }
}
