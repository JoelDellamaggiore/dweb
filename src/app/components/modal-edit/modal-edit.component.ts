import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  edit: any;
  constructor(public modalRef: MdbModalRef<ModalEditComponent>) { }
  ngOnInit(): void {
    console.log(this.edit);
  }
}
