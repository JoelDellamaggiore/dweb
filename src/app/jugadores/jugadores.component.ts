import { Component, OnInit } from '@angular/core';
import { Jugador } from '../modelo/jugador';
import Swal from 'sweetalert2';
import { ServiceJugadorService } from '../service-jugador.service';
import { ModalEditarJugadorComponent } from '../modal-editar-jugador/modal-editar-jugador.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  modalRef: MdbModalRef<ModalEditarJugadorComponent> | null = null;
  jugador: Jugador[] = [];
  public pagina: number = 0;
  public busqueda: string = '';
  constructor(private jugadorservicio: ServiceJugadorService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.jugadorservicio
      .getJugadores()
      .subscribe((response) => (this.jugador = response));
  }
  proximaPagina(){
    this.pagina += 1;
  }
  anteriorPagina(){
    if(this.pagina > 0)
      this.pagina -= 1;
  }
  filtrandoJugador(busqueda: string){
    this.pagina = 0;
    this.busqueda = busqueda;
  }
  openModal(legajo:string) {
    this.modalRef = this.modalService.open(ModalEditarJugadorComponent, {
      data: {
        "legajo":legajo
      },
    });
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
          .subscribe(response => Swal.fire({
            icon: 'success',
            title: 'Jugador eliminado',
            text: 'El jugador ha sido eliminado con exito ',
          }));
      } else if (result.isDenied) {
        Swal.fire('El jugador no ha sido eliminado', '', 'info')
      }
    })

  }
}
