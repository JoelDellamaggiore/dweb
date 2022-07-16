import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-editar-jugador',
  templateUrl: './modal-editar-jugador.component.html',
  styleUrls: ['./modal-editar-jugador.component.css']
})
export class ModalEditarJugadorComponent implements OnInit {
  jugador: any;
  constructor(public modalRef: MdbModalRef<ModalEditarJugadorComponent>) { }
  ngOnInit(): void {
    console.log(this.jugador);
  }

}
