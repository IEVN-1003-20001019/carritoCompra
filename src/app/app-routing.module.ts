import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'carrito', component: CarritoComponent},
  {path: 'iniciarSesion', component: IniciarSesionComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
