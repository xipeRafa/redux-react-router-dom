import {COMENZAR_EDICION_PRODUCTO,   OBTENER_PRODUCTO_EDITAR, 
        PRODUCTO_EDITADO_EXITO,      PRODUCTO_EDITADO_ERROR} from '../types';

import clienteAxios from '../config/axios';


export function obtenerProductoEditar(producto) {
      return (dispatch) => {
          dispatch( obtenerProductoEditarAction(producto) )
      }
}
  
const obtenerProductoEditarAction = producto => ({
      type: OBTENER_PRODUCTO_EDITAR,
      payload: producto
})


export function editarProductoAction(producto) {  // Edita un registro en la api y state
    return async (dispatch) => {
        dispatch( editarProducto() );

        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto);    
            dispatch( editarProductoExito(producto) );
        } catch (error) {
            console.log(error);
            dispatch( editarProductoError() );
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
});

const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
}) 