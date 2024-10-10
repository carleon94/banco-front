import { ICategoria } from "./categoria";

export interface IProducto {
    id: string,
    categoriaId: string,
    nombre: string,
    codigo: string,
    descripcion: string,
    imageUrl: string,
    favorito: boolean,
    precio: string,
    stock: string,
    tienda: string,
    categoria?: ICategoria,
}