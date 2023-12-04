import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Iniciar Sesión', this.email, this.password);
  }
}
