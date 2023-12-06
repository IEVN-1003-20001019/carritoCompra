import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-figura',
  templateUrl: './modal-figura.component.html',
  styleUrls: ['./modal-figura.component.css']
})
export class ModalFiguraComponent {
  @Input() figura: any;

  constructor(public activeModal: NgbActiveModal){}

  carrito: any[] = [];

  // Método para agregar al carrito desde el modal
  agregarAlCarrito(figura: any) {
    // Verificar si la figura ya está en el carrito
    const itemExistente = this.carrito.find(item => item.id === figura.id);

    if (itemExistente) {
      // Incrementar la cantidad si ya existe
      itemExistente.cantidad++;
    } else {
      // Agregar la figura al carrito con cantidad 1
      this.carrito.push({ ...figura, cantidad: 1 });
    }
  }

  
  
}
