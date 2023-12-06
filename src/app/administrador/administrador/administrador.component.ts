import { Component, OnInit } from '@angular/core';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAgregarComponent } from 'src/app/modals/modal-agregar/modal-agregar.component';
import { ModificarFiguraComponent } from 'src/app/modals/modificar-figura/modificar-figura.component';
import { ModalEliminarComponent } from 'src/app/modals/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  
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
    const modalRef = this.modalService.open(ModalAgregarComponent, { size: 'lg' });
    modalRef.componentInstance.figura = figura;
  }

  abrirModalAgregar(): void{
    this.modalService.open(ModalAgregarComponent, { size: 'ml' });
  }

  abrirModalEditar(figura: any):void {
    const modalRef = this.modalService.open(ModificarFiguraComponent, { size: 'ml' });
    modalRef.componentInstance.figura = figura;
  }

  abrirModalEliminar(id:any):void {
    const modalRef = this.modalService.open(ModalEliminarComponent, { size: 'ml' });
    modalRef.componentInstance.id = id;
  }
}
