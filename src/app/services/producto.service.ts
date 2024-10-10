import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL: string = ''

  constructor( private http:HttpClient ) { 
    this.URL = `${env.API_URL}/Productos`
  }

  obtener( id: string ) {
    return this.http.get( this.URL+'/'+id );
  }

  obtenerListado() {
    return this.http.get( this.URL );
  }

  obtenerListadoFavoritos() {
    let url = `${this.URL}/Favoritos`
    return this.http.get( url )
  }

  editarProductoFavorito( id: string , data: any ) {
    let url = `${this.URL}/${id}`
    return this.http.put( url , data );
  }
}
