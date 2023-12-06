import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms';
import { IniciosesionComponent } from './InicioSesion/iniciosesion/iniciosesion.component';
import { RegistrarComponent } from './registrar/registrar/registrar.component';
import { FigurasComponent } from './figuras/figuras/figuras.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalFiguraComponent } from './modals/modal-figura/modal-figura.component';
import { AdministradorComponent } from './administrador/administrador/administrador.component';
import { ModalAgregarComponent } from './modals/modal-agregar/modal-agregar.component';
import { ModificarFiguraComponent } from './modals/modificar-figura/modificar-figura.component';
import { ModalEliminarComponent } from './modals/modal-eliminar/modal-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    RegistrarComponent,
    FigurasComponent,
    ModalFiguraComponent,
    AdministradorComponent,
    ModalAgregarComponent,
    ModificarFiguraComponent,
    ModalEliminarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
