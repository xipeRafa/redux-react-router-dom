  
import {
      AGREGAR_PRODUCTO,
      AGREGAR_PRODUCTO_EXITO,
      AGREGAR_PRODUCTO_ERROR,
      COMENZAR_DESCARGA_PRODUCTOS,
      DESCARGA_PRODUCTOS_EXITO,
      DESCARGA_PRODUCTOS_ERROR,
      OBTENER_PRODUCTO_ELIMINAR,
      PRODUCTO_ELIMINADO_EXITO,
      PRODUCTO_ELIMINADO_ERROR,
      OBTENER_PRODUCTO_EDITAR,
      PRODUCTO_EDITADO_EXITO,
      PRODUCTO_EDITADO_ERROR
  } from '../types';

  // Crear nuevos productos
export function crearNuevoProductoAction(producto) { //esta se usa en el componente
      return ()=>{
            console.log('desde action')
      }
}