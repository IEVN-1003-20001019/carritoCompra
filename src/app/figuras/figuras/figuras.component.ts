import { Component, OnInit } from '@angular/core';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFiguraComponent } from 'src/app/modals/modal-figura/modal-figura.component';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.css']
})
export class FigurasComponent implements OnInit {
  listaFiguras: any[] = [];

  constructor(private servicioBackend: ServicioBackendService, private modalService: NgbModal) {}

  ngOnInit(){
    this.servicioBackend.recolectarFiguras().subscribe(
      (respuesta: any) => {
        console.log('Respuesta del backend:', respuesta);
        if(respuesta.exito){
          this.listaFiguras = respuesta.figuras;
          console.log(this.listaFiguras);
        }else{
          alert("No hay figuras")
        }
        // Manejar la respuesta del backend aquí
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Manejar errores aquí
      }
    );
  }

  abrirModal(figura: any): void {
    const modalRef = this.modalService.open(ModalFiguraComponent, { size: 'lg' });
    modalRef.componentInstance.figura = figura;
  }

  carrito: any[] = [];
  
  agregarAlCarrito(figura: any): void {
    this.servicioBackend.agregarFiguraAlCarrito(figura).subscribe(
      (respuesta: any) => {
        if (respuesta.exito) {
          // Actualiza el carrito después de agregar la figura
          this.carrito = respuesta.carrito;
        } else {
          console.error('Error al agregar la figura al carrito:', respuesta.mensaje);
        }
      },
      (error) => {
        console.error('Error en la solicitud al agregar al carrito:', error);
      }
    );
  }
  

  // Método para eliminar del carrito
  eliminarDelCarrito(item: any) {
    const index = this.carrito.indexOf(item);
    if (index !== -1) {
      // Restar la cantidad o eliminar si es 1
      if (item.cantidad > 1) {
        item.cantidad--;
      } else {
        this.carrito.splice(index, 1);
      }
    }
  }
}
