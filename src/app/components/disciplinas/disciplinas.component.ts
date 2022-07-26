import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/modelo/disciplina';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import Swal from 'sweetalert2';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  modalRef: MdbModalRef<ModalEditComponent> | null = null;
  disciplinas: Disciplina[] = [];
  constructor(
    private discService: DisciplinaService,
    private modalService: MdbModalService,
    private router: Router,
    private route: ActivatedRoute

  ) {

  }

  ngOnInit(): void {
    this.discService
      .getDisciplina()
      .subscribe((response) => (this.disciplinas = response));
  }
  openModal(d: any) {
    const discEditar = Object.assign({}, d)
    this.modalRef = this.modalService.open(ModalEditComponent, {
      data: {
        "edit": discEditar
      },
    });
    this.modalRef.onClose.subscribe(()=>{this.discService
      .getDisciplina()
      .subscribe((response) => (this.disciplinas = response));});
  }

  eliminarDisciplina(codigo: string) {
    Swal.fire({
      title: 'Desea eliminar esta disciplina ' + codigo + '?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      icon: 'question',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.discService.eliminarDisciplina(codigo).subscribe(
          (response) => {
            //Next callback
            this.discService
              .getDisciplina()
              .subscribe((response) => (this.disciplinas = response));
            Swal.fire({
              icon: 'success',
              title: 'Disciplina eliminada',
              text: 'La disciplina ha sido eliminada con exito ',
            })
          },
          (error) => {
            //Error callback

            Swal.fire('La disciplina no ha sido eliminada', '', 'error');

            //throw error;   //You can also throw the error to a global error handler
          }
        );
      } else if (result.isDenied) {
        Swal.fire('La disciplina no ha sido eliminada', '', 'info');
      }
    });
  }
}
