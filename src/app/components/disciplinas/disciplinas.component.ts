import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/modelo/disciplina';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  modalRef: MdbModalRef<ModalEditComponent> | null = null;
  disciplinas : Disciplina[]=[];
  constructor(private discService: DisciplinaService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.discService.getDisciplina()
    .subscribe(response => this.disciplinas=response);
  }
  openModal(codigo:string,nombre:string,descripcion:string) {
    const discAEditar = {
      codigo:codigo,
      nombre:nombre,
      descripcion:descripcion
    }
    this.modalRef = this.modalService.open(ModalEditComponent, {
      data: {
        "edit":discAEditar
      },
    });
  }}