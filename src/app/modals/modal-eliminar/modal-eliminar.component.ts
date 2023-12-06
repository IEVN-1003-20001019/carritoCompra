import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent {
  @Input() id: any;

  constructor(public activeModal: NgbActiveModal, private servicioBackend: ServicioBackendService){}

  eliminarFigura(){
    this.servicioBackend.eliminarFigura(this.id).subscribe(
      (respuesta: any) => {
        console.log('Respuesta del backend:', respuesta);
        if(respuesta.exito){
          alert("Se elimino la figura con exito")
        }else{
          alert("Hubo un problema al eliminar la figura del sistema")
        }
        // Manejar la respuesta del backend aquí
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Manejar errores aquí
      }
    );
  }
}
