import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { IProducto } from '../../interfaces/producto';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ProductoComponent } from '../../dialogs/producto/producto.component';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ CommonModule , MatCardModule , MatButtonModule , MatGridListModule, MatIconButton , MatIconModule, MatButtonToggleModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.sass'
})
export class ListadoProductosComponent {

  listadoProductos!: IProducto[];

  constructor( private productoService: ProductoService , private dialog: MatDialog ) {

  }

  ngOnInit() {
    this.obtenerTodos();
  }

  onValChange( event: any ) {
    console.log( event )
    console.log( event.source.checked )

    if( !event.source.change._checked ) {
      switch( event.value ){
        case 'all':
          this.obtenerTodos();
          break;
        case 'favorites':
          this.obtenerFavoritos();
          break;
      }
    }
  }

  obtenerTodos() {
    this.productoService.obtenerListado().subscribe( (resp: any) => {
      console.log(resp);
      this.listadoProductos = resp
    })
  }

  obtenerFavoritos() {
    this.productoService.obtenerListadoFavoritos().subscribe( (resp: any) => {
      console.log(resp);
      this.listadoProductos = resp
    })
  }
  showModal( producto: IProducto ) {
    this.dialog.open( ProductoComponent , {
      data: {
        productoId: producto.id,
      },
    })
  }

  favorito( producto: IProducto ){
    producto.favorito = !producto.favorito;
    this.productoService.editarProductoFavorito( producto.id , producto).subscribe( (resp: any) => {
    })
  }
}
