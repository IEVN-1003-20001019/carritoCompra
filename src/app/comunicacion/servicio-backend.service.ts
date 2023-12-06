import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioBackendService {
  constructor(private http: HttpClient) { }

  buscarUsuario(datos: any) {
    //'http://localhost:5000' es la URL del backend Flask
    const url = `http://localhost:5000/user?email=${datos.parametro1}&password=${datos.parametro2}`;

    return this.http.get(url);
  }

  registrarUsuario(datos: any){
    const url = `http://localhost:5000/user_registration`;
    const body = {
      email: datos.parametro1,
      password: datos.parametro2
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  recolectarFiguras(){
    const url = `http://localhost:5000/figuras`;

    return this.http.get(url);
  }

  //Metodos para el CRUD de las peliculas
  agregarFigura(datos: any){
    const url = `http://localhost:5000/figure_registration`;
    const body = {
      titulo: datos.titulo,
      cantidad: datos.cantidad,
      estilo: datos.estilo,
      descripcion: datos.descripcion,
      marca: datos.marca,
      photo: datos.photo,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  //Metodo para eliminar pelicula
  eliminarFigura(id:any){
    const url = `http://localhost:5000/figure_delete`;
    const body = {
      id: id
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  //Metodo para modificar una pelicula
  modificarFigura(datos:any){
    const url = `http://localhost:5000/figure_edit`;
    const body = {
      id: datos.id,
      titulo: datos.titulo,
      cantidad: datos.cantidad,
      estilo: datos.estilo,
      descripcion: datos.descripcion,
      marca: datos.marca,
      photo: datos.photo,
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url,body,{headers});
  }

  agregarFiguraAlCarrito(figura: any) {
    const url = 'http://localhost:5000/agregar_figura_al_carrito';
    const body = {
      id: figura.id,
      titulo: figura.titulo
      // Puedes agregar más campos según tus necesidades
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(url, body, { headers });
  }
  
}
