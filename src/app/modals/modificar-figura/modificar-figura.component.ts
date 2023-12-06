import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicioBackendService } from 'src/app/comunicacion/servicio-backend.service';

@Component({
  selector: 'app-modificar-figura',
  templateUrl: './modificar-figura.component.html',
  styleUrls: ['./modificar-figura.component.css']
})
export class ModificarFiguraComponent implements OnInit {
  @Input() figura: any;
  @ViewChild('fileInput') fileInput!: ElementRef;

  miArchivo: File = new File(["Hola"], "ejemplo.txt");

  titulo:string = '';
  cantidad:string = '';
  estilo:string = '';
  descripcion:string = '';
  marca:string = '';
  photo:string = '';
  

  constructor(public activeModal: NgbActiveModal, private servicioBackend: ServicioBackendService){}

  ngOnInit(){
    this.titulo = this.figura.titulo;
    this.cantidad = this.figura.cantidad;
    this.estilo = this.figura.estilo;
    this.descripcion = this.figura.descripcion;
    this.marca = this.figura.marca;
    this.photo = this.figura.photo;
  }

  enviarDatosModificar(){
    const datos = {
      id: this.figura.id,
      titulo: this.titulo,
      cantidad: this.cantidad,
      estilo: this.estilo,
      descripcion: this.descripcion,
      marca: this.marca,
      photo: this.photo,
    };

    this.servicioBackend.modificarFigura(datos).subscribe(
      (respuesta: any) => {
        console.log('Respuesta del backend:', respuesta);
        if(respuesta.exito){
          alert("Se modifico la figura con exito")
        }else{
          alert("Hubo un problema al modificar la figura")
        }
        // Manejar la respuesta del backend aquí
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
