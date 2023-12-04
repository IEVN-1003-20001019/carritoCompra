
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productosEnCarritoSubject = new BehaviorSubject<any[]>([]);
  productosEnCarrito$ = this.productosEnCarritoSubject.asObservable();

  agregarAlCarrito(producto: any) {
    const productosEnCarrito = this.productosEnCarritoSubject.value;
    this.productosEnCarritoSubject.next([...productosEnCarrito, producto]);
  }

  eliminarDelCarrito(productoId: number) {
    const productosEnCarrito = this.productosEnCarritoSubject.value;
    const nuevosProductosEnCarrito = productosEnCarrito.filter(producto => producto.id !== productoId);
    this.productosEnCarritoSubject.next(nuevosProductosEnCarrito);
  }

  limpiarCarrito() {
    this.productosEnCarritoSubject.next([]);
  }

}
