import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../modelo/jugador';
import Swal from 'sweetalert2';
import { ServiceJugadorService } from '../../service/service-jugador.service';
import { ModalEditarJugadorComponent } from '../modal-editar-jugador/modal-editar-jugador.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Facultad } from 'src/app/modelo/facultad';
import { Disciplina } from 'src/app/modelo/disciplina';
import { Nacionalidad } from 'src/app/modelo/nacionalidad';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  modalRef: MdbModalRef<ModalEditarJugadorComponent> | null = null;
  jugador: Jugador[] = [];
  jugadore: Jugador[] = [];
  facultades: Facultad[] = [];
  disciplinas: Disciplina[] = [];
  nacionalidades: Nacionalidad[] = [];
  disciplinaSeleccionada: string = "";
  nacionalidadSeleccionada: string = "";
  facultadSeleccionada: string = "";
  public pagina: number = 0;
  public cuantosPorPagina: number = 1;
  constructor(private jugadorservicio: ServiceJugadorService, private modalService: MdbModalService) { 
  }

  ngOnInit(): void {
    this.jugadorservicio
      .getJugadores()
      .subscribe((response) => (this.jugador = response));
      this.jugadorservicio
      .getFacultades()
      .subscribe((response) => (this.facultades = response));
    this.jugadorservicio
      .getDisciplinas()
      .subscribe((response) => (this.disciplinas = response));
    this.jugadorservicio
      .getNacionalidades()
      .subscribe((response) => (this.nacionalidades = response));
  }
  
  openModal(jugador:any) {
    const jugadorEditar = Object.assign({},jugador)
    this.modalRef = this.modalService.open(ModalEditarJugadorComponent, {
      data: {
        "jugador":jugadorEditar
      },
    });
    this.modalRef.onClose.subscribe(()=>{this.jugadorservicio
      .getJugadores()
      .subscribe((response) => (this.jugador = response));});
  }
  eliminarJugador(legajo: string) {
    Swal.fire({
      title: 'Desea eliminar el jugador del legajo ' + legajo + '?',
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
        this.jugadorservicio
          .eliminarJugador(legajo)
          .subscribe(response => this.busqueda(""));
          Swal.fire({
            icon: 'success',
            title: 'Jugador eliminado',
            text: 'El jugador ha sido eliminado con exito ',
          })
      } else if (result.isDenied) {
        Swal.fire('El jugador no ha sido eliminado', '', 'info')
      }
    })

  }
  busqueda(filter:string){
   this.jugadorservicio
    .search(filter)
    .subscribe((result)=>{this.jugador=result});
  }
  busquedaCombos(){
    if(this.disciplinaSeleccionada == "" && this.facultadSeleccionada == "" && this.nacionalidadSeleccionada == ""){
      this.jugadorservicio
      .getJugadores()
      .subscribe((response) => (this.jugador = response));
    }else{
      this.jugadorservicio
      .searchCombos(this.disciplinaSeleccionada,this.facultadSeleccionada,this.nacionalidadSeleccionada)
      .subscribe((result)=>{this.jugador=result});
    }
  }
  proximaPagina(){
    this.pagina += this.cuantosPorPagina;
  }
  anteriorPagina(){
    if(this.pagina > 0)
      this.pagina -= this.cuantosPorPagina;
  }
}
