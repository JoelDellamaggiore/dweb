import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/modelo/disciplina';
import { DisciplinaService } from 'src/app/service/disciplina.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import Swal from 'sweetalert2';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  modalRef: MdbModalRef<ModalEditComponent> | null = null;
  disciplinas : Disciplina[]=[];
  constructor(private discService: DisciplinaService, private modalService: MdbModalService,private router: Router, private activatedRoute: ActivatedRoute) { }

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
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.discService
          .eliminarDisciplina(codigo)
          .subscribe(response => Swal.fire({
            icon: 'success',
            title: 'Disciplina eliminada',
            text: 'La disciplina ha sido eliminada con exito ',
          }).then(() =>{  let currentUrl = this.router.url;
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);}));
        
      } else if (result.isDenied) {
        Swal.fire('La disciplina no ha sido eliminada', '', 'info')
      }
    })

  }
  refreshComponent(){
    this.router.navigate([this.router.url])
 }



}