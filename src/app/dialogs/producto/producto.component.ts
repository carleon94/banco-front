import { Component, inject } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ProductoService } from '../../services/producto.service';
import { IProducto } from '../../interfaces/producto';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.sass'
})
export class ProductoComponent {

  data = inject(MAT_DIALOG_DATA);

  producto!: IProducto;
  constructor( private productoService: ProductoService ) {

  }

  ngOnInit() {
    this.productoService.obtener(this.data.productoId).subscribe( (resp: any) => {
      this.producto = resp;
    })
  }
}
