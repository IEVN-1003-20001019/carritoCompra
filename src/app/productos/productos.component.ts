import { Component } from '@angular/core';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private carritoService: CarritoService) {}

  productos = [
    { id: 1, nombre: 'Mona China 1', precio: 5 },
    { id: 2, nombre: 'Mona China 2', precio: 3 },
    { id: 3, nombre: 'Mona China 3', precio: 2 }
    // Se agregarán más
  ];

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
  }
}
