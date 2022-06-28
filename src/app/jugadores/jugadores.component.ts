import { Component, OnInit } from '@angular/core';
import { Jugador } from '../modelo/jugador';
import Swal from 'sweetalert2';
import { ServiceJugadorService } from '../service-jugador.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  jugador: Jugador[] = [];
  constructor(private jugadorservicio: ServiceJugadorService) {}
  ngOnInit(): void {
    this.jugadorservicio
      .getJugadores()
      .subscribe((response) => (this.jugador = response));
  }
  eliminarJugador(legajo:string){
    Swal.fire({
      title: 'Desea eliminar el jugador del legajo '+legajo+'?',
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
