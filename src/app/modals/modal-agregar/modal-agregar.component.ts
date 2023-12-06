import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})
export class ModalAgregarComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  titulo:string = '';
  cantidad:string = '';
  estilo:string = '';
  descripcion:string = '';
  marca:string = ''
  photo:string = '';
  

  constructor(public activeModal: NgbActiveModal, private servicioBackend: ServicioBackendService){}

  enviarDatosAgregar(){
    if(this.titulo != '' && this.cantidad != '' && this.estilo != '' && this.descripcion != '' && this.marca != '' && this.photo != ''){
      const datos = {
        titulo: this.titulo,
        cantidad: this.cantidad,
        estilo: this.estilo,
        descripcion: this.descripcion,
        marca: this.marca,
        photo: this.photo,
      };
  
      this.servicioBackend.agregarFigura(datos).subscribe(
        (respuesta: any) => {
          console.log('Respuesta del backend:', respuesta);
          if(respuesta.exito){
            alert("Se registro la figura con exito")
          }else{
            alert("Hubo un problema al registrar la figura")
          }
          // Manejar la respuesta del backend aquí
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Manejar errores aquí
        }
      );
    }else{
      alert("Te faltan campos por llenar");
    }
  }
}
