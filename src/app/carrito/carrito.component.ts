// carrito.component.ts

import { Component, OnInit } from '@angular/core';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: any[] = [];
  
  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.productosEnCarrito$.subscribe(productos => {
      this.productosEnCarrito = productos;
    });
  }

  calcularTotal(): number {
    return this.productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);
  }
}
