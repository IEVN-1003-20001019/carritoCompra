import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './InicioSesion/iniciosesion/iniciosesion.component';
import { RegistrarComponent } from './registrar/registrar/registrar.component';
import { FigurasComponent } from './figuras/figuras/figuras.component'
import { AdministradorComponent } from './administrador/administrador/administrador.component'

const routes: Routes = [
  {path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full'},
  {path: 'iniciar-sesion', component:IniciosesionComponent },
  {path: 'registro', component:RegistrarComponent},
  {path: 'figuras', component:FigurasComponent},
  {path: 'administrador', component:AdministradorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
