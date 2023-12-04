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

  // Puedes agregar más métodos según sea necesario (eliminar del carrito, etc.)
}
